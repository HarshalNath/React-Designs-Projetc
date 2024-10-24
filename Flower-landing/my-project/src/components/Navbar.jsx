import logo from "../assets/logo.png";
import { motion } from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* logo  */}
        <div>
          <img src={logo} alt="logo" className="w-40" />
        </div>

        {/* navlinks section */}

        <ul className="hidden md:flex items-center gap-5">
          <li>
            <a href="#">Products</a>
          </li>
          <li>
            <a href="#">Custom stories</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Blogs</a>
          </li>
        </ul>
        {/* button  */}

        <div className="border-gray-400 border p-3 rounded-lg hover:bg-primary hover:text-white transform duration-300">
          <button>Get in Touch</button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
