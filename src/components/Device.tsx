import React from 'react'
import Image from 'next/image'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

const Device = () => {
  return (
    <div className='h-[400px] w-[80vw] max-w-[600px]
    max-md:place-self-center rounded-xl relative flex flex-col antialiased'>
      <div className='grid grid-cols-3 gap-y-12 mt-4'>
          {items.map((item) => (
            <div key={item.src} className='w-full flex  justify-center '>
              <CardContainer className="inter-var">
      <CardBody className=" relative   dark:hover:shadow-2xl dark:hover:shadow-emerald-500 hover:shadow-zinc-900  rounded-xl   ">
        
      
        <CardItem translateZ={120} className="w-full ">
           <Image src={item.src} alt={item.name} width={50} height={50}
            className='dark:mix-blend-difference dark:invert'
            />
        </CardItem>
        
      </CardBody>
    </CardContainer>
            </div>
          ))}
      </div>
  
    </div>
  )
}

export default Device



const items  = [
	{	name : "React",
		src : "/React.svg"
	},
	{	
		name:"Next",
		src : "/Next-15.svg"
	},
	{	name:"React",
		src : "/JS.svg"
	},
	{	name:"Type Script",
		src : "/TS.svg"
	},
	{	name:"GitHub",
		src : "/GitHub.svg"
	},
	{
		name:"Html",
		src : "/Html.svg"
	},
	{
		name:"Css",
		src : "/Css.svg"
	},
	{
		name:"prisma",
		src : "/prisma.svg"
	},
	{
		name:"Node Js",
		src : "/Node.svg"
	},
	{	
		name:"Mongo Db",
		src : "/MongoDB.svg"
	},
	{
		name:"Jest",
		src : "/Jest.svg"
	},
	{
		name:"Postgre SQL",
		src : "/Postgres.svg"
	},

]