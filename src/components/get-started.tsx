import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function GetStarted() {
  const elementRef = useRef<HTMLImageElement | null>(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <section className="text-center py-10 border-b border-b-neutral-800">
      <h2 className="text-3xl lg:text-5xl font-semibold pb-1">How to start?</h2>
      <motion.div
        ref={elementRef}
        className="w-[300px] lg:w-[400px] mx-auto relative flex items-center"
        style={{
          transform: isInView ? "none" : "translateY(50%) scale(.8)",
          transition: "all .7s",
        }}
      >
        <img src="/iphone.png" alt="iphone mockup" className="lg:-rotate-90 lg:-mt-[75px]" />
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-[300px]">
          <div className="flex items-center justify-center">
            <img src="/appstore.svg" alt="App Store logo" className="w-20 lg:w-24" />
          </div>
          <div className="text-lg font-semibold mt-2 lg:text-3xl lg:mt-5">
            Download from App Store
          </div>
        </div>
      </motion.div>
    </section>
  );
}
