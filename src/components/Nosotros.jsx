import React, {useEffect, useState} from 'react'

const Nosotros = () => {



    const [equipo, setEquipo] = useState([])


    // el useEffect esta atento a los cambios de estados de los hooks
    useEffect( () => {
        //console.log("use Effect")
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch("https://jsonplaceholder.typicode.com/users")
        const usuarios = await data.json()
        //console.log(usuarios)
        setEquipo(usuarios)
    }


    return (
        <div>
            <h1>Nosotros</h1>
            <ul>
                {
                    equipo.map( item => (
                    <li key={item.id}>{item.name}-{item.userName}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Nosotros
