import React from "react";
import { MacbookScroll } from "../ui/macbook-scroll";
// import Link from "next/link";

export const MacbookScrollDemo = () => {
  return (
    <div className="overflow-hidden bg-neutral-900 w-full">
      <div className="flex flex-col items-center justify-center text-center p-4 sm:p-8 md:p-12">
        <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          About me
        </span>
      </div>
      <MacbookScroll
        title={
          <span>
            <h2 className="">
              Transforming
              <span className="text-yellow-400">Vision</span>
            </h2>
          </span>
        }
        // badge={<Link href={""}></Link>}
        src={`/linear.webp`}
        showGradient={false}
      />
    </div>
  );
};
