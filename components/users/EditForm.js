'use client';


import { updatedForm } from "@/actions/auth";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from "react-toastify";
import SubmitButton from "../SubmitButton";

function EditForm({ userData }) {
  const [stateUpdateUser, formActionUpdate] = useFormState(updatedForm,{})
  useEffect(()=> {
     toast(stateUpdateUser?.message, { type: `${stateUpdateUser?.status}` });
    
  },[stateUpdateUser])

  return (
    <div>
      <div className="form-edit-user">
          <form action={formActionUpdate} className="row gy-4">
            <div className="col-md-3">
              <label className="form-label">نام</label>
              <input
                name="name"
                type="text"
                className="form-control"
                defaultValue={userData.name}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">ایمیل</label>
              <input
                name="email"
                type="text"
                className="form-control"
                defaultValue={userData.email}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label">شماره تماس</label>
              <input
                name="cellphone"
                type="text"
                className="form-control"
                defaultValue={userData.cellphone}
              />
            </div>
            <div className="col-md-3">
              <label className="form-label"> رمز عبور</label>
              <input name="password" type="text" className="form-control" />
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
  );
}

export default EditForm;
