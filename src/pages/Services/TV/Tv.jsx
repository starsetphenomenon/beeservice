import React, {useEffect} from 'react';
import './Tv.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';

export default function Tv({screen, pageName}) {

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
        <img src='./img/services/printer.webp' alt='printer' />
        <p>ghjk,fhnhgnmfndgfhn</p>
    </div>

    <div className='prodList'>

      <div className='nameTable'>
        <p>Послуга</p>
        <p>Ціна</p>
      </div>

      {screen.map((item) => {
        return  <div className='prodTable' key={Date.now() + Math.random() * 10}>
                  <p className='name'>{item.name_printer}</p>
                  <p className='problem'>{item.problem_printer}</p>
                  <p className='price'>{item.price_printer}</p>
                </div>         
      })}

</div>

  </div>
  )
}