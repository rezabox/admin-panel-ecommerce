'use client'
import SubmitButton from '@/components/SubmitButton';
import React, { useEffect, useState } from 'react'
import DatePicker from 'react-multi-date-picker';
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import { useFormState } from "react-dom";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { createCoupon } from '@/actions/auth';

function CreateCoupon() {
  const [state, formAction] = useFormState(createCoupon,{})
  const router = useRouter();
  const [dateExpire, setDateExpire] = useState('');

  useEffect(() => {
        toast(state?.message, { type: `${state?.status}` });
        if (state?.status === 'success'){
            router.push("/coupons")
        }
  }, [state])

  function changeDateExpire(value) {
      setDateExpire(value.convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss"))
  }
  return (
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
       <h4 className="fw-bold">ایجاد کد تخفیف</h4>
     </div>
     <form action={formAction} className="row gy-4">
       <div className="col-md-3">
         <label className="form-label">کد تخفیف</label>
         <input name="code" type="text" className="form-control" />
       </div>
       <div className="col-md-3">
         <label className="form-label">درصد تخفیف</label>
         <input name="percentage" type="text" className="form-control" />
       </div>
       <div className="col-md-3">
         <label className="form-label">تاریخ انقضا</label>
         <DatePicker
            inputClass="form-control"
            calendar={persian}
            locale={persian_fa}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={changeDateExpire}
          />
          <input name="expired_at" value={dateExpire} type="hidden" />
       </div>
       <div>
         <SubmitButton title="ایجاد کد تخفیف محصول" style="btn btn-outline-dark mt-3" />
       </div>
     </form>
   </>
  )
}

export default CreateCoupon;
