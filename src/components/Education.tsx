import React from 'react'
import { Timeline } from './ui/timeline';
import Image from 'next/image';


const Education = () => {

  //   const data = [
  //   {
  //     title: "2023",
  //     content: (
  //       <div>
  //           <Image src={"/LJ Univsertiy.png"} alt='LJ University' width={20} height={10}/>
  //           <p>
  //               Started my journey by pursuing Bachlors in Computer Application
  //           </p>
  //       </div>
  //     ),
  //   },
  // ];

const data = [
    {
      title: "2023",
      content: (
        <div>

          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-2">
            Started My Journey by Pursuing Bachlor&apos;s in Computer Applications At
          </p>
          <Image src={"/LJ University.png"} alt='LJ University' width={300} height={50} className='mix-blend-difference invert'/>
        </div>
      ),
    },
    {
      title: "Mid 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Deployed First My Website being Iphone 15 pro Clone at Vercel<br/>
            Developed it using React and Gsap
          </p>          
          <Image src={"/First Website.png"} alt='Html css JavaScript' width={300} height={50} className='rounded-xl'/>
        
        </div>
      ),
    },
    {
      title: "Early 2025",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Earnt my Full Stack Javascript developer Certification By IBM
          </p> 
        
          <Image src={"/Certification.png"} alt='Html css JavaScript' width={300} height={10} className='rounded-xl'/>
        
        </div>
      ),
    },
  
  ];
    return (
    <div>
        <Timeline data={data} />
    </div>
  )
}

export default Education