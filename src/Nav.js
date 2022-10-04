import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {

  const[show,handlShow]=useState(false);
  const transitionNavBar= () =>{
    if(window.scrollY>100){
        handlShow(true);
    }else{
        handlShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return () => window.removeEventListener("scroll",transitionNavBar);

  },[])
  return (
    <div className={`Nav ${show && "nav__black"}`}>
        <div className="nav_contents">
            <img className='nav_logo'
                src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="" />
            <img className='nav_avatar' 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" />
            

        </div>    
    </div>
  )
}

export default Nav