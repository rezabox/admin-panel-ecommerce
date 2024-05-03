'use client';
import { deleteForm } from '@/actions/auth';
import SubmitButton from '@/components/SubmitButton'
import { redirect } from 'next/navigation';

import React, { useEffect } from "react";
import { useFormState } from "react-dom";
import { toast } from 'react-toastify';

function DeleteForm({userId}) {
  const [stateDeleteUser, formActionDelete] = useFormState(deleteForm,{})
  useEffect(()=> {
    toast(stateDeleteUser?.message, { type: `${stateDeleteUser?.status}` });
  },[stateDeleteUser])
  return (
    <>
    <div className='form-delete-user'>
      <form action={formActionDelete}>
        <input type="hidden" value={userId}  name='userId'/>
        <SubmitButton title="حذف کاربر" style="btn btn-outline-dark mt-3" />    
      </form>
    </div>
    </>
  )
}

export default DeleteForm
