import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import PrimaryPageWrapper from '../views/PrimaryView';

function MyRoutes() {
  const isMenuOpen = useSelector(state => state.isMenuOpen);
  const isAboutOpen = useSelector(state => state.isAboutOpen);

  useEffect(() => {
    ((isMenuOpen && !isAboutOpen) || (!isMenuOpen && isAboutOpen)) ? document.body.classList.add('overflow-hidden')  : document.body.classList.remove('overflow-hidden');
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route index element = {
            <>
              <PrimaryPageWrapper />
            </>
        } 
        />
      </Routes>
    </BrowserRouter>
  )
}

export default MyRoutes;
