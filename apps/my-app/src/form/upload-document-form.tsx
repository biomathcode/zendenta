"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";

const documentSchema = z.object({
  title: z.string().min(2).max(500),
});

export default function UploadDocumentForm() {
  const form = useForm<z.infer<typeof documentSchema>>({
    resolver: zodResolver(documentSchema),
    defaultValues: {
      title: "",
    },
  });

  function onSubmit(values: z.infer<typeof documentSchema>) {
    console.log(values);
  }
  // const createDocument = useMutation(api.documents.createDocument);
  return <form></form>;
}
