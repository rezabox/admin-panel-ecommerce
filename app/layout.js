import NextNprogress from "@/components/libraries/NextNprogress";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextNprogress>
          {children}
          <BootstrapClient />
          <Toastify/>
        </NextNprogress>
      </body>
    </html>
  );
}
