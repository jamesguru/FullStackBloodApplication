import { Link } from "react-scroll";


const Navbar = () => {
  return (
    <div className="flex items-center justify-between h-[100px] px-[200px]">
      <img
        src="/logo1.png"
        alt=""
        height={200}
        width={200}
        className="cursor-pointer"
      />

      <div className="flex items-center justify-evenly cursor-pointer">
        <Link to="hero" smooth={true} duration={1000} className="mr-3 text-[18px] font-medium">Home</Link>
        <Link to="featured" smooth={true} duration={1000} className="mr-3 text-[18px] font-medium">About Us</Link>
        <Link to="contact" smooth={true} duration={1000} className="mr-3 text-[18px] font-medium">Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
