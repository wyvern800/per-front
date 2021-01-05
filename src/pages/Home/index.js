import React from "react";

import AutoComplete from "../../assets/components/AutoComplete";
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
import box01 from '../../assets/box-01.jpg';
import box02 from '../../assets/box-02.jpg';
// import { Container } from './styles';

export default function Home() {
  return (
    <>
<div className="box-home">
    <div className="box-text">
      <h1>Título</h1>
      <p>Parágrafo</p>
    </div>
</div>
      <div className="d-flex flex-row justify-content-center">
        <AutoComplete />
      </div>
      <div  className="d-flex justify-content-center">
  </div>
    </>
  );
}
