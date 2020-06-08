import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/nav";
import Card from "./components/card";
import Table from "./components/table";
import Line from "./components/line"

function App() {
  const bichinhos = [
    {
      nome: "Will",
      idade: "9 anos",
      genero: "Macho",
      imagem: "will.jpg",
    },
    {
      nome: "Rex",
      idade: "12 anos",
      genero: "Macho",
      imagem:
        "https://statig2.akamaized.net/bancodeimagens/4t/w0/2j/4tw02ja6mhzuvzpk3sljmsto3.jpg",
    },
    {
      nome: "Bethoven",
      idade: "3 anos",
      genero: "Macho",
      imagem:
        "https://www.infoescola.com/wp-content/uploads/2010/09/s%C3%A3o-bernardo_143925274.jpg",
    },
    {
      nome: "Belinha",
      idade: "1 ano",
      genero: "Fêmea",
      imagem: "https://jornalbomdia.com.br/tb_noticias/17912/fox.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="row">
          {bichinhos.map((bichinhos) => (
            <div className="col-3">
              <Card data={bichinhos} key={bichinhos.nome} />
            </div>
          ))}
        </div>
        <Table>
          {bichinhos.map((pet) => (
            <Line data={pet} key={pet.nome} />
          ))}
        </Table>
      </div>
    </div>
  );
}

export default App;
