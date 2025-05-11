import { Link } from "react-router-dom";

import { motion } from "framer-motion";
import styles from "./navStyles.module.css";

import { useSelector } from "react-redux";

const NavigationLinks = (links, linkType, isMenuOpen) => {
  const LINKS = links[linkType];
  const mode = useSelector((state) => state.mode);
  return LINKS.map((link, index) => (
    <li
      key={index}
      className={`${
        mode === "light"
          ? "text-secondary-light hover:text-hover-light"
          : "text-secondary-dark hover:text-hover-dark"
      } relative ${linkType === "navLinks" ? 'ml-8' : 'mb-4'} font-bold text-4xl md:text-3xl`}
    >
      <Link to={link.href} className={`${isMenuOpen ? "" : `${styles.links}`}`}>
        {link.label}
      </Link>
    </li>
  ));
};

export default NavigationLinks;
