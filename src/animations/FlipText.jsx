import React from "react";
import { motion } from "framer-motion";

const DURATION = 0.25;
const STAGGER = 0.050;

export const FlipText = ({ children, ...rest }) => {
    const text = React.Children.toArray(children).map((child) => child.props.children).join("");
    const chars = text.split("");

  return (
    <motion.h1
      initial="initial"
      whileHover="hovered"
      className={`${children.props.className} relative overflow-hidden whitespace-nowrap`}
    >
      <div>
        {chars.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? <span style={{width: "0.5em"}}>&nbsp;</span> : l}
          </motion.span>
        ))}
      </div>
      <div className="absolute inset-0">
        {chars.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inline-block"
            key={i}
          >
            {l === " " ? <span style={{width: "0.5em"}}>&nbsp;</span> : l}
          </motion.span>
        ))}
      </div>
    </motion.h1>
  );
};