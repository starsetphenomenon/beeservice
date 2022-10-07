import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Home.css';
import About from '../../components/About/About';
import Advantages from '../../components/Advantages/Advantages';
import Services from '../../components/Services/Services';
import FullContacts from '../../components/FullContacts/FullContacts';

export default function Home() {

  const btnUp = document.querySelector('.btn_up');
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() =>{
    window.onscroll = function (e) {
      console.log(window.scrollY);
      if (window.scrollY >= 1500) {
        btnUp.style.display = "block";
      }else if (window.scrollY < 1500){
        btnUp.style.display = "none";
      }      
    }
  })

function clickBtnUp(){
  window.scrollTo(0, 0);
}

  
  return (
      <div className='pageHome'>
        <div className='btn_up' onClick={clickBtnUp}>
          <h3>▲</h3>
        </div>
        <About children={'Про сервіс'}/>
        <Advantages children={'Наші переваги'}/>
        <Services children={'Послуги'}/>
        <FullContacts children={'Контакти'}/>
      </div>
  )
}