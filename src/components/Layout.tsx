import { Outlet } from "react-router";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <>
        <main>
          <Header />
          <Outlet />
          <Footer />
        </main>
    </>
  )
}
