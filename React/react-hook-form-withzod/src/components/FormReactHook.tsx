/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FormData } from "../types";
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form";

const FormReactHook: React.FC = () => {
  const { 
    register, 
    formState: { errors, isSubmitting }, 
    control,
    getValues,
    handleSubmit,
  } = useForm<FormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      age: 18,
      gender: "",
      address: { city: "", state: "" },
      hobbies: [{ name: "" }],
      startDate: new Date(),
      subscribe: false,
      referral: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "hobbies",
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg space-y-6">
      <div className="flex flex-col">
        <label className="font-semibold">First Name</label>
        <input {...register("firstName", { required: "First Name is required" })} className="border p-2 rounded mt-1" />
        {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName.message}</p>}
      </div>
      
      <div className="flex flex-col">
        <label className="font-semibold">Last Name</label>
        <input {...register("lastName", { required: "Last Name is required" })} className="border p-2 rounded mt-1" />
        {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Email</label>
        <input {...register("email", { required: "Email is required", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Invalid email address" } })} className="border p-2 rounded mt-1" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Age</label>
        <input {...register("age", { required: "Age is required", min: { value: 18, message: "You must be at least 18 years old" } })} className="border p-2 rounded mt-1" />
        {errors.age && <p className="text-red-500  text-sm">{errors.age.message}</p>}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Gender</label>
        <select {...register("gender", { required: "Gender is required" })} className="border p-2 rounded mt-1">
          <option value="">Select...</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
        {errors.gender && <p className="text-red-500 text-sm">{errors.gender.message}</p>}
      </div>

      <div  className="flex flex-col">
        <label  className="font-semibold">Address</label>
        <input {...register('address.city', {required: 'City is required'})}
        placeholder="City"
        />
        {errors.address?.city && (
          <p className="text-red-500 text-sm">{errors.address.city.message}</p>
        )}

        <input
          {...register('address.state', {required: 'State is required'})}
          placeholder="State"
        />
        {errors.address?.state && (
          <p className="text-red-500 text-sm">{errors.address.state.message}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Start Date</label>
        <Controller
          control={control}
          name="startDate"
          render={({ field }) => (
            <DatePicker
              className="border p-2 rounded mt-1 w-full"
              placeholderText="Select date"
              onChange={(date: Date | null) => field.onChange(date)}
              selected={field.value}
            />
          )}
        />
      </div>

      <div className="flex flex-col">
        <label className="font-semibold">Hobbies</label>
        {fields.map((hobby, index) => (
          <div key={hobby.id} className="flex space-x-2 items-center mt-1">
            <input {...register(`hobbies.${index}.name`, { required: "Hobby Name is required" })} placeholder="Hobby Name" className="border p-2 rounded flex-grow" />
            {fields.length > 1 && (
              <button type="button" onClick={() => remove(index)} className="bg-red-500 text-white px-3 py-1 rounded">Remove</button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ name: "" })} className="bg-blue-500 text-white px-3 py-1 rounded mt-2">Add Hobby</button>
      </div>

      <div className="flex items-center space-x-2">
        <input type="checkbox" {...register("subscribe")} className="w-4 h-4" />
        <label className="font-semibold">Subscribe to Newsletter</label>
      </div>

      {getValues("subscribe") && (
        <div className="flex flex-col">
          <label className="font-semibold">Referral Source</label>
          <input {...register("referral", { required: "Referral is required" })} placeholder="How did you hear about us?" className="border p-2 rounded mt-1" />
          {errors.referral && <p className="text-red-500 text-sm">{errors.referral.message}</p>}
        </div>
      )}

      <button type="submit" disabled={isSubmitting} className="w-full bg-green-500 text-white px-4 py-2 rounded mt-4 hover:bg-green-600 disabled:bg-gray-400">
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};

export default FormReactHook;
