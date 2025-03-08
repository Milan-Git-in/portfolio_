"use client";
import React from "react";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { useTheme } from "next-themes";
import { MoonStar, Sun } from "lucide-react";
import { ProductItem } from "./ui/navbar-menu";
const Navbar = () => {
    const [active, setActive] = useState<string | null>(null); // State for hover effect
    const {theme , setTheme} = useTheme();
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light")
    }
  return (
    <Menu setActive={setActive}>
            <MenuItem item="About" setActive={setActive} active={active}>
                <p className="max-w-[200px] words-wrap">
                  I’m a full-stack developer who likes creating dynamic and scalable web applications using modern technologies
                </p>
                 
            </MenuItem>
            <MenuItem item="Projects" setActive={setActive} active={active}>
              <ProductItem
              title="Shop.co"
              href="https://shop-co-beryl.vercel.app"
              src="/Shop.png"
              description="Ecommerce web app to purchase clothing!"
            />
            </MenuItem>
            <MenuItem item="Contact" setActive={setActive} active={active}>
              <p className="self-center">
                milanprajapati366@gmail.com
              </p>
              

              <HoveredLink href="https://www.linkedin.com/in/milan-prajapati-1b676526b/"><p className="place-self-center">LinkedIn</p></HoveredLink>
            
              <HoveredLink href="https://github.com/Milan-Git-in"><p className="place-self-center">GitHub</p></HoveredLink>
            
            
            </MenuItem>

            {theme === "light" ? <Sun onClick={toggleTheme}/> : <MoonStar className="ml-5" onClick={toggleTheme} />}
          </Menu>
  );
};

export default Navbar;
