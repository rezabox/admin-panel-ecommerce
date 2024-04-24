
import PaginateTable from "@/components/users/paginateTable";
import TableRes from "@/components/users/tableRes";
import Link from "next/link";
import React from "react";

function Userpage() {
  return (
    <main class="col-md-9 ms-sm-auto col-lg-12 px-md-4">
      <div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 class="fw-bold">کاربران</h4>
        <Link href='/users/create' type="button" class="btn btn-sm btn-outline-dark">
               ایجاد کاربر
        </Link>
      </div>
      <TableRes/>
      <PaginateTable/>
    </main>
  );
}

export default Userpage;
