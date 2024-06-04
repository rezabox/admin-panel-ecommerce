'use client'
import SubmitButton from '@/components/SubmitButton';
import  { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useFormState } from "react-dom";
import { deleteProduct } from '@/actions/auth';
import { useRouter } from 'next/navigation';


function DeleteProduct({productId}) {
  const [stateDeleteProduct, formActionDeleteProduct] = useFormState(deleteProduct ,{}) 
  useEffect(()=> {
    toast(stateDeleteProduct?.message, { type: `${stateDeleteProduct?.status}` });
  },[stateDeleteProduct])

  return (
    <div className='form-delete-user'>
      <form action={formActionDeleteProduct}>
        <input type="hidden" value={productId}  name='productId'/>
        <SubmitButton title="حذف محصول" style="btn btn-outline-dark mt-3" />    
      </form>
    </div>
  )
}

export default DeleteProduct;
