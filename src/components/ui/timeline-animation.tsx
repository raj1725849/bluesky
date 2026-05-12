"use client";

import React from "react";
import { motion, useInView } from "framer-motion";

interface TimelineContentProps {
  children: React.ReactNode;
  timelineRef: React.RefObject<any>;
  animationNum?: number;
  customVariants?: any;
  className?: string;
  as?: any;
}

export const TimelineContent = ({
  children,
  timelineRef,
  animationNum = 0,
  customVariants,
  className,
  as = "div",
}: TimelineContentProps) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const MotionComponent = motion(as);

  return (
    <MotionComponent
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={customVariants}
      custom={animationNum}
      className={className}
    >
      {children}
    </MotionComponent>
  );
};
