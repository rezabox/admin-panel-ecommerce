"use client"
import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { deleteCategory } from "@/actions/auth";

function DeleteCategory({ id }) {
  const [stateDeleteCategory, formActionDeleteCategory] = useFormState(deleteCategory,{});
  useEffect(()=> {
    toast(stateDeleteCategory?.message, { type: `${stateDeleteCategory?.status}` });
  },[stateDeleteCategory])

  return (
    <div className="form-delete-user">
      <form action={formActionDeleteCategory}>
        <input type="hidden" value={id} name="id" />
        <SubmitButton title="حذف دسته بندی" style="btn btn-outline-dark mt-3" />
      </form>
    </div>
  );
}

export default DeleteCategory;
