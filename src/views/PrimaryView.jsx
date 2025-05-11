import React from 'react'

import PrimaryNav from '../components/PrimaryNav'
import PrimaryHeader from '../components/PrimaryHeader'
import MobileMenu from '../components/MobileMenu'

import styles from '../animations/transition.module.css';

import { useSelector } from 'react-redux';
import Works from '../components/Works/Works';

function PrimaryPageWrapper() {
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const isAboutOpen = useSelector(state => state.isAboutOpen);
  return (
    <div className={`relative page-wrapper ${isMenuOpen ? `${styles['is-menu-open']}` : `${styles['is-menu-close']}` } ${isAboutOpen ? 'is-about-open' : 'is-about-close'}`}>
        <PrimaryNav />
        <MobileMenu />
        <PrimaryHeader />
        <main className='relative'>
          <Works />
        </main>
    </div>
  )
}

export default PrimaryPageWrapper