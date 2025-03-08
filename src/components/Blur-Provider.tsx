"use client";
import React from "react";
import { useState, useEffect } from "react";

const Blur_Provider = ({ children }: { children: React.ReactNode }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };
    if (typeof window !== "undefined") {
      if (document.readyState === "complete") {
        handleLoad();
      } else {
        window.addEventListener("load", handleLoad);
      }
    } 
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <div
      className={`transition-all duration-200 ${isLoaded ? "blur-0 opacity-100" : "blur-sm opacity-50"}`}
    >
      {children}
    </div>
  );
};

export default Blur_Provider;
