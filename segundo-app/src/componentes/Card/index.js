import React from 'react';
import './style.css';
import imagem from './imagem.jpg';

function Card() {
    return (
        <div className="card-container">
         <h2>Comandos Elétricos</h2>
         <p>Área: Eletricidade</p>
         <p>Carga Horária: 120 horas</p>
         <p>Valor Total: R$ 1.500,00 ou 6 Parcelas de R$ 250,00</p>
         <img src={imagem} id="imagem" alt="imagem"/>
        </div>
    );
}

export default Card;