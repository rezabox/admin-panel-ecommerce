'use client'
import SubmitButton from "@/components/SubmitButton";
import { useFormState } from "react-dom";
import React, { useEffect } from "react";
import { login } from "@/actions/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

function LoginPage() {
  const [stateLogin, formActionLogin] = useFormState(login,{});
  const router = useRouter();
  useEffect(()=>{
        toast(stateLogin?.message, { type: `${stateLogin?.status}` })
        if(stateLogin?.status === 'success'){
            router.push('/')
        }
  },[stateLogin])

  return (
    <div className="row mt-5 justify-content-center align-items-center">
      <div className="col-md-3">
        <div className="card">
          <div className="card-body py-5">
            <h4 className="mb-5 text-center">ورود به پنل ادمین</h4>
            <form action={formActionLogin}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  ایمیل
                </label>
                <input name="email" className="form-control" id="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  رمز عبور
                </label>
                <input name="password" className="form-control" />
              </div>
               <SubmitButton title='ورود' style='btn btn-dark'/>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
