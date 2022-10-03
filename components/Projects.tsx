import React from 'react'
import { motion } from "framer-motion"


type Props = {}

const Projects = (props: Props) => {
    const projects = [1, 2, 3, 4, 5]
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row
            max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((project, index) => (
                    <div className='w-screen flex-shrink-0 snap-center flex flex-col space-y-5
                    items-center justify-center p-20 md:p-44 h-screen' key={project}>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }}
                            transition={{ duration: 1.2 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            src="data:image/png;base64,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"
                            alt=""
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#F7AB0A]/50'>
                                    Case Study {index + 1} of {projects.length}:
                                </span>{" "}
                                Web3 Discord
                            </h4>
                            <p className='text-lg text-center md:text-left'>
                                Introduction
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] 
            -skew-y-12' />
        </motion.div>
    )
}

export default Projects