import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Toaster } from "react-hot-toast";
// import Footer from "../../Footer/Footer";
// import Navbar from "../../Navbar/Navbar";

const Layout = () => {
  return (
    <>
      
      <div className="h-16">
        <Toaster />
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-292px)] container mx-auto">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </>
  );
};

Layout.propTypes = {};

export default Layout;
