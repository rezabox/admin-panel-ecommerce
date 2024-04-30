import { getFetch } from "@/utils/fetch";
import Link from "next/link";
import React from "react";
import Pagination from "./Pagiate";

async function TableRes({ params }) {
  const dataTable = await getFetch(`/users?${params}`);
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>نام</th>
            <th>ایمیل</th>
            <th>شماره تلفن</th>
            <th>تاریخ عضویت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.users.map((data) => {
            return(
            <tr key={data.id}> 
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.cellphone}</td>
              <td>{data.created_at}</td>
              <td>
                <div className="d-flex">
                  <Link href={`/users/${data.id}`} className="btn btn-sm btn-outline-dark me-2">
                    نمایش
                  </Link>
                  <Link href={`/users/edit/${data.id}`} className="btn btn-sm btn-dark">ویرایش</Link>
                </div>
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
      <Pagination dataLink={dataTable.meta.links} />
    </div>
  );
}

export default TableRes;
