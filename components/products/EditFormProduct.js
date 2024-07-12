"use client";
import { editProduct } from "@/actions/auth";
import SubmitButton from "@/components/SubmitButton";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useFormState } from "react-dom";
import DatePicker from "react-multi-date-picker";
import { toast } from "react-toastify";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import gregorian from 'react-date-object/calendars/gregorian';
import gregorian_en from 'react-date-object/locales/gregorian_en';

export default function EditFormProduct({ category, userData }) {
  const [stateEditProduct, formActionEditProduct] = useFormState(editProduct, {});
  const router = useRouter();
  const [image, setImage] = useState(`${userData.primary_image}`);
  const [dateSale, setDateSale] = useState([]); 
  const primaryImageRef = useRef();
  
  useEffect(()=> {
      if(userData.is_sale){
          setDateSale([
             {
                'persian': userData.date_on_sale_from,
                'gregorian': userData.date_on_sale_from_gregorian
             },
             {
                'persian': userData.date_on_sale_to,
                'gregorian': userData.date_on_sale_to_gregorian
             },
          ])
      }
      toast(stateEditProduct?.message, { type: `${stateEditProduct?.status}` }) 
      if(stateEditProduct?.status == 'success'){
          router.push('/products');
      }
  }, [stateEditProduct]);



  function setPrimaryImage(e) {
    const file = e.target.files[0];
    const render = new FileReader();
    render.readAsDataURL(file);
    render.onloadend = () => {
      setImage(render.result.toString());
    };
  }
  function changeDateOnSale(value) {
    if(value.length == 2){
      setDateSale([
        {
          'persian': value[0],
          'gregorian': value[0].convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss")
        },
        {
          'persian': value[1],
          'gregorian': value[1].convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss")
        },
      ])
    }
  }

  return (
    <>
      <form action={formActionEditProduct} className="row gy-5">
        <div className="d-flex justify-content-center">
          <div className="col-md-3">
            <label className="form-label">تصویر اصلی</label>
            <div className={image ? "position-relative" : "d-none"}>
              <img
                className="rounded"
                src={image}
                width={350}
                height={220}
                alt=""
              />
              <div
                className="position-absolute"
                style={{ top: "5px", right: "16px" }}
              >
                <i
                  onClick={() => {
                    primaryImageRef.current.value = "";
                    setImage(null);
                  }}
                  className="bi bi-x text-danger fs-2 cursor-pointer"
                ></i>
              </div>
            </div>
            <input
              onChange={setPrimaryImage}
              name="primary_image"
              type="file"
              ref={primaryImageRef}
              className={image === null ? "form-control" : "d-none"}
            />
          </div>
        </div>
        <div className="col-md-3">
          <label className="form-label">تصاویر</label>
          <input
            multiple
            name="images[]"
            type="file"
            className="form-control"
          />
        </div>
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" defaultValue={userData.name} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">دسته بندی</label>
          <select name="category_id" defaultValue={userData.category_id} className="form-select">
            <option value="" disabled>
              انتخاب و دسته بندی
            </option>
            {category.map((cate) => {
              return (
                <option key={cate.id} value={cate.id}>
                  {cate.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">وضعیت</label>
          <select name="status" defaultValue={userData.status_value} className="form-select">
            <option value="1">فعال</option>
            <option value="0">غیر فعال</option>
          </select>
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت</label>
          <input name="price" defaultValue={userData.price} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">تعداد</label>
          <input name="quantity" defaultValue={userData.quantity} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">قیمت حراجی</label>
          <input name="sale_price" defaultValue={userData.sale_price} type="text" className="form-control" />
        </div>
        <div className="col-md-3">
          <label className="form-label">تاریخ شروع و پایان حراجی</label>
          <DatePicker
            inputClass="form-control"
            range
            value={dateSale.map(time => time.persian)}
            calendar={persian}
            locale={persian_fa}
            format="YYYY-MM-DD HH:mm:ss"
            onChange={changeDateOnSale}
            plugins={[
               <DatePanel position="right"/>,
               <TimePicker position="bottom"/>
            ]}
          />
          <input type="hidden" name="date_on_sale_from" value={dateSale.length > 0  &&  dateSale[0].gregorian}/>
          <input type="hidden" name="date_on_sale_to" value={dateSale.length > 0  && dateSale[1].gregorian}/>
        </div>
        <div className="col-md-12">
             <label className="form-label">توضیحات</label>
             <textarea name="description" defaultValue={userData.description} className="form-control" rows='4'></textarea>
        </div>
        <input type="hidden" defaultValue={userData.id} name="id" />
        <input type="hidden" defaultValue="PUT" name="_method" />
        <div>
          <SubmitButton title="ویرایش محصول" style="btn btn-outline-dark mt-[-5] mb-5" />
        </div>
      </form>
    </>
  );
}
