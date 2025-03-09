"use client";
import React from 'react'
import Device from './Device'
import Image from 'next/image'
import {Time} from './Time'


const Stack = () => {
  return (
    <div className='flex flex-col items-center mt-[10vh] justify-center'>
        <div className='lg:flex'>
			<div className='relative'>
				<Image className=' w-full rounded-xl border dark:border-zinc-800 p-1 light:border-zinc-400' src={"/deadline.jpg"} alt='never missed any deadline' width={400} height={600}/>
				<p className='absolute top-30 text-white text-3xl p-4'>Never Missed a Single Deadline</p>
			</div>
			<div className='sm:flex flex-col-reverse'>
			<Time />
			<Device />
			</div>
        </div>

    </div>
  )
}

export default Stack


