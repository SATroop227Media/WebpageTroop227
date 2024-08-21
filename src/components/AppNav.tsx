import { useEffect, useState } from 'react';

import { Link } from "react-router-dom"
import "../styles/global/nav.css"

export default function AppNav() {
  const [lastScrollTop, setLastScrollTop] = useState<number>(0);
  const [scrollDirection, setScrollDirection] = useState<number>(0);

  const eventDebounce = (cb: any, delay: number = 600 / 60) => {
    let timeout = setTimeout(cb, delay); //Performs my function after a delay

    return () => {
      clearTimeout(timeout); //clears out timeout variable
      timeout = setTimeout(() => { //reinstantiates a new callback to timeout var to complete cycle
        cb();
      }, timeout);
    }
  }

  const handleScroll = (): void => {
    const scrollTop = window.scrollY; //returns number of pixels that the window is scrolled vertially

  if (scrollTop > lastScrollTop) {
    setScrollDirection(-1); //down
  } else if (scrollTop < lastScrollTop) {
    setScrollDirection(1); //up
  }
  setLastScrollTop(scrollTop); //resets last scroll amount
  };
  
  useEffect(() => {
    const debounceFunction = eventDebounce(handleScroll);

    window.addEventListener('scroll', debounceFunction);

    return () => {
      window.removeEventListener('scroll', debounceFunction);
    };
  }, [lastScrollTop]);

  return (
    <header className={"troop227-header".concat(" ", scrollDirection >= 0 ? "" : "hide")}>
      <div className='troop227-header__logo' aria-roledescription="logo">
        <img src="https://www.scouting.org/wp-content/uploads/2022/06/bsa-logo-hero-1.png" alt="Boy Scout Logo White Transparent"/>
        <h1 className='troop227-header__title' data-mobile-only="">Troop 227</h1>
        <h1 className='troop227-header__title' data-desktop-only="">Boy Scout Troop 227<span>American Legion Post 205</span></h1>
      </div>
      <nav className='troop227-header__nav'>
        <ul className='troop227-header__list'>
          <li className='troop227-header__list-item'>
            <Link className={"troop227-header__link"} to={`/`}>Home</Link>
          </li>
          <li>
            <Link className={"troop227-header__link"} to={`/projects`}>Projects</Link>
          </li>
        </ul>
      </nav>
    </header> 
  );
}

