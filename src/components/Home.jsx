import { Facebook, Github, Instagram, LucideTwitter } from "lucide-react";
import React from "react";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Home = () => {
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
        className="flex items-center justify-center mt-24"
      >
        <img className="w-16" src="/bubbles.svg" alt="bubble" />
      </motion.div>
      <div className="flex flex-col items-center text-yellows text-2xl gap-5 mt-5 text-center p-5">
        <h2 className="w-64">There is no Loyal Love than The Love of Food</h2>
        <p className="w-80">
          Good food basically that we have in our plate is a result of immense
          amount of hard work that is put at various stages…. Consume it with
          utmost respect.
        </p>
        <motion.button
          whileTap={{
            scale: 1.1,
          }}
          className="bg-yellows text-background p-2 w-[300px] rounded-xl cursor-pointer"
        >
          Order Now
        </motion.button>
      </div>
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
        className="flex justify-center mt-10"
      >
        <img className="w-80" src="/Image.png" alt="man" />
      </motion.div>

      <div className="flex flex-col justify-center items-center gap-5">
        <motion.div
          initial={{
            opacity: 0,
            x: 3,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: easeInOut,
            },
          }}
          viewport={{
            once: true,
          }}
          className="socials flex gap-5 justify-center mt-10"
        >
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <Instagram />
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <Facebook />
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <LucideTwitter />
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <Github />
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            x: -3,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 0.5,
              ease: easeInOut,
            },
          }}
          viewport={{
            once: true,
          }}
        >
          <p className="text-white">Developed By Godfred - [Jay Webs]</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
