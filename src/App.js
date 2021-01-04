import React, { useState, useEffect } from "react";
import { BrowserRouter } from 'react-router-dom';
import api from "./services/api";

import Header from "./assets/components/Header"

import Routes from './routes';

import "./App.css";

function App() {
  // useState retorna um tipo (nesse caso: array) com 2 posições

  // 1. Variável com seu valor inicial (projects)
  // 2. Função para atualizarmos esse valor (setProjects)
  // 3 - no useState(); devemos inicializá-lo com o mesmo tipo da informação (nesse caso: array), poderia ser {}
  const [characters, setCharacters] = useState([]);

  // useEffect tem 2 parametros

  // 1. Qual função eu quero disparar
  // 2. Quando eu quero disparar essa função

  /**   Se eu quisesse que essa ação fosse disparada toda vez que a variavel projects tivesse o valor alterado
   * eu usaria useEffect(() =>{}, [projects]); Caso eu quisesse que ela seja disparada apenas uma vez, eu deixo o array vazio
   * useEffect(() =>{}, []);
   *
   * Esse array é conhecido como um array de dependencias, nele a gente vai incluir principalemnte as variáveis que a gente utiliza
   * dentro dessa primeira função. Pois obrigatoriamente e provavelmente se eu estiver usandu uma variavel dentro do primeiro parâmetro
   * do useEffect (a arrow function), eu quero dizer que quando essa variável for alterada, eu quero que execute essa função novamente
   */
  useEffect(() => {
    api.get("characters").then((response) => {
      //quando obtermos a resposta, then executa o que tá dentro da arrow function, nesse caso, log
      setCharacters(response.data);
    });
  }, []);

  // Com o mesmo nome do arquivo
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
