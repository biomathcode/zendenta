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
  name: z.string().min(1, "Name is required").max(250),
  email: z.string().email("Invalid email"),
  type: z.enum(["PART-TIME", "FULL-TIME"]).default("FULL-TIME"),
  assigned_cosmatic: z
    .array(z.string())
    .min(1, "At least one service must be assigned"),
  assigned_treatment: z
    .array(z.string())
    .min(1, "At least one service must be assigned"),

  working_days: z.array(z.number().min(0).max(23)), // Hours represented as integers from 0 to 23
  image: z.instanceof(File).optional(), // Optional image upload
  occupation: z.string().min(2),
  contact: z.string().min(8).max(12),
});

function CreateDoctorForm() {
  const createDocument = useMutation(api.staff.createDoctor);
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
      type: values.type,
      assigned_cosmetic: values.assigned_cosmatic,
      assigned_treatment: values.assigned_treatment,
      working_days: values.working_days,
      image: storageId,
      contact: values.contact,
      occupation: values.occupation,
    });
  }

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      type: "FULL-TIME",
      assigned_cosmatic: [],
      assigned_treatment: [],

      working_days: [],
      contact: "",
      occupation: "",
    },
  });

  return (
    <div className="flex flex-col gap-2">
      <MultiStep
        steps={[
          {
            id: 1,
            label: "Staff Info",
            icon: (
              <div className="p-2 rounded-full border">
                <BsPersonAdd />
              </div>
            ),
          },
          {
            id: 2,
            label: "Assigned Services",
            icon: (
              <div className="p-2 rounded-full border">
                <Stethoscope />
              </div>
            ),
          },
          {
            id: 3,
            label: "Working Hours",
            icon: (
              <div className="p-2 rounded-full border">
                <CiTimer />
              </div>
            ),
          },
        ]}
      />
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
            name="type"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Employment Type</FormLabel>
                <FormControl>
                  <select {...field}>
                    <option value="FULL-TIME">Full-Time</option>
                    <option value="PART-TIME">Part-Time</option>
                  </select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="assigned_cosmatic"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Assigned Cosmatics</FormLabel>
                <FormControl>
                  <input
                    placeholder="Enter services (comma-separated)"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.split(","));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="assigned_treatment"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Assigned Treatment</FormLabel>
                <FormControl>
                  <input
                    placeholder="Enter treatment (comma-separated)"
                    {...field}
                    onChange={(e) => {
                      field.onChange(e.target.value.split(","));
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="working_days"
            render={({ field }) => (
              <FormItem className="flex flex-col gap-2">
                <FormLabel>Working Days</FormLabel>
                <FormControl>
                  <input
                    type="text"
                    placeholder="Enter Days (comma-separated, 0-23)"
                    // {...field}
                    onChange={(e) =>
                      field.onChange(e.target.value.split(",").map(Number))
                    }
                  />
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
            name="contact"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Contact</FormLabel>
                <FormControl>
                  <input placeholder="+912312431423" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="occupation"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>occupation</FormLabel>
                <FormControl>
                  <input placeholder=" Pedritrics" {...field} />
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

export default CreateDoctorForm;
