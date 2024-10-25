import Card from "./CardComp";
import icon1 from "../assets/icon/icon-1.png";
import icon2 from "../assets/icon/icon-2.png";
import icon3 from "../assets/icon/icon-3.png";
import { motion } from "framer-motion";
import { SlideRight, SlideLeft } from "../utility/animation";
const HowItWorks = () => {
  return (
    <section>
      <div className="container pt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-2 md:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
              <motion.div
                variants={SlideRight(0.2)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon1}
                  heading={"Symptoms"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                ></Card>
              </motion.div>

              <motion.div
                variants={SlideRight(0.3)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon2}
                  heading={"Recommendations"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                ></Card>
              </motion.div>

              <motion.div
                variants={SlideRight(0.4)}
                initial="initial"
                whileInView="animate"
              >
                <Card
                  icon={icon3}
                  heading={"Local information"}
                  text={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Risussed volutpat non."
                  }
                ></Card>
              </motion.div>
            </div>
          </div>
          <motion.div
            variants={SlideLeft(0.2)}
            initial="initial"
            whileInView="animate"
            className="flex flex-col justify-center md:justify-start md:mt-4 xl:pr-14"
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
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
