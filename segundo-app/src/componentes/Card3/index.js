import React from 'react';
import './style.css';
import imagem3 from './imagem3.jpg';

function Card3() {
    return (
        <div className="card-container">
        <h2>Mecânico de Motor Ciclo Diesel</h2> 
         <p>Área: Reparação</p>
         <p>Carga Horária: 180 horas</p>
         <p>Preço: Gratuito</p>
         <img src={imagem3} id="imagem3" alt="imagem3"/>
        </div>
    );
}

export default Card3;