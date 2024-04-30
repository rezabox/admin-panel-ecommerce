import TableRes from "@/components/users/tableRes";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "../Loading";


async function Userpage({ searchParams }) { 
  const params = new URLSearchParams(searchParams);
  return (
    <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">کاربران</h4>
        <Link
          href="/users/create"
          type="button"
          className="btn btn-sm btn-outline-dark"
        >
          ایجاد کاربر
        </Link>
      </div>
      <Suspense key={params.toString()} fallback={<Loading/>}>
        <TableRes  params={params.toString()}/>
      </Suspense>
    </main>
  );
}

export default Userpage;
