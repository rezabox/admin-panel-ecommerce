
import FormCreate from './formCreate'
import { getFetch } from "@/utils/fetch";

export  default async function page() {
  const category = await getFetch('/categories-list');
  return (
    <>
    <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold">ایجاد محصول</h4>
      </div>
      <FormCreate category={category}/>
    </>
  )
}
