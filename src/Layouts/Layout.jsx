import { Outlet } from "react-router";
import Navbar from "../Components/layout/Navbar";
import Headers from "../Components/layout/Headers";
import Footer from "../Components/layout/Footer";

const Layout = () => {
  return (
    <div>
      <Headers />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
