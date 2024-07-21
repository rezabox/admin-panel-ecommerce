"use client"
import React from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import { deleteCoupon } from "@/actions/auth";

async function DeleteCoupon({ id }) {
  const [stateDeleteCoupon, formActionDeleteCoupon] = useFormState(deleteCoupon,{});
  useEffect(()=> {
    toast(stateDeleteCoupon?.message, { type: `${stateDeleteCoupon?.status}` });
  },[stateDeleteCoupon])
  return (
    <div className="form-delete-user">
      <form action={formActionDeleteCoupon}>
        <input type="hidden" value={id} name="id" />
        <SubmitButton title="حذف کد تخفیف" style="btn btn-outline-dark mt-3" />
      </form>
    </div>
  )
}

export default DeleteCoupon;
