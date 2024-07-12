'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function Navbar() {
  const path = usePathname();
  return (
    <div>
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3">
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link href='/' className={path === '/' ? 'nav-link active' : 'nav-link'} aria-current="page">
                <i className="bi bi-grid me-2"></i>
                داشبورد
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/users' className={path.includes('/users') ? 'nav-link active' : 'nav-link'}>
                <i className="bi bi-people me-2"></i>
                کاربران
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/products" className={path.includes('/products') ? 'nav-link active' : 'nav-link'}>
                <i className="bi bi-box-seam me-2"></i>
                محصولات
              </Link>
            </li>
            <li className="nav-item">
              <Link href='/category' className={path.includes('/category') ? 'nav-link active' : 'nav-link'}>
                <i className="bi bi-grid-3x3-gap me-2"></i>
                دسته بندی
              </Link>
            </li>
            <li className="nav-item">
              <a className={path.includes('/orders') ? 'nav-link active' : 'nav-link'} href="#">
                <i className="bi bi-basket me-2"></i>
                سفارشات
              </a>
            </li>
            <li className="nav-item">
              <a className={path.includes('/transactions') ? 'nav-link active' : 'nav-link'} href="#">
                <i className="bi bi-currency-dollar me-2"></i>
                تراکنش ها
              </a>
            </li>
            <li className="nav-item">
              <a className={path.includes('/coupons') ? 'nav-link active' : 'nav-link'} href="#">
                <i className="bi bi-percent me-2"></i>
                تخفیف ها
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
export default Navbar;
