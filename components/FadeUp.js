"use client";

import React from "react";
import { motion } from "framer-motion";

export default function FadeUp({
  children,
  delay = 0,
  duration = 0.7,
  className = "",
  distance = 24,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1], // Gentle, controlled corporate ease curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
