import EditFormProduct from "@/components/products/EditFormProduct";
import { getFetch } from "@/utils/fetch";
import React from "react";

async function page({ params }) {
  const userData = await getFetch(`/products/${params.id}`);
  const category = await getFetch('/categories-list');
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> ویرایش محصول : {userData.name}</h4>
      </div>
      <EditFormProduct userData={userData} category={category} />
    </div>
  );
}
export default page;
