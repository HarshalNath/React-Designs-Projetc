import hero from "../assets/hero.png";
import { motion } from "framer-motion";
import { SlideUp } from "../utility/animation";
const Hero = () => {
  return (
    <div className="container grid grid-cols-1 md:grid-cols-2 bg-brandWhite min-h-[650px] ">
      {/* left-side */}
      <div className="flex flex-col justify-center gap-3 xl:pr-40">
        <div className="text-center mb-10 mt-24 md:mt-0 md:mb-0 space-y-4 md:text-left ">
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            whileInView="animate"
            className="font-bold text-5xl text-darkBlue"
          >
            COVID-19 Risk Assessment Tool
          </motion.h1>
          <motion.p
            variants={SlideUp(0.3)}
            initial="initial"
            whileInView="animate"
            className="text-gray-400 text-lg"
          >
            A set of solutions designed to help quickly identify coronavirus
            symptoms and get reliable information regarding COVID-19 concerns.
          </motion.p>
          <motion.button
            variants={SlideUp(0.4)}
            initial="initial"
            whileInView="animate"
            className="w-fit bg-primary px-6 py-4 rounded-lg text-white font-bold mx-auto md:mx-0"
          >
            See how to use it
          </motion.button>
        </div>
      </div>

      {/* right-side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex items-center justify-center"
      >
        <img src={hero} alt="hero-img" />
      </motion.div>
    </div>
  );
};

export default Hero;

// main-hero-container
// <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 bg-[#f9f5fc] min-h-6 rounded-3xl">
//   {/* left-ssection */}

//   <div className="flex flex-col justify-center gap-3 xl:pr-40">
//     <div className="mt-24 mb-10 md:mt-0 md:mb-0 space-y-4 text-center md:text-left ">
//       <h1 className="text-5xl font-bold text-darkBlue">
//         COVID-19 Risk Assessment Tool
//       </h1>
//       <p className="text-gray-400 mt-5 text-lg">
//         A set of solutions designed to help quickly identify coronavirus
//         symptoms and get reliable information regarding COVID-19 concerns.
//       </p>
//       <button className="mt-5 border px-6 py-4 rounded-lg font-bold bg-[#fe6b7e] text-white hover:shadow-lg duration-200 w-fit mx-auto md:mx-0">
//         See how to use it
//       </button>
//     </div>
//   </div>

//   {/* right-section */}

//   <div className="flex items-center justify-center">
//     <img src={hero} alt="hero-img" />
//   </div>
// </div>
