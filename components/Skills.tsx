import React from 'react'
import { motion } from "framer-motion"
import SkillPic from './SkillPic'
import { Skill } from '../typings';


type Props = {
    skills: Skill[]
}

const Skills = ({ skills }: Props) => {
    return (
        <motion.div className='flex relative flex-col text-center
        xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-center text-[#447de6] text-2xl'>
                &nbsp;skill
            </h3>

            <h3 className='absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm'>
                &nbsp;My skillset
            </h3>

            <div className='grid grid-cols-4 gap-1 md:gap-3 xl:gap-5w-[350px] h-[200px] md:w-[500px] md:h-[350px] xl:w-[600px] xl:h-[550px]'>
                {skills?.slice(0, skills.length / 2).map((skill) => (
                    <SkillPic key={skill._id} skill={skill} />
                ))}

                {skills?.slice(skills.length / 2, skills.length).map((skill) => (
                    <SkillPic key={skill._id} skill={skill} directionLeft />
                ))}
            </div>
        </motion.div>
    )
}

export default Skills