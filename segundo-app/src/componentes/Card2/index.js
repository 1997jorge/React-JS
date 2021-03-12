import React from 'react';
import './style.css';
import imagem2 from './imagem2.jpg';

function Card2() {
    return (
        <div className="card-container">
         <h2>Soldagem de Manutenção</h2> 
         <p>Área: Metalmecânica - Mecân</p>
         <p>Carga Horária: 60 horas</p>
         <p>Preço: Gratuito</p>
         <img src={imagem2} id="imagem2" alt="imagem2"/>
        </div>
    );
}

export default Card2;