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
import { BsPersonAdd } from "react-icons/bs";
import { Stethoscope } from "@/ui/icons";
import { CiTimer } from "react-icons/ci";
import { LoadingButton } from "@/ui/LoadingButton";

// Define the form schema using zod
const formSchema = z.object({
  name: z.string(),
  image: z.instanceof(File),
  phone: z.string(),
  email: z.string(),
  address: z.string(),
  registered: z.string(), //date type
  lastVisited: z.string(),
});

function CreatePatientsForm() {
  const createDocument = useMutation(api.patients.createPatient);
  const generateUploadUrl = useMutation(api.documents.generateUploadUrl);

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
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

    // Create the doctor entry in the system
    await createDocument({
      name: values.name,
      email: values.email,
      registered: values.registered,
      address: values.address,
      phone: values.phone,
      image: storageId,
      lastVisited: values.lastVisited,
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      address: "",
      phone: "",
      registered: new Date().toISOString(),
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
                  <input placeholder="Doctor's Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <input placeholder="Doctor's Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Profile Image (optional)</FormLabel>
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

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <input placeholder="+912312431423" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Address</FormLabel>
                <FormControl>
                  <textarea placeholder=" Pedritrics" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastVisited"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Last Visited</FormLabel>
                <FormControl>
                  <input type="date" placeholder=" Pedritrics" {...field} />
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

export default CreatePatientsForm;
