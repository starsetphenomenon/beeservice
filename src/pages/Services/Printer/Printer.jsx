import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Printer.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

export default function Printer({printer, cartridge, pageName}) {

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
        <h2>Принтери</h2>
      </div>
      {printer.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `printer`}>
                  <p className='name'>{item.name_printer}</p>
                  <p className='problem'>{item.problem_printer}</p>
                  <p className='price'>{item.price_printer}</p>
                </div>         
      })}
      <div className='nameTitle'>
        <h2>Катриджі</h2>
      </div>
      {cartridge.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `cartridge`}>
                  <p className='name'>{item.name_cartridge}</p>
                  <p className='price'>{item.price_cartridge}</p>
                </div>         
      })}
</div>

  </div>
  )
}