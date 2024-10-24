import useimg1 from "../assets/usesImg/uses-1.png";
import useimg2 from "../assets/usesImg/uses-2.png";
import useimg3 from "../assets/usesImg/uses-3.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../utility/animation";

const Uses = () => {
  return (
    <section>
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-center text-xl">
          <motion.div
            variants={SlideRight(0.2)}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center xl:pr-14"
          >
            <h1 className="text-darkBlue font-bold text-3xl">
              How it helps people
            </h1>
            <p className="text-gray-400  mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non vitae
              maxime voluptates.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              <a href="#" className="text-red-600">
                Learn more
              </a>
            </p>
            <button
              className="
           w-fit mt-4 border border-gray-200 px-4 py-2 rounded-lg hover:bg-primary hover:text-white transform duration-300"
            >
              Get in Touch
            </button>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.2)}
            initial="initial"
            whileInView="animate"
          >
            <img src={useimg1} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">coronovirus</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.3)}
            initial="initial"
            whileInView="animate"
          >
            <img src={useimg2} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">diagnostics</p>
          </motion.div>
          <motion.div
            variants={SlideLeft(0.4)}
            initial="initial"
            whileInView="animate"
          >
            <img src={useimg3} alt="" className="w-full rounded-3xl" />
            <p className="text-gray-400 mt-4">test</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Uses;
