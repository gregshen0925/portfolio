import React from 'react'
import { motion } from "framer-motion"
import { PageInfo } from '../typings.d';
import { urlFor } from '../sanity';


type Props = {
    pageInfo: PageInfo
}

const About = ({ pageInfo }: Props) => {
    return (
        <div
            // initial={{ opacity: 0 }}
            // whileInView={{ opacity: 1 }}
            // transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left
            md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-[#447de6] text-2xl'>
                &nbsp;About
            </h3>
            <img
                // initial={{
                //     x: -200,
                //     opacity: 0,
                // }}
                // transition={{
                //     duration: 1.5,
                // }}
                // whileInView={{ opacity: 1, x: 0 }}
                // viewport={{ once: true }}
                src={urlFor(pageInfo?.heroImage).url()}
                className='-mb-20 md:mb-0 flex-shrink-0 h-28 w-28 rounded-full object-cover
                md:rounded-lg md:w-[400px] md:h-[400px] xl:w-[500px] xl:h-[600px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
                <h4 className='text-4xl font-semibold'>
                    Here is a{" "}
                    <span className='underline decoration-[#F7aB0A]/50'>little</span>{" "}
                    background
                </h4>
                <p className='text-md'>
                    {pageInfo?.backgroundInfo}
                </p>
            </div>

        </div>
    )
}

export default About