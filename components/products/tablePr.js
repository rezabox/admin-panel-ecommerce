import { getFetch } from "@/utils/fetch";
import Image from "next/image";
import React from "react";
import Pagination from "./Pagiate";
import { getBlurDataURL, numberFormat } from "@/utils/help";
import Link from "next/link";


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
                      placeholder="blur"
                      blurDataURL={getBlurDataURL()}
                      width="90"
                      height="70"
                      alt=""
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{numberFormat(item.price)}</td>
                  <td>{item.quantity}</td>
                  <td>{item.status}</td>
                  <td>
                    <div class="d-flex">
                      <Link href={`/products/${item.id}`} class="btn btn-sm btn-outline-dark me-2">
                        نمایش
                      </Link>
                      <Link href={`/products/edit/${item.id}`} class="btn btn-sm btn-dark">ویرایش</Link>
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
