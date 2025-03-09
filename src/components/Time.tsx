"use client";
import React, { useState, useEffect } from 'react';
import { World } from './ui/globe'; // Your dynamically imported 3D Globe component
import { globeConfig, sampleArcs } from './ui/globconfig';

const Time = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Only set to true once the component has mounted in the browser
    setIsClient(true);
  }, []);

  if (!isClient) {
    // Render nothing or a fallback loading state before the component mounts
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl word-wrap w-full">I am Very flexible when it comes to timezones!</p>
      <div className="h-[260px] w-full">
        <World data={sampleArcs} globeConfig={globeConfig} />
      </div>
    </div>
  );
};

export default Time;
