import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import HeaderS from './HeaderS'
import HeaderM from './HeaderM'
import HeaderL from './HeaderL'

export default function Header(){


    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
  
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
        console.log(window.innerWidth)
    return(
        <div id='header'>
            {window.innerWidth < 801 ? <HeaderM/> : window.innerWidth < 401 ? <HeaderS/> : <HeaderL/>}

        </div>
    )
}