import NextNprogress from "@/components/libraries/NextNprogress";
import BootstrapClient from "@/components/libraries/Bootstrap";
import Toastify from "@/components/libraries/Toastify";
import "./globals.css";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Chart from "@/components/layout/Chart";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <NextNprogress>
          <Header />
          <div class="container-fluid">
            <div class="row">
              <Navbar />
              <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4 mt-4">
                {children}
                <Chart />
              </main>
            </div>
          </div>
          <BootstrapClient />
          <Toastify />
        </NextNprogress>
      </body>
    </html>
  );
}
