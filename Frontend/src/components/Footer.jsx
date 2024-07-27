import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-[200px] h-[60vh] mt-[50px]">
      <div className="flex justify-between py-[5%]">
      <div>
        <img src="/logo1.png" alt="" height={200} width={200} />
        <span>Saving lives, one donation at a time.</span>
      </div>

      <div>
        <h3 className="text-xl font-semibold">Quick Links</h3>
        <ul className="mt-2 space-y-2">
          <li className="hover:underline">Home</li>
          <li className="hover:underline">About Us</li>
          <li className="hover:underline">Donate</li>
          <li className="hover:underline">Contact</li>
          <Link to="/login">
            <li className="hover:underline">Admin</li>
          </Link>
        </ul>
      </div>

      <div className="w-full md:w-1/3">
      <h3 className="text-xl font-semibold">Contact Us</h3>
      <p className="mt-2">123 BloodConnect Ave, City, Country</p>
      <p className="mt-2">Phone: (123) 456-7890</p>
      <p className="mt-2">Email: info@bloodbridge.com</p>

      </div>
      </div>
      <div className="mt-8 border-t border-red-800 pt-4 text-center">
        <p>&copy; 2024 BloodBridge. All rights reserved</p>
        <div className="flex justify-center space-x-4 mt-4">
        <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12.08c0-5.522-4.477-10-10-10S2 6.558 2 12.08c0 4.411 3.07 8.083 7.305 9.27.535.098.73-.233.73-.518 0-.255-.009-.933-.014-1.832-2.97.647-3.595-1.433-3.595-1.433-.486-1.235-1.187-1.564-1.187-1.564-.97-.663.073-.65.073-.65 1.07.074 1.635 1.106 1.635 1.106.953 1.634 2.502 1.162 3.113.889.098-.695.373-1.163.68-1.43-2.373-.271-4.868-1.188-4.868-5.288 0-1.168.417-2.124 1.1-2.874-.111-.271-.478-1.363.104-2.842 0 0 .9-.288 2.95 1.095.856-.241 1.774-.36 2.688-.364.914.004 1.832.123 2.688.364 2.047-1.384 2.946-1.095 2.946-1.095.584 1.48.217 2.572.106 2.842.685.75 1.1 1.706 1.1 2.874 0 4.111-2.498 5.014-4.878 5.281.384.33.726.983.726 1.98 0 1.429-.013 2.583-.013 2.933 0 .287.193.62.735.515C18.93 20.16 22 16.491 22 12.08z" />
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22.23 5.924c-.813.36-1.684.603-2.598.711a4.517 4.517 0 001.984-2.486c-.867.514-1.826.888-2.847 1.09a4.503 4.503 0 00-7.673 4.106 12.78 12.78 0 01-9.292-4.71 4.501 4.501 0 001.392 6.008 4.482 4.482 0 01-2.044-.563v.057a4.504 4.504 0 003.605 4.416 4.515 4.515 0 01-2.036.077 4.506 4.506 0 004.205 3.127 9.034 9.034 0 01-5.602 1.932c-.363 0-.722-.021-1.079-.064a12.765 12.765 0 006.917 2.027c8.304 0 12.847-6.878 12.847-12.847 0-.195-.004-.39-.014-.583a9.183 9.183 0 002.252-2.343c-.825.367-1.71.614-2.63.723a4.518 4.518 0 001.979-2.495z" />
            </svg>
          </a>
          <a href="#" className="hover:text-red-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.5 0h-19A2.5 2.5 0 000 2.5v19A2.5 2.5 0 002.5 24h10.156v-8.797H9.548v-3.23h3.108V9.03c0-3.067 1.872-4.736 4.605-4.736 1.31 0 2.435.097 2.76.14v3.202l-1.897.001c-1.49 0-1.779.708-1.779 1.747v2.289h3.557l-.464 3.23h-3.093V24H21.5a2.5 2.5 0 002.5-2.5v-19A2.5 2.5 0 0021.5 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
