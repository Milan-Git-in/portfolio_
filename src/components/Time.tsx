"use client"
import React from 'react'
import { World } from './ui/globe'
import { globeConfig, sampleArcs } from './ui/globconfig'

const Time = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
        <p className='text-xl word-wrap w-full'>I am Very flexible when it comes to timezones!</p>
    <div className='h-[260px] w-full'>
        <World data={sampleArcs} globeConfig={globeConfig} />
        
        </div>
        </div>
  )
}

export default Time