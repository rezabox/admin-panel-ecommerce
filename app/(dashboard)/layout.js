import NextNprogress from "@/components/libraries/NextNprogress";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Suspense>
          <AuthProvider>
            <NextNprogress>
              <Header />
              <div className="container-fluid">
                <div className="row">
                  <Navbar />
                  <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                    {children}
                  </main>
                </div>
              </div>
              <BootstrapClient />
              <Toastify />
            </NextNprogress>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
