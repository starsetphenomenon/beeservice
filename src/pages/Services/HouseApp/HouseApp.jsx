import React, {useEffect} from 'react';
import './HouseApp.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

export default function HouseApp({homeequip, pageName}) {

  // let titleName = document.getElementById('title');

  // useEffect(() => {
  //   console.log(titleName.innerText);
  //   // document.title = titleName.innerText;
  // });
  
  return (
    <div className='copmPage'>

    <ServiceMenu />

    <h2 id='title'>{pageName}</h2>

    <div className='infoBox'>
        <img src='./img/services/homeequip.webp' alt='homeequip' />
        <p>dfgdfgdfgdfg</p>
    </div>

    <div className='prodList'>

      <div className='nameTable'>
        <p>Послуга</p>
        <p>Ціна</p>
      </div>

      {/* {homeequip.map((item) => {
        return  <div className='prodTable' key={item.id}>
                  <p className='name'>{item.name}</p>
                  <p className='price'>{item.price}</p>
                </div>         
      })} */}

    </div>

  </div>
  )
}