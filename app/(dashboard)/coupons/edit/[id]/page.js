import EditCouponCode from '@/components/coupons/EditCouponCode'
import { getFetch } from '@/utils/fetch'
import React from 'react'

async function page({ params }) {
  const coupons = await getFetch(`/coupons/${params.id}`)
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> ویرایش کد تخفیف : {coupons.code}</h4>
      </div>
      <EditCouponCode dataCoupon={coupons}/>
    </div>
  )
}

export default page
