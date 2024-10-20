import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type FeatureProps = {
  h2: string;
  p: string;
};

export default function Feature({ h2, p }: FeatureProps) {
  const elementRef = useRef<HTMLDivElement|null>(null);
  const isInView = useInView(elementRef, { once: true });
  return (
    <motion.div
      ref={elementRef}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0)",
        transition: "all .7s"
      }}
    >
      <h2 className="text-3xl font-semibold pb-1">{h2}</h2>
      <p>{p}</p>
    </motion.div>
  );
}
