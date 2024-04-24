import NextNprogress from "@/components/libraries/NextNprogress";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import { Suspense } from "react";
import { AuthProvider } from "@/context/AuthContext";
export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
       <AuthProvider>
       <Suspense>
          <NextNprogress>
            {children}
            <BootstrapClient />
            <Toastify />
          </NextNprogress>
        </Suspense>
       </AuthProvider>
      </body>
    </html>
  );
}
