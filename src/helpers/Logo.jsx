import { useSelector } from "react-redux";

import { motion } from "framer-motion";

const LOGO = () => {
  const mode = useSelector((state) => state.mode);
  const colorStyle = `${mode === "light" ? "stroke-secondary-light opacity-95" : "stroke-hover-dark"
    } h-[50px] md:h-[60px]`;

  return (
    <svg viewBox="0 0 750 620" fill="none" xmlns="http://www.w3.org/2000/svg" className={colorStyle}>
      <path d="M89.5 1.5L0 139.5H328V619.5L463 484.5V139.5H661L750 0L89.5 1.5Z" fill="url(#paint0_linear_2001_7)" />
      <defs>
        <linearGradient id="paint0_linear_2001_7" x1="730" y1="3.62055e-05" x2="375" y2="-240.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#1B75BC" />
          <stop offset="1" stopColor="#0C3656" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LOGO;
