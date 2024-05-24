// 'use client';
// import { useRouter } from "next/navigation";
// import React, { useEffect, useRef, useState } from "react";
// import { useFormState } from "react-dom";
// import { toast } from "react-toastify";
// import SubmitButton from "../SubmitButton";
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import TimePicker from "react-multi-date-picker/plugins/time_picker";
// import DatePanel from "react-multi-date-picker/plugins/date_panel";
// import gregorian from 'react-date-object/calendars/gregorian';
// import gregorian_en from 'react-date-object/locales/gregorian_en';


// function EditFormProduct({ userData }) {
//   const [stateUpdateProduct, formActionUpateProduct] = useFormState({});
//   const [image, setImage] = useState(null);
//   const [dateSale, setDateSale] = useState([]); 
//   const primaryImageRef = useRef();

//   useEffect(()=>{
//     toast(stateUpdateProduct?.message, { type: `${stateUpdateProduct?.status}` } )
//   },[stateUpdateProduct])

//   function setPrimaryImage(e) {
//     const file = e.target.files[0];
//     const render = new FileReader();
//     render.readAsDataURL(file);
//     render.onloadend = () => {
//       setImage(render.result.toString());
//     };
//   }
//   function changeDateOnSale(value) {
//     if(value.length == 2){
//       setDateSale([
//         value[0].convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss"),
//         value[1].convert(gregorian, gregorian_en).format("YYYY-MM-DD HH:mm:ss")
//       ])
//     }
//   }

//   return (
//     <div className="form-product-updated">
//         <form action={formActionUpateProduct} className="row gy-5">
//         <div className="d-flex justify-content-center">
//           <div className="col-md-3">
//             <label className="form-label">تصویر اصلی</label>
//             <div className={image ? "position-relative" : "d-none"}>
//               <img
//                 className="rounded"
//                 src={image}
//                 width={350}
//                 height={220}
//                 alt=""
//               />
//               <div
//                 className="position-absolute"
//                 style={{ top: "5px", right: "16px" }}
//               >
//                 <i
//                   onClick={() => {
//                     primaryImageRef.current.value = "";
//                     setImage(null);
//                   }}
//                   className="bi bi-x text-danger fs-2 cursor-pointer"
//                 ></i>
//               </div>
//             </div>
//             <input
//               onChange={setPrimaryImage}
//               name="primary_image"
//               type="file"
//               ref={primaryImageRef}
//               className={image === null ? "form-control" : "d-none"}
//             />
//           </div>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">تصاویر</label>
//           <input
//             multiple
//             name="images[]"
//             type="file"
//             className="form-control"
//           />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">نام</label>
//           <input name="name" type="text" defaultValue={userData.name} className="form-control" />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">دسته بندی</label>
//           <select name="category_id" defaultValue={userData.category_id} className="form-select">
//             <option value='' disabled>
//               انتخاب و دسته بندی
//             </option>
//             {/* {category.map((cate) => {
//               return (
//                 <option key={cate.id} value={cate.id}>
//                   {cate.name}
//                 </option>
//               );
//             })} */}
//           </select>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">وضعیت</label>
//           <select name="status" defaultValue={userData.status} className="form-select">
//             <option value="1">فعال</option>
//             <option value="0">غیر فعال</option>
//           </select>
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">قیمت</label>
//           <input name="price" type="text" defaultValue={userData.price} className="form-control" />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">تعداد</label>
//           <input name="quantity" type="text" defaultValue={userData.quantity} className="form-control" />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">قیمت حراجی</label>
//           <input name="sale_price" type="text" defaultValue={userData.sale_price} className="form-control" />
//         </div>
//         <div className="col-md-3">
//           <label className="form-label">تاریخ شروع و پایان حراجی</label>
//           <DatePicker
//             inputClass="form-control"
//             range
//             calendar={persian}
//             locale={persian_fa}
//             format="YYYY-MM-DD HH:mm:ss"
//             onChange={changeDateOnSale}
//             plugins={[
//                <DatePanel position="right"/>,
//                <TimePicker position="bottom"/>
//             ]}
//           />
//           <input type="hidden" name="date_on_sale_from" value={dateSale[0]}/>
//           <input type="hidden" name="date_on_sale_to" value={dateSale[1]}/>
//         </div>
//         <div className="col-md-12">
//              <label className="form-label">توضیحات</label>
//              <textarea name="description" className="form-control" defaultValue={userData.description} rows='4'></textarea>
//         </div>
//         <div>
//           <SubmitButton title="ایجاد محصول" style="btn btn-outline-dark mt-3" />
//         </div>
//       </form>
//     </div>
//   )
// }

// export default EditFormProduct;
