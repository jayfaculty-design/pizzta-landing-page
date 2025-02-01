import { easeInOut } from "motion";
import { motion } from "motion/react";
import React from "react";

const OurStore = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          ease: easeInOut,
        },
      }}
      viewport={{
        once: true,
      }}
      className="pb-10"
    >
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            ease: easeInOut,
          },
        }}
        viewport={{
          once: true,
        }}
        className="flex items-center justify-center mt-24 laptop:mt-0"
      >
        <img className="w-16" src="/bubbles.svg" alt="bubble" />
      </motion.div>

      <div className="text-yellows flex-col flex justify-center h-[40vh] laptop:[h-50vh] text-4xl items-center mt-20">
        <div className="flex">
          <h1 className="laptop:text-5xl">Coming Soon</h1>
          <img src="/gear.svg" className="w-10" alt="" />
        </div>
        <p className="text-[16px] text-white">Developed by Godfred -Jay Webs</p>
        <h1 className="mt-10 laptop:text-[24px] text-[16px]">Our Store</h1>
      </div>
    </motion.div>
  );
};

export default OurStore;
