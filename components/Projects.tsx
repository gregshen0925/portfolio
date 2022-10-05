import React from 'react'
import { motion } from "framer-motion"
import { Project } from '../typings'
import { urlFor } from '../sanity';


type Props = {
    projects: Project[]
}

const Projects = ({ projects }: Props) => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0'
        >
            <h3 className='absolute top-24 uppercase tracking-[10px] text-[#447de6] text-2xl text-center'>
                &nbsp;Recent Buidls
            </h3>
            <h3 className='absolute top-40 uppercase tracking-[3px] text-gray-500 text-sm'>
                &nbsp;CLICK ON THE TITLE FOR MORE INFO
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#112a99]/80'>
                {projects?.map((project, index) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-45 ' key={index}>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            className="w-[200px] h-[100px] md:w-[250px] md:h-[125px] xl:w-[500px] xl:h-[300px]"
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src={urlFor(project?.image).url()}
                            alt=""
                        />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl max-h-45'>
                            <a href={project?.linkToBuild}>
                                <h4 className='text-3xl font-semibold text-center'>
                                    {/* <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "} */}
                                    {project?.title}
                                </h4>
                            </a>
                            <div className='flex items-center space-x-2 justify-center'>
                                {project?.technologies.map(technology => (
                                    <img
                                        className='rounded-full h-10 w-10'
                                        key={technology._id}
                                        src={urlFor(technology.image).url()}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <p className='text-lg text-center md:text-left'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#0f5dec]/30 left-0 h-[300px] 
            max-h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects