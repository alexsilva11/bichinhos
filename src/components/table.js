import React from "react";

function Table(props) {
  return (
    <table className="table table-hover mt-3">
      <thead>
        <tr>
          <th scope="col">Nome</th>
          <th scope="col">Genero</th>
          <th scope="col">Idade</th>
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
}

export default Table;
