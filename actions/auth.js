"use server";

import { postFetch, postFetchAuth } from "@/utils/fetch";
import { handleError } from "@/utils/help";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

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
async function createUser(stateUser,formCreateUser) {
  const name = formCreateUser.get('name');
  const email = formCreateUser.get('email');
  const cellphone = formCreateUser.get('cellphone');
  const password = formCreateUser.get('password');
  if(name === '' || email === '' || cellphone === '' || password === ''){
     return {
        status: 'error',
        message: "تمامی فیلد های زیر را پر کنید."
     }
  }
  const pattern = /^(\+98|0)?9\d{9}$/;
  if (!pattern.test(cellphone)) {
    return {
      status: "error",
      message: "فرمت شماره موبایل درست نیست.",
    };
  }
  const data = await postFetch('/users', {name, email, cellphone , password})
  
  if (data.status === "success") {
    revalidatePath('/users')
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
export { login, me, logout , createUser};
