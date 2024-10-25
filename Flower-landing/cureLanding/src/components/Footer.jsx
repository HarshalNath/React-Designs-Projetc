import logo from "../assets/logo.png";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <div className="container py-20 flex md:flex-row justify-between items-center flex-col gap-10">
        <div className="space-y-4">
          <img src={logo} alt="" className="w-40" />
          <p className="text-gray-400 md:max-w-[400px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam id
            sunt temporibus quidem.
          </p>
        </div>
        <div>
          <div className="flex space-x-6 text-3xl">
            <FaFacebook className="hover:text-primary duration-200 " />
            <FaInstagram className="hover:text-primary duration-200 " />
            <FaTwitter className="hover:text-primary duration-200 " />
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
