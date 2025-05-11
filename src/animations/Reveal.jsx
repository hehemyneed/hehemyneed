import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, ...rest }) => {
    const ref = useRef(null);
    const isInView = useInView(ref);

    const mainControls = useAnimation();
    const slideControls = useAnimation();

    useEffect(() => {
        if(isInView) {
            mainControls.start("visible"); 
            slideControls.start("visible");
        }
    }, [isInView]);

  return (
    <div ref={ref} className="relative w-fit">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 10 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
        {...rest}
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          hidden: { left: 0, width: '100%' },
          visible: { left: '100%', width: 0 },
        }}
        initial="hidden"
        animate={slideControls}
        transition={{ duration: 0.5 }}
        style={{ top: 0, left: 0, right: 0, position: "absolute", background: "white", width: "100%", height: '100%' }}
      >
      </motion.div>

    </div>
  );
};
