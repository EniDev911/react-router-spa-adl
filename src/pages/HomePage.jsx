import React from 'react';
import tortaPNG from '../assets/torta.png';

const HomePage = () => {
  return (
     <div className="container">
        <h1>Bienvenido a <span className='important'>Happy Cake</span></h1>
        <h5>El lugar de los pasteles felices</h5>
        <div className="box-img">
            <img src={tortaPNG} alt="imagen pastel" />
        </div>
     </div>   
  )
}

export default HomePage