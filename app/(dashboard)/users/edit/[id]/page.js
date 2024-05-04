import { getFetch } from "@/utils/fetch";
import React from "react";
import EditForm from "@/components/users/EditForm";

async function page({ params }) {
  const userData = await getFetch(`/users/${params.id}`);
  
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> ویرایش کاربر :{userData.name}</h4>
      </div>
       <EditForm userData={userData}/>
    </div>
  );
}

export default page;
