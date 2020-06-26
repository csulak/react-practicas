import React from 'react'

const Formulario = () => {

    const [fruta, setFruta] = React.useState('')
    const [descripcion, setDescripcion] = React.useState('')

    const estadoInicial = [
        {nombreFruta: "banana", descripcionFruta: 'muy dulce'},
        {nombreFruta: "frutilla", descripcionFruta: 'cara'},
        {nombreFruta: "melon", descripcionFruta: 'sandia cheta'},
    ]

    const [lista, setLista] = React.useState(estadoInicial) 


    
    const guradarDatos = (e) => {
        e.preventDefault()


        if(!fruta.trim()){
            console.log("esta Vacio fruta")
            return
        }

        if(!descripcion.trim()){
            console.log("esta Vacio descripcion")
            return
        }


        console.log("procesando datos..." + fruta + " " + descripcion)

        agregarUnElemento()

        e.target.reset()
        setFruta('')
        setDescripcion('')
    }



    const agregarUnElemento = () => {
        console.log('hiciste click')
        setLista(
            [
                ...lista,
                {nombreFruta: fruta, descripcionFruta: descripcion}
            ]
        )
    }









    return (
        <div>
            <h2>Formulario!</h2>
            <form onSubmit= { guradarDatos }>
                <input 
                    type="text"
                    placeholder="Ingrese Fruta"
                    className="form-control mb-2"
                    onChange={ (evento) => setFruta(evento.target.value) }
                />
                <input 
                    type="text"
                    placeholder="Ingrese descripcion"
                    className="form-control mb-2"
                    onChange={ (evento) => setDescripcion(evento.target.value) }
                />
                <button className="btn btn-primary btn-block" type="submit">Agregar</button>
            </form>

            <div>
            <h2> Listas de frutas</h2>
            {
                lista.map( (item, index) => (
                    <h4 key={index}>{item.nombreFruta} - {item.descripcionFruta}</h4>
                ))
            }
            </div>
        </div>
    )
}

export default Formulario
