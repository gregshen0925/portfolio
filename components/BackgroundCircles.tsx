import React from 'react'
import { motion } from "framer-motion"

type Props = {}

const BackgroundCircles = (props: Props) => {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"],
            }}
            transition={{
                duration: 2.5,
            }}
            className="relative flex justify-center items-center"
        >
            <div className="absolute border border-[#447de6] rounded-full h-[130px] w-[130px] md:h-[200px] md:w-[200px]
        mt-52 animate-ping absolute"/>
            <div className="rounded-full border border-[#333333] h-[230px] w-[230px] md:h-[300px] md:w-[300px] absolute 
        mt-52 "/>
            <div className="rounded-full border border-[#447de6] h-[320px] w-[320px] md:h-[500px] md:w-[500px] absolute 
        mt-52 animate-pulse"/>
            <div className="rounded-full border border-[#333333] opacity-20 h-[360px] w-[360px] md:h-[650px] md:w-[650px]
        absolute mt-52"/>
            <div className="rounded-full border border-[#333333] h-[400px] w-[400px] md:h-[700px] md:w-[700px] absolute 
        mt-52 "/>
        </motion.div>
    )
}

export default BackgroundCircles