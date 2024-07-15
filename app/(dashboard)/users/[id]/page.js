import SubmitButton from '@/components/SubmitButton';
import { getFetch } from '@/utils/fetch';
import React from 'react'
import DeleteForm from './DeleteForm';


async function page({params}) {
  const userData = await getFetch(`/users/${params.id}`);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> کاربر :{userData.name}</h4>
      </div>
      <div  className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" disabled type="text" className="form-control" placeholder={userData.name} />
        </div>
        <div className="col-md-3">
          <label className="form-label">ایمیل</label>
          <input name="email" disabled type="text" className="form-control" placeholder={userData.email}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">شماره تماس</label>
          <input name="cellphone" disabled type="text" className="form-control" placeholder={userData.cellphone}/>
        </div>
        <div>
          <DeleteForm  userId={userData.id}/>
        </div>
      </div>
    </div>
  )
}

export default page;
