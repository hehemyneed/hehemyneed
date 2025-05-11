import { useSelector } from "react-redux";

import styles from "../../animations/transition.module.css";

import COLORS from '../../helpers/Colors';

import { Link } from "react-router-dom";


function PrimaryButton({ title, btnHandler, link }) {
    const mode = useSelector(state => state.mode);
  return (
    <button
      onClick={btnHandler}
      style={{ background: COLORS.gradRed, color: COLORS.white }}
      className={`the-button relative py-4 px-8 text-xl ${styles.group} group`}
    >
      {link ? (
        <Link className="tracking-tiny relative z-[1] font-semibold" to="/">
          {title}
        </Link>
      ) : (
        <h3 className="tracking-tiny relative z-[1] font-semibold">{title}</h3>
      )}

      <span className="button-icon absolute z-[1] top-0 right-[-35px] group-hover:translate-x-3 transition-transform duration-[.25]">
        <svg
          width="58px"
          height="58px"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 476.213 476.213"
          className={`${
            mode === "light"
              ? "fill-secondary-light"
              : "fill-white"
          }`}
        >
          <path
            d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"
          ></path>
        </svg>
      </span>
      <span className={`${styles.btn} absolute top-0 left-0 overflow-hidden h-[100%] w-[100%]`} ></span>
    </button>
  );
}

export default PrimaryButton;
