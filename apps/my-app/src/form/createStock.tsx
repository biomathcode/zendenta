"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/ui/form";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import { z } from "zod";
import { MultiStep } from "@/ui/multistepper";
import { BsBoxSeam } from "react-icons/bs";
import { CiTimer } from "react-icons/ci";
import { LoadingButton } from "@/ui/LoadingButton";

// Define the form schema using zod
const formSchema = z.object({
  name: z.string().min(1, "Name is required").max(250),
  image: z.instanceof(File).optional(), // Optional image upload
  categories: z.enum(["Antiseptic", "Antibiotic", "Steroid"]),
  sku: z.string().min(1, "SKU is required"),
  vendor: z.string().min(1, "Vendor is required"),
  stock: z.coerce.number().min(0, "Stock must be a non-negative number"),
  status: z.enum(["IN STOCK", "LOW STOCK", "OUT OF STOCK"]),
  quantity: z.coerce.number().min(1, "Quantity must be at least 1"),
  assertValue: z.coerce
    .number()
    .min(0, "Assert Value must be a non-negative number"),
});

function CreateStockForm() {
  const createDocument = useMutation(api.stocks.createStocks);
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    let storageId;
    if (values.image) {
      const url = await generateUploadUrl();
      const result = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": values.image.type },
        body: values.image,
      });
      const response = await result.json();
      storageId = response.storageId;
    }

    // Create the stock entry in the system
    await createDocument({
      name: values.name,
      image: storageId,
      categories: values.categories,
      sku: values.sku,
      vendor: values.vendor,
      stock: values.stock,
      status: values.status,
      quantity: values.quantity,
      assertValue: values.assertValue,
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      image: undefined,
      categories: "Antiseptic",
      sku: "",
      vendor: "",
      stock: 0,
      status: "IN STOCK",
      quantity: 1,
      assertValue: 0,
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 flex flex-col gap-4"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <input placeholder="Stock Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="sku"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>SKU</FormLabel>
                <FormControl>
                  <input placeholder="SKU" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categories"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Categories</FormLabel>
                <FormControl>
                  <select {...field}>
                    <option value="Antiseptic">Antiseptic</option>
                    <option value="Antibiotic">Antibiotic</option>
                    <option value="Steroid">Steroid</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="vendor"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Vendor</FormLabel>
                <FormControl>
                  <input placeholder="Vendor Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="stock"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Stock</FormLabel>
                <FormControl>
                  <input placeholder="Stock" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Status</FormLabel>
                <FormControl>
                  <select {...field}>
                    <option value="IN STOCK">In Stock</option>
                    <option value="LOW STOCK">Low Stock</option>
                    <option value="OUT OF STOCK">Out of Stock</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="quantity"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Quantity</FormLabel>
                <FormControl>
                  <input placeholder="Quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="assertValue"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Assert Value</FormLabel>
                <FormControl>
                  <input placeholder="Assert Value" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Product Image (optional)</FormLabel>
                <FormControl>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      field.onChange(file);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <LoadingButton
            isLoading={form.formState.isSubmitting}
            loadingText="Uploading..."
          >
            Submit
          </LoadingButton>
        </form>
      </Form>
    </div>
  );
}

export default CreateStockForm;
