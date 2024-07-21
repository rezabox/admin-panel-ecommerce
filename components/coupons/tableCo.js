import { getFetch } from "@/utils/fetch";
import React from "react";
import Pagination from "./Paginate";
import Link from "next/link";

async function TableCo({ params }) {
  const dataTableCo = await getFetch(`/coupons?${params}`);
  
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>ایدی</th>
            <th>کد تخفیف</th>
            <th>درصد تخفیف</th>
            <th>تاریخ انقضا کد</th>
            <th>تاریخ تولید کد</th>
          </tr>
        </thead>
        <tbody>
          {dataTableCo.coupons.map((data) => {
            return (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.code}</td>
                <td>{data.percentage}</td>
                <td>{data.expired_at}</td>
                <td>{data.created_at}</td>
                <td>
                  <div className="d-flex">
                    <Link
                      href={`/coupons/${data.id}`}
                      className="btn btn-sm btn-outline-dark me-2"
                    >
                      نمایش
                    </Link>
                    <Link
                      href={`/coupons/edit/${data.id}`}
                      className="btn btn-sm btn-dark"
                    >
                      ویرایش
                    </Link>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination dataLink={dataTableCo.meta.links} />
    </div>
  );
}

export default TableCo;
