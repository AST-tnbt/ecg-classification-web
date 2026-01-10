import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";

export default function Layout() {
  const { pathname } = useLocation()

  return (
    <>
        <main>
          <Header currentPath={pathname} />
          <Outlet />
          <Footer />
          <ScrollToTopButton />
        </main>
    </>
  )
}
