import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../typings.d";
import { urlFor } from "../sanity";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

const SkillPic = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer">
      <motion.img
        initial={{
          //x: directionLeft ? -200 : 200,
          x: directionLeft ? -10 : 10,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill?.image).url()}
        className="rounded-full border border-gray-500 object-cover w-20 h-20 sm:w-20 sm:h-20 md:w-28
                md:h-28 xl:w-28 xl:h-28 filter group-hover:grayscale transition duration-300 
                ease-in-out"
      />
      <div
        className="absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white h-20 w-20 sm:w-20 sm:h-20 md:w-28 md:h-28 xl:w-28 xl:h-28
            rounded-full z-0"
      >
        <div className="flex items-center justify-center h-full">
          <p className="text-xs md:text-md xl:text-lg text-center font-bold text-black opacity-100">
            {skill.title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillPic;
