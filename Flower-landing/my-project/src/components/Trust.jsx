import trust1 from "../assets/trustImg/trust-1.png";
import trust2 from "../assets/trustImg/trust-2.png";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Trust = () => {
  return (
    <section className="bg-brandWhite py-10 mt-20">
      <div className="container">
        <motion.h1
          variants={SlideUp(0.4)}
          initial="initial"
          whileInView="animate"
          className="text-center py-6 text-4xl font-semibold text-darkBlue"
        >
          why you can trust this tool
        </motion.h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            variants={SlideUp(0.5)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 md:text-left text-center md:px-30"
          >
            <img src={trust1} alt="" className="mx-auto md:mx-0" />
            <p className="font-semibold text-3xl">Based on reliable sources</p>
            <p>
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-gray-400 text-sm">
              Enchance your preliminary diagnosis and triage with pediatric
              content{" "}
              <a href="" className="text-red-500">
                Learn more
              </a>
            </p>
          </motion.div>
          <motion.div
            variants={SlideUp(0.6)}
            initial="initial"
            whileInView="animate"
            className="space-y-6 md:text-left text-center md:px-30"
          >
            <img
              src={trust2}
              alt=""
              className=" mx-auto md:mx-0 h-[97px] w-[107px] object-fill"
            />
            <p className="font-semibold text-3xl">Based on reliable sources</p>
            <p>
              We want our tool to be safe and reliable, so its logic is based on
              the official global information provided by the WHO.
            </p>
            <p className="text-gray-400 text-sm">
              Enchance your preliminary diagnosis and triage with pediatric
              content{" "}
              <a href="" className="text-red-500">
                Learn more
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
