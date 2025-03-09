"use client";
import WorldMap from "@/components/ui/world-map";
import { motion } from "motion/react";

export function Time() {
  return (
    <div className=" bg-transparent w-full">
      <div className="max-w-7xl mx-auto text-center">
        <p className="font-bold text-xl md:text-4xl dark:text-white text-black">
          Remote{" "}
          <span className="text-neutral-400">
            {"Connectivity".split("").map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.04 }}
              >
                {word}
              </motion.span>
            ))}
          </span>
        </p>
        <p className="text-sm md:text-lg text-neutral-500 max-w-2xl mx-auto py-4">
          I am Flexible to Any Timezone!
        </p>
      </div>
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, 
            end: {
              lat: 34.0522,
              lng: -118.2437,
            }, // Los Angeles
          },
          { 
            start: { lat: 28.6139, lng: 77.209  }, 
            end: { lat: -15.7975, lng: -47.8919 }, 
          },
           {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: -25.7975, lng: 37.8919 }, 
          },
           {
            start: { lat: 28.6139, lng: 77.209  }, 
            end: { lat: 64.2008, lng: -149.4937 }, 
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, 
            end: { lat: 44.2008, lng: -159.4937 }, // Lisbon
          },
          {
            start: { lat: 51.5074, lng: -0.1278 }, // London
            end: { lat: 28.6139, lng: 77.209 }, // New Delhi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: 43.1332, lng: 131.9113 }, // Vladivostok
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: { lat: -1.2921, lng: 36.8219 }, // Nairobi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: {  lat: -15.7975, lng: -50.8919 }, // Nairobi
          },
          {
            start: { lat: 28.6139, lng: 77.209 }, // New Delhi
            end: {  lat: -15.7975, lng: -47.8919 }, // Nairobi
          },
        ]}
      />
    </div>
  );
}
