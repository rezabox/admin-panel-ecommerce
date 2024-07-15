import { getFetch } from '@/utils/fetch';
import React from 'react'
import Pagination from './Paginate';

async function TableTr({ params }) {
  const dataTable = await getFetch(`/transactions?${params}`);
  return (
    <div className="table-responsive">
    <table className="table align-middle">
      <thead>
        <tr>
          <th>شناسه سفارش</th>
          <th>مبلغ کل</th>
          <th>وضعیت</th>
          <th>شناسه تراکنش</th>
          <th>تاریخ سفارش</th>
        </tr>
      </thead>
      <tbody>
        {dataTable.transactions.map((data)=>{
           return(
              <>
                 <tr key={data.id}>
                   <td>{data.order_id}</td>
                   <td>{data.amount}</td>
                   <td>{data.status}</td>
                   <td>{data.trans_id}</td>
                   <td>{data.created_at}</td>
                 </tr>
              </>
           )
        })}
      </tbody>
      </table>
         <Pagination dataLink={dataTable.meta.links}/>
      </div>
  )
}

export default TableTr;
