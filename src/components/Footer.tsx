"use client";
import React from 'react'
import {
  IconBrandGithub,
  IconBrandX,
  IconExchange,
  IconHome,

} from "@tabler/icons-react";
import { FloatingDock } from './ui/floating-dock';
const Footer = () => {
     const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#home",
    },
 
    {
      title: "Connect on LinkedIn",
      icon: (
        <IconExchange className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/milan-prajapati-1b676526b/",
    },
 
    {
      title: "Twitter",
      icon: (
        <IconBrandX className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/milan_at_x",
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/milan-git-in",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
    
        items={links}
      />
    </div>
  )
}

export default Footer