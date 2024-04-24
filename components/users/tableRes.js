import React from 'react'

function TableRes() {
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
        <tr>
          <th>{/* <img src="./images/b1.jpg" width="80" alt=""> */}</th>
          <td>همبر ذغالی</td>
          <td>89,000</td>
          <td>15</td>
          <td>فعال</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-sm btn-outline-dark me-2">
                نمایش
              </button>
              <button class="btn btn-sm btn-dark">حذف</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>{/* <img src="./images/p1.jpg" width="80" alt=""> */}</th>
          <td>پیتزا متخصص</td>
          <td>150,000</td>
          <td>5</td>
          <td>فعال</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-sm btn-outline-dark me-2">
                نمایش
              </button>
              <button class="btn btn-sm btn-dark">حذف</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>{/* <img src="./images/b2.jpg" width="80" alt=""> */}</th>
          <td>همبر ذعالی بوقلمون</td>
          <td>103,000</td>
          <td>10</td>
          <td>فعال</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-sm btn-outline-dark me-2">
                نمایش
              </button>
              <button class="btn btn-sm btn-dark">حذف</button>
            </div>
          </td>
        </tr>
        <tr>
          <th>{/* <img src="./imzages/p2.jpg" width="80" alt=""> */}</th>
          <td>پیتزا رست بیف</td>
          <td>193,000</td>
          <td>8</td>
          <td>فعال</td>
          <td>
            <div class="d-flex">
              <button class="btn btn-sm btn-outline-dark me-2">
                نمایش
              </button>
              <button class="btn btn-sm btn-dark">حذف</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default TableRes;
