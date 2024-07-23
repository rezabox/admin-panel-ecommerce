"use server";

import {
  deleteFetch,
  getFetch,
  postFetch,
  postFetchAuth,
  putFetch,
} from "@/utils/fetch";
import { handleError } from "@/utils/help";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function login(stateLogin, formActionLogin) {
  const email = formActionLogin.get("email");
  const password = formActionLogin.get("password");
  if (email === "" || password === "") {
    return {
      status: "error",
      message: "ایمیل و پسورد را وارد کنید",
    };
  }
  const data = await postFetchAuth("/auth/login", { email, password });
  if (data.status === "success") {
    cookies().set({
      name: "token",
      value: data.data.token,
      httpOnly: true,
      path: "/",
      maxAge: 60 * 60 * 24, // 1 day
    });
    return {
      status: data.status,
      message: "ورود با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function me(stateLogin, formActionLogin) {
  const token = cookies().get("token");
  console.log(token);
  if (!token) {
    return {
      error: "Not Authorized",
    };
  }
  const data = await postFetch(
    "/auth/me",
    {},
    { Authorization: `Bearer ${token.value}` }
  );
  if (data.status === "success") {
    return {
      user: data.data,
    };
  } else {
    return {
      error: "User Forbidden",
    };
  }
}
async function logout(stateLogout, formActionLogout) {
  const token = cookies().get("token");
  const data = await postFetch(
    "/auth/logout",
    {},
    { Authorization: `Bearer ${token.value}` }
  );
  if (data.status === "success") {
    cookies().delete("token");
    return {
      status: data.status,
      message: "خروج با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function createUser(stateUser, formCreateUser) {
  const name = formCreateUser.get("name");
  const email = formCreateUser.get("email");
  const cellphone = formCreateUser.get("cellphone");
  const password = formCreateUser.get("password");
  if (name === "" || email === "" || cellphone === "" || password === "") {
    return {
      status: "error",
      message: "تمامی فیلد های زیر را پر کنید.",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل درست نیست.",
    };
  }
  const data = await postFetch("/users", { name, email, cellphone, password });

  if (data.status === "success") {
    revalidatePath("/users");
    return {
      status: data.status,
      message: "کاربر جدید اضافه شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function deleteForm(stateDeleteUser, formActionDelete) {
  const id = formActionDelete.get("userId");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه کاربر الزامی است.",
    };
  }
  const data = await deleteFetch(`/users/${id}`);
  if (data.status === "success") {
    revalidatePath("/users");
    redirect("/users");
    return {
      status: data.status,
      message: "حذف کاربر با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function updatedForm(stateUpdateUser, formActionUpdate) {
  const name = formActionUpdate.get("name");
  const email = formActionUpdate.get("email");
  const cellphone = formActionUpdate.get("cellphone");
  const password = formActionUpdate.get("password");
  const id = formActionUpdate.get("id");

  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه کاربر الزامی است.",
    };
  }
  if (name === "" || name === null) {
    return {
      status: "error",
      message: "فیلد نام را پر کنید",
    };
  }
  if (email === "" || email === null) {
    return {
      status: "error",
      message: "فیلد ایمیل را پر کنید",
    };
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل درست نیست.",
    };
  }

  const data = await putFetch(`/users/${id}`, {
    name,
    email,
    cellphone,
    password,
  });
  if (data.status === "success") {
    revalidatePath("/users");
    return {
      status: data.status,
      message: "ویرایش کاربر با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function createProduct(stateProduct, formActionProduct) {
  const name = formActionProduct.get("name");
  const category_id = formActionProduct.get("category_id");
  const primary_image = formActionProduct.get("primary_image");
  const price = formActionProduct.get("price");
  const quantity = formActionProduct.get("quantity");

  if (primary_image.size == 0) {
    return {
      status: "error",
      message: "تصویر اصلی الزامی است.",
    };
  }

  if (name === "") {
    return {
      status: "error",
      message: "نام محصول الزامی است",
    };
  }
  if (category_id === null) {
    return {
      status: "error",
      message: "دسته بندی الزامی است.",
    };
  }
  if (price === "") {
    return {
      status: "error",
      message: "مبلغ مورد نظر را وارد کنید.",
    };
  }
  if (quantity === "") {
    return {
      status: "error",
      message: "تعداد محصول را وارد کنید .",
    };
  }

  const token = cookies().get("token");
  const res = await fetch("http://localhost:8000/api/admin-panel/products", {
    cache: "no-store",
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token.value}`,
    },
    body: formActionProduct,
  });
  const data = await res.json();
  if (data.status == "success") {
    revalidatePath("/products");
    return {
      status: "success",
      message: "محصول مورد نظر با موفقیت اضافه شد.",
    };
  } else {
    return {
      status: "error",
      message: handleError(data.message),
    };
  }
}
async function deleteProduct(stateDeleteProduct, formActionDeleteProduct) {
  const id = formActionDeleteProduct.get("productId");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه محصول الزامی است.",
    };
  }
  const data = await deleteFetch(`/products/${id}`);
  if (data.status === "success") {
    revalidatePath("/products");
    redirect("/products");
    return {
      status: data.status,
      message: "حذف محصول با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function editProduct(stateEditProduct, formActionEditProduct) {
  const id = formActionEditProduct.get("id");
  const primary_image = formActionEditProduct.get("primary_image");
  const images = formActionEditProduct.get("images[]");
  const name = formActionEditProduct.get("name");
  const category_id = formActionEditProduct.get("category_id");
  const price = formActionEditProduct.get("price");
  const quantity = formActionEditProduct.get("quantity");

  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه محصول الزامی است.",
    };
  }
  if (primary_image.size == 0) {
    formActionEditProduct.delete("primary_image");
  }
  if (images.size == 0) {
    formActionEditProduct.delete("images[]");
  }

  if (name === "") {
    return {
      status: "error",
      message: "نام محصول الزامی است",
    };
  }

  if (category_id === null) {
    return {
      status: "error",
      message: "دسته بندی الزامی است.",
    };
  }
  if (price === "") {
    return {
      status: "error",
      message: "مبلغ مورد نظر را وارد کنید.",
    };
  }
  if (quantity === "") {
    return {
      status: "error",
      message: "تعداد محصول را وارد کنید .",
    };
  }

  const token = cookies().get("token");
  const res = await fetch(
    `http://localhost:8000/api/admin-panel/products/${id}`,
    {
      cache: "no-store",
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token.value}`,
      },
      body: formActionEditProduct,
    }
  );
  const data = await res.json();
  if (data.status == "success") {
    revalidatePath("/products");
    return {
      status: "success",
      message: "محصول مورد نظر با موفقیت ویرایش شد.",
    };
  } else {
    return {
      status: "error",
      message: handleError(data.message),
    };
  }
}

async function deleteCategory(stateDeleteCategory, formActionDeleteCategory) {
  const id = formActionDeleteCategory.get("id");
  if (id === "" || id === null) {
    return {
      status: "error",
      message: "شناسه محصول الزامی است.",
    };
  }
  const data = await deleteFetch(`/categories/${id}`);
  if (data.status === "success") {
    revalidatePath("/categories");
    redirect("/categories");
    return {
      status: data.status,
      message: "حذف از دسته بندی با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function createCategory(stateCreateCategory, formActionCreateCategory) {
  const name = formActionCreateCategory.get("name");
  const parent_id = formActionCreateCategory.get("parent_id");
  const description = formActionCreateCategory.get("description");
  if (name === "" || parent_id === "" || description === "") {
    return {
      status: "error",
      message: "تمامی فیلد های زیر را پر کنید.",
    };
  }
  const data = await postFetch("/categories", { name, parent_id, description });
  if (data.status == "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "محصول دسته بندی با موفقیت اضافه شد . ",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function editCategory(stateUpdateCat, formActionCat) {
  const name = formActionCat.get("name");
  const parent_id = formActionCat.get("parent_id");
  const description = formActionCat.get("description");
  const id = formActionCat.get("id");

  if (name === "" || parent_id === "" || description === "") {
    return {
      status: "error",
      message: "فیلد های مربوطه را پر کنید",
    };
  }
  const data = await putFetch(`/categories/${id}`, {
    name,
    parent_id,
    description,
  });
  if (data.status === "success") {
    revalidatePath("/categories");
    return {
      status: data.status,
      message: "ویرایش  با موفقیت انجام شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function deleteCoupon(stateDeleteCoupon, formActionDeleteCoupon){
    const id = formActionDeleteCoupon.get("id");
    if(id === '' || id === null){
      return {
        status: "error",
        message: "شناسه محصول الزامی است.",
      };
    }
    const data = await deleteFetch(`/coupons/${id}`);  
    if(data.status === 'success'){
      revalidatePath("/coupons");
      redirect("/coupons");
      return {
        status: data.status,
        message: "حذف از دسته بندی با موفقیت انجام شد.",
      };
    }else{
      return {
        status: data.status,
        message: handleError(data.message),
      };
    }
}
async function createCoupon(state, formAction){
  const code = formAction.get("code");
  const percentage = formAction.get("percentage");
  const expired_at = formAction.get("expired_at");
  if (code === "" || percentage === "" || expired_at === "") {
    return {
      status: "error",
      message: "تمامی فیلد های زیر را پر کنید.",
    };
  }
  const data = await postFetch("/coupons", { code, percentage , expired_at });
  if (data.status == "success") {
    revalidatePath("/coupons");
    return {
      status: data.status,
      message: "کد تخفیف با موفقیت اضافه شد.",
    };
  } else {
    return {
      status: data.status,
      message: handleError(data.message),
    };
  }
}
async function editCoupon(state, formAction){
   const id = formAction.get('id');
   const code = formAction.get('code');
   const percentage = formAction.get('percentage');
   const expired_at = formAction.get('expired_at');
   if(id === '' || id === null){
      return{
        status: "error",
        message: "شناسه مربوطه یافت نشد.",
      }
   }
   if(code === ''){
      return{
        status: "error",
        message: "کد تخفیف یافت نشد"
      }
   }
   if(percentage === ''){
      return{
         status: "error",
         message: "درصد تخفیف مورد نظر یافت نشد"
      }
   }
   const data = await putFetch(`/coupons/${id}`, {code , percentage, expired_at})

   if(data.status === 'success'){
      revalidatePath('/coupons');
      return{
         status: data.status,
         message: "کاربر مورد نظر ویرایش شد."
      }
   } else {
        return {
             status: data.status,
             message: handleError(data.message),
        }
   }

}

export {
  login,
  me,
  logout,
  createUser,
  deleteForm,
  updatedForm,
  createProduct,
  deleteProduct,
  editProduct,
  deleteCategory,
  createCategory,
  editCategory,
  deleteCoupon,
  createCoupon,
  editCoupon
};
