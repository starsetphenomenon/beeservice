import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Audio.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

export default function Audio({audio, pageName}) {

  const titleName = document.getElementById('title');
  const url = window.location.href;
  const namePage = url.split('/')[3];

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    if(titleName === namePage){
      document.title = titleName.innerText;
    }
  });
  

  return (
    <div className='copmPage'>

    <ServiceMenu />

    <h2 id='title'>{pageName}</h2>

    <div className='infoBox'>
        <img src='./img/services/printer.webp' alt='printer' />
        <p>ghjk,fhnhgnmfndgfhn</p>
    </div>

    <div className='prodList'>

      <div className='nameTable'>
        <p>Послуга</p>
        <p>Ціна</p>
      </div>
      <div className='nameTitle'>
        <h2>Аудіосистеми</h2>
      </div>
      {audio.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `audio`}>
                  <p className='name'>{item.name_audio}</p>
                  <p className='price'>{item.price_audio}</p>
                </div>         
      })}

    </div>

  </div>
  )
}