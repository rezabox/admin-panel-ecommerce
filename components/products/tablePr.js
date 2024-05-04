import { getFetch } from "@/utils/fetch";
import Image from "next/image";
import React from "react";
import Pagination from "./Pagiate";

async function TablePr({params}) {
  const data = await getFetch(`/products?${params}`);

  return (
    <div class="table-responsive">
      <table class="table align-middle">
        <thead>
          <tr>
            <th>تصویر</th>
            <th>نام</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((item) => {
            return (
              <>
                <tr>
                  <td>
                    <Image
                      src={item.primary_image}
                      width="90"
                      height="70"
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td>
                    <div class="d-flex">
                      <button class="btn btn-sm btn-outline-dark me-2">
                        نمایش
                      </button>
                      <button class="btn btn-sm btn-dark">حذف</button>
                    </div>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
      <Pagination dataLink={data.meta.links}/>
    </div>
  );
}

export default TablePr;
