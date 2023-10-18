import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navLink = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#e6487a]" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProduct"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#e6487a]" : " "
          }
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/myCart"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#e6487a]" : ""
          }
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  const user = false;
  return (
    <div className="w-full py-4 bg-base-100 shadow-md">
      <div className="flex justify-between items-center max-w-screen-2xl mx-auto px-5 md:px-10 lg:px-20">
        <div className="flex gap-5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className=" navItem dropdown-content mt-3 z-[1] p-2 font-medium shadow bg-base-100 rounded-box w-52"
            >
              {navLink}
            </ul>
          </div>
          <Link to={"/"}>
            <img src="/assets/logo.png" alt="logo" className="w-[140px]" />
          </Link>
        </div>
        <div className="flex items-center">
          <div className=" hidden lg:flex">
            <ul className="navItem flex gap-5 mr-5">{navLink}</ul>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
              >
                <li className="text-gray-700  text-center font-semibold">
                  {user?.displayName ? (
                    <p className="py-2 text-center text-base font-fira-sans ">
                      user
                    </p>
                  ) : (
                    <p className="py-2 text-center font-poppins  text-base">
                      User
                    </p>
                  )}
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to=""
              className="text-white text-lg font-medium py-2 px-6 bg-[#e6487a] rounded-md hover:text-black duration-300 active:"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;