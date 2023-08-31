import React from "react";
import { useForm } from "react-hook-form";
import Input from "./Input";

interface AddQuizzFormProps {
  onSubmit: (data: any) => void; // Adjust the type of the data as needed
}

export default function AddQuizzForm({ onSubmit }: AddQuizzFormProps) {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input
        className="rounded p-4 text-xl w-full"
        placeholder="Title"
        {...register("title")}
      />

      <input
        className="rounded p-4 text-xl w-full"
        placeholder="Slug"
        {...register("slug")}
      />

      <button
        className="bg-blue-500 rounded-md p-4 text-blue-100"
        type="submit"
        disabled={formState.isSubmitting} // Disable the button while submitting
      >
        {formState.isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
}
