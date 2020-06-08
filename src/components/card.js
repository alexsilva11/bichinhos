import React from "react";

function Card(props) {
  return (
    <div className="card w-1">
      <img
        src={props.data.imagem}
        className="card-img-top"
        height="120px"
        alt="..."
      />
      <div className="card-body text-left">
        <p>Nome: {props.data.nome}</p>
        <p>Idade: {props.data.idade}</p>
        <p>Sexo: {props.data.genero}</p>
      </div>
    </div>
  );
}

export default Card;
