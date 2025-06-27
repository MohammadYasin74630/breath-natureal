import { IoMdArrowDropdown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function Navbar() {
  return (
    <nav className="text-[#c5c7c5] absolute w-full">
      <div className="navbar sm:px-8 py-8 ">
        <div className="navbar-start">
          <a className="inline-flex items-center gap-4 cursor-pointer" href="#">
            <img className="max-w-12" src="/plant-logo-1.webp" alt="" />
            <span className="text-3xl font-black max-[425px]:hidden">
              Planto.
            </span>
          </a>
        </div>
        <div className="navbar-center text-2xl flex gap-10 xl:gap-14 max-lg:hidden">
          <a href="#">Home</a>
          <a className="inline-flex items-center" href="#">
            Plants Type
            <IoMdArrowDropdown />
          </a>
          <a href="#">More</a>
          <a href="#">Contact</a>
        </div>
        <div className="navbar-end flex gap-10 xl:gap-14 ">
          <CiSearch
            size={32}
            className="min-w-8 cursor-pointer active:scale-90 transition-[scale]"
          />
          <IoBagHandleOutline
            size={32}
            className="min-w-8 cursor-pointer active:scale-90 transition-[scale]"
          />

          <div className="drawer-end">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label htmlFor="my-drawer-4" className="drawer-button ">
                <HiOutlineMenuAlt3
                  size={32}
                  className="cursor-pointer active:scale-90 transition-[scale]"
                />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer-4"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-72 p-4">
                {/* Sidebar content here */}
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a className="inline-flex items-center" href="#">
                    Plants Type
                    <IoMdArrowDropdown />
                  </a>
                </li>
                <li>
                  <a href="#">More</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
