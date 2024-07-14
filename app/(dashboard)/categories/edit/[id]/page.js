import EditFormCategories from "@/components/categories/EditFormCategories";
import { getFetch } from "@/utils/fetch";
import React from "react";

async function page({ params }) {
  const userData = await getFetch(`/categories/${params.id}`);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> ویرایش محصول : {userData.name}</h4>
      </div>
      <EditFormCategories userData={userData}/>
    </div>
  );
}
export default page;