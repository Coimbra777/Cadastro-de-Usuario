import React from "react";
import Main from "../template/Main";

const Home = () => {
  return (
    <Main icon="home" title="Início" subtitle="Projeto Usando React">
      <div className="display-4">Bem Vindo!</div>
      <hr />
      <p className="mb-0">
        Sistema para exemplificar a construção de um cadastro desenvolvido com
        React
      </p>
    </Main>
  );
};
export default Home;
