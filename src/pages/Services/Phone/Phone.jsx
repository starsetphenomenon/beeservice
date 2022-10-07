import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Phone.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

export default function Phone({phone, book, navi, tablet, pageName}) {

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

    <h2 id='phone-tablet'>{pageName}</h2>

    <div className='infoBox'>
        <img src='./img/services/phone.webp' alt='phone' />
        <p>jmfjhkhjgkgjhkhjkghk</p>
    </div>

    <div className='prodList'>

      <div className='nameTable'>
        <p>Послуга</p>
        <p>Ціна</p>
      </div>

      <div className='nameTitle'>
        <h2>Телефони</h2>
      </div>
      {phone.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `phone`}>
                  <p className='name'>{item.name_phone}</p>
                  <p className='price'>{item.price_phone}</p>
                </div>         
      })}
      <div className='nameTitle'>
        <h2>Планшети</h2>
      </div>
      {tablet.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `tablet`}>
                  <p className='name'>{item.name_tablet}</p>
                  <p className='price'>{item.price_tablet}</p>
                </div>         
      })}
      <div className='nameTitle'>
        <h2>Електронні книжки</h2>
      </div>
      {book.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 3 + `book`}>
                  <p className='name'>{item.name_book}</p>
                  <p className='price'>{item.price_book}</p>
                </div>         
      })}
      <div className='nameTitle'>
        <h2>Навігатори</h2>
      </div>
      {navi.map((item) => {
        return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 4 + `navi`}>
                  <p className='name'>{item.name_navi}</p>
                  <p className='price'>{item.price_navi}</p>
                </div>         
      })}

</div>

  </div>
  )
}