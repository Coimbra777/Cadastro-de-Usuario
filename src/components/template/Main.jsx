import React from "react";
import Header from "./Header";

const Main = (props) => (
  <React.Fragment>
    <Header {...props} />

    <main className="content">Conteúdo</main>
  </React.Fragment>
);

export default Main;
