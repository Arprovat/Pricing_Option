import { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
    const [Open,setOpen] = useState(false)
    return (
        <div className="navbar  top-0  bg-base-100 px-5">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" onClick={()=>setOpen(!Open)} className="btn btn-ghost lg:hidden">
                <IoIosMenu className="text-2xl" />
              
            </div>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content 
                bg-base-100 
                duration-1000
                ${Open? '':'hidden'}
              rounded-box z-[1] mt-3 w-52 p-2 shadow`}>

              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Iron <span className="root">Pulse</span> Fitness</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu font-semibold  menu-horizontal gap-10 px-1">
            <li><a>Home</a></li>
            <li>
              <details>
                <summary> Membership</summary>
                <ul className="p-1 z-10 w-32">
                  <li><a>Regular</a></li>
                  <li><a>Premium</a></li>
                </ul>
              </details>
            </li>
            <li><a>Classes</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn"> singUp / login</a>
        </div>
      </div>
    );
};

export default Navbar;