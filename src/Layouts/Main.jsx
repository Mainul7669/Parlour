import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/pages/Footer";
import Navbar from "../components/Shared/Navbar";

function Main() {
  const location = useLocation();

  const noNavbarFooter =
    location.pathname.includes("login") || location.pathname.includes("signup") || location.pathname.includes("dashboard");

  return (
    <div>
      {noNavbarFooter || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noNavbarFooter || <Footer></Footer>}
      {/* Main content goes here */}
    </div>
  );
}

export default Main;
