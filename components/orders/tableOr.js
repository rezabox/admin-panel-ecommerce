import { getFetch } from '@/utils/fetch';
import React from 'react'
import Pagination from './Paginate';
import Link from 'next/link';
import Image from 'next/image';
import { numberFormat } from '@/utils/help';

async function TableOr({ params }) {
  const dataTable = await getFetch(`/orders?${params}`);
  return (
    <div className="table-responsive">
      <table className="table align-middle">
        <thead>
          <tr>
            <th>ایدی</th>
            <th>آدرس</th>
            <th>وضعیت پرداخت</th>
            <th>عملیات تراکنش</th>
            <th>مبلغ</th>
            <th>تاریخ سفارش</th>
          </tr>
        </thead>
        <tbody>
          {dataTable.orders.map((data) => {
            return(
            <tr key={data.id}> 
              <td>{data.id}</td>
              <td>{data.address_title}</td>
              <td>{data.status}</td>
              <td>{data.payment_status}</td>
              <td>{data.paying_amount}</td>
              <td>{data.created_at}</td>
              <td>
                    <button
                      type="button"
                      className="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target={`#modal-${data.id}`}
                    >
                      محصولات
                    </button>
                    <div className="modal fade" id={`modal-${data.id}`}>
                      <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h6 className="modal-title">
                              محصولات سفارش شماره {data.id}
                            </h6>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            <table className="table align-middle">
                              <thead>
                                <tr>
                                  <th>محصول</th>
                                  <th>نام</th>
                                  <th>قیمت</th>
                                  <th>تعداد</th>
                                  <th>قیمت کل</th>
                                </tr>
                              </thead>
                              <tbody>
                                {data.order_items.map((item) => (
                                  <tr key={item.id}>
                                    <th>
                                      <Image
                                        src={item.product_primary_image}
                                        width="80"
                                        height='50'
                                        alt=""
                                      />
                                    </th>
                                    <td className="fw-bold">{item.product_name}</td>
                                    <td>{numberFormat(item.price)} تومان</td>
                                    <td>{item.quantity}</td>
                                    <td>{numberFormat(item.price * item.quantity)} تومان</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
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

export default TableOr;
