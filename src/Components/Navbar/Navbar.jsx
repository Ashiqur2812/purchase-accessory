// import PropTypes from 'prop-types';
import { HiOutlineHeart, HiOutlineShoppingCart } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { pathname } = useLocation();
  // console.log(pathname)
  return (
    <>
      <div
        className={
          pathname === "/"
            ? "navbar bg-purple-700 rounded-t-3xl overflow-hidden px-4 lg:px-16 py-6"
            : "navbar bg-white-700 rounded-t-3xl overflow-hidden px-4 lg:px-16 py-6"
        }
      >
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-teal-300 font-semibold"
                      : "hover:text-teal-300"
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-teal-300 font-semibold"
                      : "hover:text-teal-300"
                  }`
                }
              >
                Statistics
              </NavLink>
              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  `${
                    isActive
                      ? "text-teal-300 font-semibold "
                      : "hover:text-teal-300"
                  }`
                }
              >
                Dashboard
              </NavLink>
            </ul>
          </div>
          <a
            className={
              pathname === "/"
                ? "btn btn-ghost text-white text-2xl"
                : "btn btn-ghost text-black text-2xl"
            }
          >
            Gadget Heaven
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul
            className={
              pathname === "/"
                ? "menu text-white menu-horizontal px-2 gap-4"
                : "menu text-black menu-horizontal px-2 gap-4"
            }
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-teal-300 font-semibold"
                    : "hover:text-teal-300"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/statistics"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-teal-300 font-semibold"
                    : "hover:text-teal-300"
                }`
              }
            >
              Statistics
            </NavLink>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `${
                  isActive
                    ? "text-teal-300 font-semibold"
                    : "hover:text-teal-300"
                }`
              }
            >
              Dashboard
            </NavLink>
          </ul>
        </div>
        <div className="flex gap-3 navbar-end ">
          <div className="h-8 w-8 flex justify-center items-center rounded-full bg-white">
            <HiOutlineShoppingCart />
          </div>
          <div className="h-8 w-8 rounded-full bg-white flex justify-center items-center">
            <HiOutlineHeart />
          </div>
        </div>
      </div>
    </>
  );
};

Navbar.propTypes = {};

export default Navbar;
