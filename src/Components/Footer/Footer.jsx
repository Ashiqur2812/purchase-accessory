// import PropTypes from 'prop-types';
import { useLocation } from "react-router-dom";
const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer className={pathname === "/" ? "mt-[5rem]" : ""}>
      <div className='ml-20 lg:ml-0'>
        <div className="text-center w-[234px] lg:w-full bg-base-200 pt-10 ">
          <h3 className="text-lg lg:text-2xl pb-2 font-bold">Gadget Heaven</h3>
          <p>Leading the way in cutting-edge technology and innovation.</p>
        </div>
        <div className="flex gap-20 bg-base-200 flex-col w-fit lg:w-full lg:flex-row footer text-black p-10">
          <nav className="ml-12 lg:ml-96">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav className="ml-12 lg:ml-28">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav className="ml-12 lg:ml-28">
            <h6 className="footer-title">Legal</h6>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
