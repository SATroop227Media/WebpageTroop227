import { useEffect, useState, UIEvent } from 'react';

import { Link } from "react-router-dom"
import "../styles/global/nav.css"


export default function AppNav() {

    //delay is a number, value is a generic


    const [lastScrollTop, setLastScrollTop] = useState<number>(0);
    const [scrollDirection, setScrollDirection] = useState<number>(0); // 'up' or 'down'

    const handleScroll = (): void => {
        const scrollTop = window.scrollY;
    
        if (scrollTop > lastScrollTop) {
            console.log('down')
          setScrollDirection(-1);
        } else if (scrollTop < lastScrollTop) {
            console.log('up')
          setScrollDirection(1);
        }
    
        setLastScrollTop(scrollTop);
      };
    
      useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [lastScrollTop]);

    // useEffect(() => {
    //     const timeout = setTimeout(() => {
    //         setDebounceValue(isHidden);
    //     }, delay);
        
    //     return () => clearTimeout(timeout);
    // }, [isHidden, delay])

    return (
        <header className={"header-nav"}>
            <div className='header-nav__logo' aria-roledescription="logo">
              <img src='https://beascout.scouting.org/wp-content/uploads/2022/06/BSALogo-1.png' alt="Official logo of the Boy Scouts of America"/>
              <h1 className='header-nav__title'>Boy Scout Troop 227<span>American Legion Post 205</span></h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={`/`}>Home</Link>
                    </li>
                    <li>
                        <Link to={`/projects`}>Projects</Link>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
    
    

}
