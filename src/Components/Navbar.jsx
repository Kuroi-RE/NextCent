import Logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <header className="w-full grid place-items-center grid-cols-3 h-[84px]">
      <div>
        <img src={Logo} alt="..." />
      </div>
      <nav className="">
        <ul className="flex flex-row gap-[50px] text-[#18191F] font-medium">
          <li>
            <a href="#">Home</a>
          </li>

          <li>
            <a href="#">Service</a>
          </li>

          <li>
            <a href="#">Feature</a>
          </li>

          <li>
            <a href="#">Product</a>
          </li>

          <li>
            <a href="#">Testimonial</a>
          </li>

          <li>
            <a href="#">FAQ</a>
          </li>
        </ul>
      </nav>
      <div className="font-medium">
        <ul className="flex flex-row gap-[14px]">
          <li className="text-primary px-[20px] py-[10px]">
            <a href="#login">Login</a>
          </li>
          <li className="bg-primary px-[20px] py-[10px] rounded-[6px]">
            <a href="#login" className="text-white bg-">
              Sign Up
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
