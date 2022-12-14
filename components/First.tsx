import React from 'react'
import { Cursor, useTypewriter } from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles'
import Image from "next/image"
import Link from 'next/link'
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo: PageInfo
}

const First = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hi! This Is Greg!`,
      "<Keep_Learning-Keep-Coding />",
    ],
    // loop: true,
    delaySpeed: 2000,
  })

  return (
    <div className="h-screen flex flex-col space-y-10 items-center justify-center 
    text-center overflow-hidden">
      <BackgroundCircles />
      <div className='relative h-32 w-32 mx-auto'>
        <Image
          src={urlFor(pageInfo.profilePic).url()}
          layout="fill"
          objectFit="cover"
          className="rounded-full"
          alt=""
        />
      </div>
      <div className='z-20'>
        <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[12px] md:tracking-[15px]">
          &nbsp;{pageInfo?.role}
        </h2>
        <h1 className="text-5xl md:text-6xl font-semibold px-10 text-[#447de6]">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#333333" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className='gregButton'>About</button>
          </Link>
          {/* <Link href="#experience">
            <button className='gregButton'>Experience</button>
          </Link> */}
          <Link href="#skills">
            <button className='gregButton'>Skills</button>
          </Link>
          <Link href="#projects">
            <button className='gregButton'>Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default First