import React, { useState, useEffect, Fragment } from "react";
import api from "./services/api";

import Home from "./routes/Home";
import About from "./routes/About";

import { Navbar, Nav } from "react-bootstrap";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { withRouter, Match } from "react-router";

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

  async function handleAddProject() {
    // copia os valores antigos dos projetos com spread (...projects)
    //setProjects([...projects, `Novo projeto ${Date.now()}`]);

    const response = await api.post("characters", {
      title: `Novo projeto ${Date.now()}`,
      owner: "biker",
    });
    //console.log(projects);
    const character = response.data; // dados provenientes da response

    setCharacters([...characters, character]);
  }

  const Header = (props) => {
    const { location } = props;
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>Godzamy</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav activeKey={window.location.pathname}>
            <Link to ="/">Home</Link>
            <Link to ="/about">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  };

  const HeaderWithRouter = withRouter(Header);

  // Com o mesmo nome do arquivo
  return (
    <>
      <Router>
          <HeaderWithRouter />
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
