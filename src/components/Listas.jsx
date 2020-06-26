import React, {useState} from 'react'

const Listas = () => {

    const estadoInicial = [
        {id: 1, text: 'tarea1'},
        {id: 2, text: 'tarea2'},
        {id: 3, text: 'tarea3'},
    ]

    const [lista, setLista] = useState(estadoInicial) 

    const agregarUnElemento = () => {
        console.log('hiciste click')
        setLista(
            [
                ...lista,
                {id: 4, text: "tarea 4!"}
            ]
        )
    }


    return (
        <div>
            <h2> Listas</h2>
            {
                lista.map( (item) => (
                    <h4 key={item.id}>{item.text}</h4>
                ))
            }
            <button onClick={() => agregarUnElemento()}>Agregar</button>
        </div>
    )
}

export default Listas
