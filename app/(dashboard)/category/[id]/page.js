import { getFetch } from "@/utils/fetch";
import DeleteCategory from "./DeleteCategory";



async function page({params}) {
  const userData = await getFetch(`/categories/${params.id}`);
  return (
    <div>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h4 className="fw-bold"> دسته بندی  :{userData.name}</h4>
      </div>
      <div  className="row gy-4">
        <div className="col-md-3">
          <label className="form-label">نام</label>
          <input name="name" disabled type="text" className="form-control" placeholder={userData.name} />
        </div>
        <div className="col-md-3">
          <label className="form-label">توضیحات</label>
          <input name="email" disabled type="text" className="form-control" placeholder={userData.description}/>
        </div>
        <div className="col-md-3">
          <label className="form-label">ایدی</label>
          <input name="cellphone" disabled type="text" className="form-control" placeholder={userData.id}/>
        </div>
        <div>
          <DeleteCategory id={userData.id}/>
        </div>
      </div>
    </div>
  )
}

export default page;