"use client";
import React, { Suspense, useMemo } from "react";
import { globeConfig, sampleArcs } from './ui/globconfig';

// Dynamically import the World component
const World = React.lazy(() => import('./ui/globe').then(module => ({ default: module.World })));

const Time = () => {
  // Use useMemo to avoid unnecessaray re-renders of the World component
  const memoizedWorld = useMemo(() => <World data={sampleArcs} globeConfig={globeConfig} />, [sampleArcs, globeConfig]);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-xl word-wrap w-full">I am Very flexible when it comes to timezones!</p>
      <div className="h-[260px] w-full">
        {/* Suspense component handles loading state while the World is being lazy-loaded */}
        <Suspense fallback={<div>Checking for Availability....</div>}>
          {memoizedWorld}
        </Suspense>
      </div>
    </div>
  );
};

export default Time;
