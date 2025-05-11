import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const ScrambleText = ({ children, ...rest }) => {
  const intervalRef = useRef(null);
  const viewRef = useRef(null);
  const isScramblingRef = useRef(false);

  const isInView = useInView(viewRef, { once: true });

  useEffect(() => {
    if (isInView && !isScramblingRef.current) { 
      isScramblingRef.current = true; 
      setTimeout(function() {
        scramble();
      }, 200); 
      
    }
  }, [isInView]);

  let TARGET_TEXT = children.props.children;
  const CYCLES_PER_LETTER = 2;
  const SHUFFLE_TIME = 25;

  const CHARS = "░▒▓█<>/?";

  const [text, setText] = useState(TARGET_TEXT);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = TARGET_TEXT.split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= TARGET_TEXT.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(TARGET_TEXT);
    isScramblingRef.current = false;
  };

  return (
    <div
      ref={viewRef}
      {...rest}
    >
      <h3 className={children.props.className}>{text}</h3>
    </div>
  );
};