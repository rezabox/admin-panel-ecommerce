import { getFetch } from "@/utils/fetch";
import React from "react";

async function page({ params }) {
  const userDataPr = await getFetch(`/products/${params.id}`);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">نمایش محصول: {userDataPr.name}</h4>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <div className="col-md-3">
          <img
            className="rounded"
            src={userDataPr.primary_image}
            width={350}
            height={220}
            alt=""
          />
        </div>
      </div>
      <div className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input
            name="name"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.name}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">دسته بندی</label>
          <input
            name="category"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.category}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">وضعیت</label>
          <input
            name="status"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.status}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت</label>
          <input
            name="price"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.price}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تعداد</label>
          <input
            name="quantity"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.quantity}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت حراجی</label>
          <input
            name="sale_price"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.sale_price}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ شروع حراجی</label>
          <input
            name="date_on_sale_from"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.date_on_sale_from}
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ پایان حراجی</label>
          <input
            name="date_on_sale_to"
            disabled
            type="text"
            className="form-control"
            placeholder={userDataPr.date_on_sale_to}
          />
        </div>
        <div className="col-md-12">
          <label className="form-label">توضیحات</label>
          <textarea
            name="description"
            className="form-control"
            disabled
            rows="4"
            placeholder={userDataPr.description}
          ></textarea>
        </div>
        <div className="col-md-12">
          {userDataPr.images.map((item) => {
            return (
              <>
                <img src={item.image} rounded style={{marginLeft: '10px'}} width={200} height={150} alt="" />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default page;
