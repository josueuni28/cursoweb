import React from 'react';
import ReactDOM from 'react-dom/client';
import Primeiro from './components/Primeiro'; // Importando o Componente criado
/* OBS: Componentes personalizados devem ter o nome com a Primeira letra Maúscula, para que o React
   na hora da conversão do jsx, saiba diferenciar um Componente de uma elemento DOM, por exemplo */

import BomDia from './components/BomDia';
import Multiplos, { Pergunta1 } from './components/Multiplos';
/* Da forma como foi exportado os Componentes no 'Multiplos', você pode acessar com o destructuring
   ou pegar o Objeto que foi 'gerado' no 'export default {}', nesse caso colocamos o nome
   de 'Multiplos', mas pode ser qualquer nome */

import Saudacao from './components/Saudacao';
import Saudacao2 from './components/Saudacao2';

import Pai from './components/Pai';

import Pai2 from './components/Pai2';
import Filho from './components/Filho';


import reportWebVitals from './reportWebVitals';

// Armazenando o elemento da DOM em um 'Root' do React para ser usado posteriormentee
const root = ReactDOM.createRoot(document.getElementById('root'));

// Passando o componente criado para a renderizer no elemento 'root' do index.html
root.render(
  <>
    <Primeiro />
    <BomDia nome="Josué" />
    <br />
    <Pergunta1 nome="Alice" />
    <br />
    <Multiplos.Pergunta2 nome="Paloma" />
    <hr />
    <Saudacao tipo="Bom Dia" nome="Jorge" />
    <hr />
    <Saudacao2 tipo="Bom Tarde" nome="Camila" />
    <hr />
    <Pai nome="Luiz" sobrenome="Guimarões" />
    <hr />
    <Pai2 nome="Cesar" sobrenome="Oasis">
      <Filho nome="Augusto"/>
      <Filho nome="Lorena"/>
    </Pai2>
  </>
);

/* Pode ser feito assim também */
// ReactDOM.render( <Primeiro />, document.getElementById('root') )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
