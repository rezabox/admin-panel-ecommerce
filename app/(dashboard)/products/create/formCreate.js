import SubmitButton from "@/components/SubmitButton";
import React from "react";

async function FormCreate({category}) {
 
  return (
    <>
      <form className="row gy-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-3">
            <label className="form-label">تصویر اصلی</label>
            <input type="file" name="file" className="form-control" />
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">تصاویر</label>
          <input name="file" type="file" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">دسته بندی</label>
          <input name="cellphone" type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">وضعیت</label>
          <input name="password" type="text" className="form-control" />
        </div>
        <div>
          <SubmitButton title="ایجاد محصول" style="btn btn-outline-dark mt-3" />
        </div>
      </form>
    </>
  );
}

export default FormCreate;
