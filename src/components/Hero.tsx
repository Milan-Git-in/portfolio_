import React from 'react'
import { Spotlight } from "@/components/ui/spotlight-new";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const Hero = () => {
  return (
    <div id='#home' className="flex h-[80vh] justify-center items-center  flex-col">
    <Spotlight />
    <p className="-mb-3" style={{fontSize : "min(6.5vw , 60px)"}}>Turning Imaginations into Reality</p>
    <TextGenerateEffect words="From Frontend Flair to Backend Blend"/>
  </div>
  )
}

export default Hero