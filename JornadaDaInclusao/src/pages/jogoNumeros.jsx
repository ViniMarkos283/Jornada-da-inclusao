import React from 'react'
import { DropBox } from '../components/jogoNumeros/DropBox'
import { NumberBox } from '../components/jogoNumeros/NumberBox'
import { Random } from '../hooks/Random.jsx'
import classes from '../assets/styles/jogoNumeros.module.css'

function Populate(n) {
    let numbers = [];

    for (let i = 0; i < n; i++) {
        numbers.push(i);
    }

    return Random(numbers);
}

export default function JogoNumeros() {
    // Quantidade de elementos a serem gerados
    const elements = Populate(10);
    const listElements = elements.map(element =>
        <NumberBox key={elements.indexOf(element)} value={element} />
    );

    return (
        <>
            <div className={classes.container}>
                <h1>Jogo dos Números</h1>
                <p>Arraste os números para cima na sequência correta.</p>
                <DropBox />
                <div className={classes.numberGrid}>
                    {listElements}
                </div>
            </div >
        </>
    )
}