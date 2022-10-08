import React from "react";
import { motion } from "framer-motion";
import { Project } from "../typings";
import { urlFor } from "../sanity";
import Image from "next/image";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <div
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-[#447de6] text-xl text-center md:text-2xl ">
        &nbsp;Recent Buidls
      </h3>
      <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-center text-sm md:text-xs">
        &nbsp;CLICK ON THE TITLE FOR MORE INFO
      </h3>

      <div
        className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#112a99]/80"
      >
        {projects?.map((project, index) => (
          <div
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-10 md:p-45 "
            key={index}
          >
            <img
              // initial={{
              //     y: -300,
              //     opacity: 0,
              // }}
              className="w-[250px] h-[150px] md:w-[400px] md:h-[250px] xl:w-[500px] xl:h-[300px]"
              // transition={{ duration: 1.2 }}
              // whileInView={{ opacity: 1, y: 0 }}
              // viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt=""
            />

            <div className="space-y-5 px-0 md:px-10 max-w-6xl max-h-40">
              <a href={project?.linkToBuild}>
                <h4 className="text-3xl font-semibold text-center">
                  {/* <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "} */}
                  {project?.title}
                </h4>
              </a>
              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="rounded-full h-6 w-6 md:h-10 md:w-10"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt=""
                  />
                ))}
              </div>
              <p className="text-xs text-center md:text-left md:text-xl">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div
        className="w-full absolute top-[30%] bg-[#0f5dec]/30 left-0 h-[300px] 
            max-h-[500px] -skew-y-12"
      />
    </div>
  );
};

export default Projects;
