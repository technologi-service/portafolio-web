"use client";
import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";
import { FiDownload, FiPlayCircle } from "react-icons/fi";
import Image from "next/image";
import { Button } from "@nextui-org/react";
export function HeroHighlightDemo() {
  return (
    <HeroHighlight className="flex flex-col md:flex-row items-center justify-center space-x-0 md:space-x-4">
      <div className="flex flex-col items-center space-y-4 md:space-y-8">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-4xl px-4 md:px-0 md:text-5xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
        >
          Hi, I&apos;m JOSE MATHEUS
          <br />
          <Highlight className="text-black dark:text-white">
            Full Stack Developer
          </Highlight>
        </motion.h1>

        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 pt-8 ">
          <Button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 md:py-4 px-4 md:px-8 text-base md:text-xl w-full md:w-auto"
            variant="shadow"
            endContent={<FiDownload />}
          >
            Download CV
          </Button>
          <Button
            className="font-bold py-2 md:py-4 px-4 md:px-8 text-base md:text-xl w-full md:w-auto"
            variant="shadow"
            color="warning"
            endContent={<FiPlayCircle />}
          >
            Watch Video
          </Button>
        </div>
      </div>
      <div className="flex flex-col md:flex-row space-y-16 md:space-y-0 space-x-0 md:space-x-4 pt-4 md:pt-20"></div>
      <div className="hidden md:block">
        <Image
          src="/imagenes/robot_no_exif.jpg"
          width={400}
          height={400}
          alt="Hero"
          className="rounded-full"
        />
      </div>
    </HeroHighlight>
  );
}
