import { getFetch } from "@/utils/fetch";
import React, { Suspense } from "react";
import Loading from "../Loading";
import TableTr from "@/components/transactions/tableTr";

async function transactions({ searchParams }) {
  const params = new URLSearchParams(searchParams);
  return (
    <main className="col-md-9 ms-sm-auto col-lg-12 px-md-4">
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">تراکنش ها</h4>
      </div>
      <Suspense key={params.toString()} fallback={<Loading />}>
         <TableTr params={params.toString()}/>
      </Suspense>
    </main>
  );
}

export default transactions;
