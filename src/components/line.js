import React from "react";

function Line(props) {
  return (
    <tr>
      <th scope="row">{props.data.nome}</th>
      <td>{props.data.genero}</td>
      <td>{props.data.idade}</td>
    </tr>
  );
}

export default Line;
