import React, { useEffect, useState } from 'react'

import { Link } from 'react-router-dom';

import NavigationLinks from './Navigation/LinksGenerator.jsx'
import LINKS from './Navigation/Links.jsx';

import ICONS from '../helpers/Icons.js'
import COLORS from '../helpers/Colors.js';

import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import {actionCreators} from '../state/index.js';

import { motion } from "framer-motion"
import styles from '../animations/transition.module.css';

function MobileMenu() {
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const mode = useSelector(state => state.mode);
  const dispatch = useDispatch();
  const {MenuHandler} = bindActionCreators(actionCreators, dispatch);
  console.log(styles);
  
  return (

        <div className={`fixed left-0 top-0 z-[4] overflow-hidden h-[100vh] w-[100vw] ${isMenuOpen ? 'visible' : 'invisible'}`}>
          <nav style={{background: COLORS.blueGrad}} className={`${styles['mob-menu']} relative z-[4] flex flex-col justify-between items-center p-4 h-[100%] md:hidden page`}>
          <motion.div
            initial={{ y: isMenuOpen ? 35 : 0, scale: isMenuOpen ? .5 : 1, opacity: isMenuOpen ? 0 : 1 }} 
            animate={{ y: isMenuOpen ? 0 : 35, scale: isMenuOpen ? 1 : 0, opacity: isMenuOpen ? 1 : 0 }} 
            transition={{ delay: isMenuOpen ? .4 : 0,
                          duration: isMenuOpen ? .3 : .3, 
                          ease: "easeOut" }}
            className='flex justify-end w-[100%]'>
              <Link to="/" onClick={() => MenuHandler(false)}>
                <img className="filter invert h-10 w-10" src={ICONS.Close} alt="" />
              </Link>
          </motion.div>
            <ul style={{color: COLORS.white}} className='relative left-[10%] flex flex-col justify-between mx-[20%] w-[80%] h-[40%] font-bold'>
            {NavigationLinks(LINKS(mode), "mobNavLinks", isMenuOpen)}
            </ul>
            <ul className='flex items-center justify-between w-[60%] mx-[20%] h-[10%]'>
            {NavigationLinks(LINKS(mode), "socialLinks", isMenuOpen)}
            </ul>
          </nav>
          <div className={`absolute z-[3] ${styles['page-transition']}`}></div>
        </div>
  )
}

export default MobileMenu




{/* <svg className={colorStyle} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2070 1623">
        <path d="M241.5 227.5L200 198.5L200.5 1065L202.5 1073.5L205.5 1081.5L209.5 1089L213 1094L219 1101.5L552 1495L563.5 1507.5V362.5L996 672L1421.5 366.5L1448 348L1477.5 327L1503.5 308L1531 289L1539.5 283L1547.5 276.5L1556 267.5L1561.5 260L1565.5 253.5L1567.5 248L1570.5 238V207V120.5V84L995.5 496L420.5 84.5V1117.5H419L395.5 1089L375.5 1065.5L361.5 1049L349.5 1034.5L346 1026.5L343.5 1019L342 1014.5V1011.5V383.5V378L342.5 375.5L344 362.5L344.5 344.5L344 329.5L343.5 318.5L343 313L337.5 299L329 286.5L315.5 275.5L282 255L241.5 227.5Z"/>
        <path d="M642.5 686V523.5L995.5 775.5L1559 372L1569.5 364.5L1570.5 1118.5L1628 1051L1636.5 1040.5L1643.5 1032.5L1646 1029L1647.5 1026.5L1648.5 1023.5L1649 349L1650 314L1651.5 306.5L1653.5 300.5L1658.5 294L1665 287L1737 236.5L1780.5 205.5L1790.5 197.5V1069V1070.5L1789.5 1074L1788.5 1077.5L1787.5 1080.5L1786.5 1082.5L1785.5 1084.5L1781 1091L1771.5 1101.5L1436.5 1498.5L1429 1506.5L1428.5 641.5L995.5 951.5L699 739L660 711L655 707L651 703.5L647.5 699.5L644.5 693.5L642.5 686Z"/>
</svg> */}