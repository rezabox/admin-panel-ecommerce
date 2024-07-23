import { getFetch } from '@/utils/fetch';
import React from 'react'
import DeleteCoupon from './DeleteCoupon';

async function page({ params }) {
  const userData = await getFetch(`/coupons/${params.id}`);
  return (
    <div>
       <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">  تخفیف :{userData.id}</h4>
      </div>
      <div  className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">کد تخفیف</label>
          <input name="code" disabled type="text" className="form-control" placeholder={userData.code} />
        </div>
        <div className="col-md-3">
          <label className="form-label">درصد تخفیف</label>
          <input name="percentage" disabled type="text" className="form-control" placeholder={userData.percentage}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ ایجاد</label>
          <input name="created_at" disabled type="text" className="form-control" placeholder={userData.created_at}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ انقضا</label>
          <input name="expired_a" disabled type="text" className="form-control" placeholder={userData.expired_at}/>
        </div>
        <div>
          <DeleteCoupon id={userData.id}/>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page;
