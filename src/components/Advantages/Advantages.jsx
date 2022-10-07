import React from 'react';
import './Advantages.css';

export default function Advantages({children}) {
  
  return (
    <div className='container'>
      <div className='main'>
        <div className='nameText'>
          <h2>{children}</h2>
        </div>
        <div className='main__block'>
            <div className='block__one'>
                <div className='firstAdvant'>
                  <img src="/img/advantages/time.webp" alt="time" />
                  <p>Це одна з найбільших платформ для підприємців у сфері краси.</p>
                </div>
                <div className='secondAdvant'>
                  <img src="/img/advantages/key.webp" alt="key" />
                  <p>Академія приймає жінок завдяки мобільній платформі 
                    й офлайн-заняттям, щоб навчити їх заробляти.</p>
                </div>
            </div>
            <div className='block__two'>
                <div className='thirdAdvant'>
                  <img src="/img/advantages/work.webp" alt="work" />
                  <p>найбільших платформ для підприємців жінок завдяки мобільній платформі 
                    й офлайн-заняттям, щоб навчити їх заробляти.</p>
                </div>
                <div className='fourthAdvant'>
                  <img src="/img/advantages/diagnostics.webp" alt="diagnostics" />
                  <p>Нова стратегія бренду Avon відходить від стереотипних 
                    стандартів краси, та популяризує свободу вибору, 
                    забезпечуючи якісні продукти за доступними цінами.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}