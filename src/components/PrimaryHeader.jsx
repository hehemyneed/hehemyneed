import { Reveal } from "../animations/Reveal.jsx";
import { FlipText } from "../animations/FlipText.jsx";
import { ScrambleText } from "../animations/ScrambleText.jsx";

import NavigationLinks from "./Navigation/LinksGenerator.jsx";
import LINKS from "./Navigation/Links.jsx";

import PrimaryButton from "./Navigation/PrimaryButton.jsx";

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index.js';

import styles from '../animations/transition.module.css';
import COLORS from "../helpers/Colors.js";

function PrimaryHeader() {
    const mode = useSelector((state) => state.mode);

    const dispatch = useDispatch();
    const { AboutHandler } = bindActionCreators(actionCreators, dispatch);
  return (
    <header
      className={`${
        mode === "light" ? "bg-primary-light" : "bg-primary-dark"
      } flex items-center justify-center relative top-0 left-0 z-[1] h-[100vh] w-[100vw]`}
    >
      <div
        className={`${
          mode === "light" ? "text-secondary-light" : "text-hover-dark"
        } main-hero-content pl-[30px] w-[1280px] md:pl-[60px]`}
      >
        <Reveal>
          <h1 className="p-2 mb-4 font-bold text-4xl max-w-max xs:text-6xl md:text-7xl">
            Muhammad Tayyab
          </h1>
        </Reveal>
        <Reveal>
          <ScrambleText>
            <h3 className="p-2 mb-8 text-2xl italic">
              Muslim Computer Scientist
            </h3>
          </ScrambleText>
        </Reveal>

        <Reveal>
          <div className="about-button p-2 mb-8">
            <PrimaryButton
              title="About Me"
              link=""
              btnHandler={() => AboutHandler(true)}
            />
          </div>
        </Reveal>
      </div>
      <ul className="hidden social-links absolute right-[2%] md:block">
        {NavigationLinks(LINKS(mode), "socialLinks")}
      </ul>
      <div
        className={`${
          mode === "light" ? "text-secondary-light" : "text-hover-dark"
        } ${
          styles["goto-next"]
        } flex flex-col items-center absolute bottom-0 overflow-hidden h-[15vh]`}
      >
        <h3 className="text-2xl font-serif">Works</h3>
        <div
          className={`${styles["down-arrow"]} ${
            mode === "light" ? "bg-secondary-light" : "bg-hover-dark"
          }`}
          style={{
            "--bg-color": mode === "light" ? COLORS.secondary.light : COLORS.hover.dark,
          }}
        ></div>
      </div>
    </header>
  );
}

export default PrimaryHeader