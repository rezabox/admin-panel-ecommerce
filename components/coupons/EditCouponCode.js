'use client';
import React, { useEffect, useState } from 'react'
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';
import { useRouter } from 'next/navigation';
import { useFormState } from "react-dom";
import { editCoupon } from '@/actions/auth';
import { toast } from 'react-toastify';
import SubmitButton from '../SubmitButton';


function EditCouponCode({ dataCoupon }) {
  const [state, formAction] = useFormState(editCoupon,{});
  const router = useRouter();
  
  const [dateCoupon,setDateCoupon] = useState({
      'persian': dataCoupon.expired_at,
      'gregorian': dataCoupon.expired_at_gregorian
  });
  useEffect(()=> {   
    toast(state?.message, { type: `${state?.status}` }) 
    if(state?.status == 'success'){
        router.push('/coupons');
    }
}, [state]);

  function changeDateExpire(value) {
    setDateCoupon({
      'persian': value,
      'gregorian': value.convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss")
    })
}
  return (
    <form action={formAction} className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">کد تخفیف</label>
          <input name="code" defaultValue={dataCoupon.code} type="text" className="form-control"  />
        </div>
        <div className="col-md-3">
          <label className="form-label">درصد تخفیف</label>
          <input name="percentage" defaultValue={dataCoupon.percentage} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ ایجاد</label>
          <input name="created_at" disabled defaultValue={dataCoupon.created_at} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <DatePicker
            inputClass="form-control"
            value={dateCoupon.persian}
            calendar={persian}
            locale={persian_fa}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={changeDateExpire}
          />
           <input type="hidden" name="expired_at" value={dateCoupon.gregorian}/>
        </div>
        <input type="hidden" defaultValue={dataCoupon.id} name="id" />
        <input type="hidden" defaultValue="PUT" name="_method" />
        <div>
          <SubmitButton title="ویرایش کد تخفیف" style="btn btn-outline-dark mt-[-5] mb-5" />
        </div>
      </form>
  )
}

export default EditCouponCode;
