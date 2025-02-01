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
      <div className="flex laptop:pl-10 laptop:pr-10 flex-col laptop:flex-row items-center justify-between">
        <div className="flex flex-col items-center w-[50%] laptop:items-start text-yellows text-2xl gap-5 mt-5 laptop:mt-0 text-center p-5">
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
            className="flex items-center laptop:w-full justify-center mt-24 laptop:mt-0"
          >
            <img
              className="w-16 place-self-center"
              src="/bubbles.svg"
              alt="bubble"
            />
          </motion.div>
          <h2 className="w-64 laptop:w-[500px] laptop:text-left laptop:text-5xl">
            There is no Loyal Love than The Love of Food.
          </h2>
          <p className="w-80 laptop:w-[500px] laptop:text-left font-Rale text-white">
            Good food basically that we have in our plate is a result of immense
            amount of hard work that is put at various stages…. Consume it with
            utmost respect.
          </p>
          <motion.button
            whileTap={{
              scale: 1.1,
            }}
            className="bg-yellows font-medium text-background p-2 w-[300px] rounded-xl cursor-pointer"
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
          className="flex justify-center laptop:pr-40 laptop:justify-start mt-10 laptop:mt-0 w-[50%] "
        >
          <img
            className="w-80 laptop:w-[480px] laptop:mt-0"
            src="/Image.png"
            alt="man"
          />
        </motion.div>
      </div>

      <div className="flex laptop:justify-start laptop:items-start laptop:pl-16 flex-col justify-center items-center gap-5">
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
          className="socials flex gap-5 justify-center mt-10 laptop:mt-5"
        >
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <a target="_blank" href="https://github.com/jayfaculty-design">
              <Instagram />
            </a>
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <a target="_blank" href="https://github.com/jayfaculty-design">
              <Facebook />
            </a>
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <a target="_blank" href="https://github.com/jayfaculty-design">
              <LucideTwitter />
            </a>
          </div>
          <div className="bg-yellows p-2 rounded-full flex items-center justify-center cursor-pointer">
            <a target="_blank" href="https://github.com/jayfaculty-design">
              <Github />
            </a>
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
