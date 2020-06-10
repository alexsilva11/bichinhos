import React, { useState} from 'react';

function HelloWorld(){
    let [frase, setFrase] = useState("Olá mundo!");

    // let frase = 'Olá Mundo'
    return(
        <>
        <h1>{frase}</h1>
        <button onClick={e => setFrase('Fui Alterado!')}>Alterar Frase</button>
        </>
    )
}

export default HelloWorld