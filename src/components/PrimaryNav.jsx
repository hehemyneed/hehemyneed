import LOGO from "../helpers/Logo.jsx";
import ICONS from "../helpers/Icons";

import LINKS from "./Navigation/Links";
import NavigationLinks from "./Navigation/LinksGenerator";

import styles from "./Navigation/navStyles.module.css";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state";

function PrimaryNav() {
  const mode = useSelector((state) => state.mode);
  const isMenuOpen = useSelector((state) => state.isMenuOpen);

  const dispatch = useDispatch();
  const { ToggleMode, MenuHandler } = bindActionCreators(actionCreators, dispatch);

  return (
    <nav className="primary-navbar absolute z-[2] flex justify-center items-center w-screen bg-transparent top-0 px-4 py-4 md:px-8">
      <div className="nav-contents flex justify-between items-center w-[1280px]">
        <div className="main-hero-logo relative cursor-pointer">
          <LOGO />
        </div>

        <ul className={`nav-links hidden md:flex md:items-center relative top-1`}>
          {NavigationLinks(LINKS(mode), "navLinks", isMenuOpen)}
          <li
            onClick={() => ToggleMode(mode === "dark" ? "light" : "dark")}
            className={`relative ml-8 pb-[6px] font-bold text-4xl md:text-3xl ${styles.links}`}
          >
            <svg
              className={`${
                mode === "light"
                  ? "fill-secondary-light hover:fill-hover-light"
                  : "fill-secondary-dark hover:fill-hover-dark"
              } h-[30px]`}
              xmlns="http://www.w3.org/2000/svg"
              height="38px"
              viewBox="0 -960 960 960"
              width="38px"
            >
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm40-83q119-15 199.5-104.5T800-480q0-123-80.5-212.5T520-797v634Z" />
            </svg>
          </li>
        </ul>
        <div onClick={ () => MenuHandler(true) } className="flex flex-col justify-between items-end menu-bars w-[50px] h-[25px] md:hidden">
          <div className="menu-trigger-bar top-bar w-[100%] h-[3px] bg-white"></div>
          <div className="menu-trigger-bar bottom-bar w-[80%] h-[3px] bg-white"></div>
          <div className="menu-trigger-bar middle-bar w-[60%] h-[3px] bg-white"></div>
        </div>
      </div>
    </nav>
  );
}

export default PrimaryNav;
