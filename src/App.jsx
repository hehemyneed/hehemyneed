import './App.css'
import MyRoutes from './Routes/MyRoutes'

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const isAboutOpen = useSelector(state => state.isAboutOpen);

  useEffect(() => {
    ((isMenuOpen && !isAboutOpen) || (!isMenuOpen && isAboutOpen)) ? document.body.classList.add('overflow-hidden')  : document.body.classList.remove('overflow-hidden');
  });
  
  return (
    <>
      <MyRoutes />
    </>
  )
}

export default App
