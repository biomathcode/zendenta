"use client";
import { useForm, SubmitHandler } from "react-hook-form";
import type Schema from "../../convex/schema";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import toast from "react-hot-toast";

type NewClinic = {
  name: string;
  address: string;
};

function CreateClinicForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewClinic>();

  const createClinic = useMutation(api.clinic.createClinic);

  const onSubmit: SubmitHandler<NewClinic> = async (data) => {
    try {
      await createClinic(data);
      toast.success("Clinic added");
    } catch (e) {
      console.log("something went wrong", e);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-2">
      <label className="flex justify-between gap-2">
        name:
        <input className=" border bg-neutral-50" {...register("name")} />
      </label>
      <label className="flex justify-between gap-2">
        address:
        <input className=" border bg-neutral-50" {...register("address")} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CreateClinicForm;
