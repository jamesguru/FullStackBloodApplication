import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBox,
  FaCalendarAlt,
  FaChartBar,
  FaClipboard,
  FaCog,
  FaElementor,
  FaHdd,
  FaHome,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const Menu = () => {
  const [activeLink, setActiveLink] = useState("/admin");

  const handleLinkActive = (link) => {
    setActiveLink(link);
  };

  return (
    <div className="h-[100vh] bg-gray-100 p-[20px] w-[350px] shadow-lg">
      <ul className="flex flex-col items-start justify-start mt-[20px] pl-[20px]">
        <Link to="/admin" onClick={() => handleLinkActive("/admin")}>
          <li
            className={`flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100
            ${
              activeLink === "/admin"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }
            `}
          >
            <FaHome
              className={`mr-[15px] text-red-500
              ${activeLink === "/admin" ? "text-white" : "text-red-500"}     
              `}
            />
            Home
          </li>
        </Link>
        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaUser className="mr-[15px] text-red-500" />
          Profile
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <Link
          to="/admin/donors"
          onClick={() => handleLinkActive("/admin/donors")}
        >
          <li
            className={`flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100
            ${
              activeLink === "/admin/donors"
                ? "bg-red-300 p-[10px] w-[200px] text-white"
                : ""
            }
            `}
          >
            <FaBox
              className={`mr-[15px] text-red-500
              ${
                activeLink === "/admin/donors" ? "text-white" : "text-red-500"
              }     
              `}
            />
            Donors
          </li>
        </Link>

        <Link to="/admin/prospects" onClick={() =>handleLinkActive("/admin/prospects")}>
          <li className={`flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100
            ${activeLink === "/admin/prospects" ? "bg-red-300 p-[10px] w-[200px] text-white" : ""}
            `}>
            <FaUsers className={`mr-[15px] text-red-500
              ${activeLink === "/admin/prospects" ? "text-white" : "text-red-500"}     
              `} />
            Prospects
          </li>
        </Link>
        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaHome className="mr-[15px] text-red-500" />
          Orders
        </li>
        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaElementor className="mr-[15px] text-red-500" />
          Elements
        </li>
        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaCog className="mr-[15px] text-red-500" />
          Settings
        </li>

        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaHdd className="mr-[15px] text-red-500" />
          Backups
        </li>

        <hr className="w-full my-[20px] border-gray-300" />

        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaChartBar className="mr-[15px] text-red-500" />
          Charts
        </li>
        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaClipboard className="mr-[15px] text-red-500" />
          All logs
        </li>
        <li className="flex items-center text-[20px] font-semibold cursor-pointer mt-[20px] transition-colors duration-100">
          <FaCalendarAlt className="mr-[15px] text-red-500" />
          Calendar
        </li>
      </ul>
    </div>
  );
};

export default Menu;
