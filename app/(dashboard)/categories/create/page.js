'use client';
import { useFormState } from "react-dom";
import SubmitButton from "@/components/SubmitButton";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createCategory } from "@/actions/auth";
import { toast } from "react-toastify";

function page() {
  const [stateCreateCategory, formActionCreateCategory] = useFormState(createCategory,{});
  const router = useRouter();
  useEffect(()=> {
    toast(stateCreateCategory?.message, { type: `${stateCreateCategory?.status}` })
    if (stateCreateCategory?.status === 'success') {
      router.push('/categories');
    } 
  },[stateCreateCategory])
  return (
    <>
     <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد محصول دسته بندی</h4>
      </div>
      <form action={formActionCreateCategory} className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام محصول</label>
          <input name="name" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">ایدی محصول</label>
          <input name="parent_id" type="text" className="form-control" />
        </div>
        <div>
          <SubmitButton title="ایجاد محصول در دسته بندی" style="btn btn-outline-dark mt-3" />
        </div>
      </form>
    </>
  );
}

export default page;
