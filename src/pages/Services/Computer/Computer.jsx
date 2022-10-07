import React, { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import './Computer.css';
import ServiceMenu from '../../../components/ServiceMenu/ServiceMenu';


export default function Computer({computer, laptop, pageName, ...prop }) {

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

        <div className=''></div>

        <h2 id='computer-laptop'>{pageName}</h2>

            <div className='infoBox'>
                <img src='/img/services/computer.webp' alt='computer' />
                <p>dfgdfgdfgdfg</p>
            </div>

            <div className='prodList'>

              <div className='nameTable'>
                <p>Послуга</p>
                <p>Ціна</p>
              </div>

              <div className='nameTitle'>
                <h2>Комп'ютери</h2>
              </div>
              {computer.map((item) => {
                return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 1 + `comp`}>
                          <p className='name'>{item.name_computer}</p>
                          <p className='price'>{item.price_computer}</p>
                        </div>         
              })}
              <div className='nameTitle'>
                <h2>Ноутбуки</h2>
              </div>
              {laptop.map((item) => {
                return  <div className='prodTable' key={Date.now() + (Math.random() * 10) / 2 + `laptop`}>
                          <p className='name'>{item.name_laptop}</p>
                          <p className='price'>{item.price_laptop}</p>
                        </div>         
              })}
            </div>
    
      </div>
        
    );
}





// export default function Computer({children, ...props}) {
  
//   return ( 
//     <div className='mainPageServ'>

//     <h1 {...props}>Computer {children}</h1>
    
//     </div>
//   )
// }