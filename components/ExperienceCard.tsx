import React from 'react'
import { motion } from "framer-motion"
import Image from 'next/image'
import { Experience } from '../typings'
import { urlFor } from '../sanity';

type Props = {
    experience: Experience
}

const ExperienceCard = ({ experience }: Props) => {

    return (
        <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 
         md:w-[600px] xl:w-[850px] w-[300px] h-[300px] md:h-[480px] xl:h-[500px] overflow-y-scroll snap-center
          bg-[#292929] p-5 scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80
        hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden '>
            <motion.img
                initial={{
                    y: -100,
                    opacity: 0,
                }}
                transition={{ duration: 1.2 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-28 h-28 rounded-full xl:w-[200px] xl:h-[200px] object-cover
                object-center"
                src={urlFor(experience?.companyImage).url()}
                alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-3xl font-light text-center'>{experience.jobTitle}</h4>
                <p className='font-bold text-2xl mt-1 text-center'>{experience.company}</p>
                <div className='flex space-x-2 my-2 justify-center'>
                    {experience?.technologies?.map(technology => (
                        <img
                            key={technology._id}
                            className="h-10 w-10 rounded-full"
                            src={urlFor(technology.image).url()}
                        />
                    ))}
                </div>
                <p className='uppercase py-4 text-gray-300 text-center'>
                    {new Date(experience.dateStarted).toDateString()} -{" "}
                    {experience.isCurrentlyWorkingHere
                        ? "Present"
                        : new Date(experience.dateEnded).toDateString()}
                </p>

                <ul className='list-disc space-y-4 ml-5 text-lg h-80 overflow-scroll 
                scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80
                max-w-[400px]'>
                    {experience.points.map((point, index) => (
                        <li key={index}>{point}</li>
                    ))}
                </ul>
            </div>
        </article>
    )
}

export default ExperienceCard