import { getFetch } from "@/utils/fetch";
import Link from "next/link";
import React from "react";
import Pagination from "./Paginate";

async function TableCa({ params }) {
  const data = await getFetch(`/categories?${params}`);
  return (
    <div>
      <div className="table-responsive">
        <table className="table align-middle">
          <thead>
            <tr>
              <th>نام</th>
              <th>توضیحات</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {data.categories.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>
                      <div className="d-flex">
                        <Link
                          href={`/categories/${item.id}`}
                          className="btn btn-sm btn-outline-dark me-2"
                        >
                          نمایش
                        </Link>
                        <Link
                          href={`/categories/edit/${item.id}`}
                          className="btn btn-sm btn-dark"
                        >
                          ویرایش
                        </Link>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
      <Pagination dataLink={data.meta.links}/>
    </div>
  );
}

export default TableCa;
