'use client';
import { useFormState } from "react-dom";
import React, { useEffect } from 'react'
import SubmitButton from '../SubmitButton';
import { toast } from "react-toastify";
import { editCategory } from "@/actions/auth";
import { useRouter } from "next/navigation";


function EditFormCategories({ userData }) {
  const router = useRouter()
  const [stateUpdateCat, formActionCat] = useFormState(editCategory,{})
  useEffect(()=> {
    toast(stateUpdateCat?.message, { type: `${stateUpdateCat?.status}` });
    if(stateUpdateCat?.status == 'success'){
      router.push('/categories');
  }
  },[stateUpdateCat])

  return (
    <div>
    <div className="form-edit-cat">
        <form action={formActionCat} className="row gy-4">
          <div className="col-md-3">
            <label className="form-label">نام محصول</label>
            <input
              name="name"
              type="text"
              className="form-control"
              defaultValue={userData.name}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">ایدی محصول</label>
            <input
              name="parent_id"
              type="text"
              className="form-control"
              defaultValue={userData.parent_id}
            />
          </div>
          <div className="col-md-3">
            <label className="form-label">توضیحات محصول</label>
            <input
              name="description"
              type="text"
              className="form-control"
              defaultValue={userData.description}
            />
          </div>
            <input type="hidden" defaultValue={userData.id} name="id" />
          <div>
            <SubmitButton
              title="ویرایش کاربر"
              style="btn btn-outline-dark mt-3"
            />
          </div>
        </form>
    </div>
  </div>
  )
}

export default EditFormCategories;
