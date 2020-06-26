import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

const Civilizaciones = () => {
    const [civilizaciones, setCivilizaciones] = useState([])


    // el useEffect esta atento a los cambios de estados de los hooks
    useEffect( () => {
        //console.log("use Effect")
        obtenerDatos()
    }, [])


    const obtenerDatos = async () => {
        const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations")
        const civs = await data.json()
        //console.log(usuarios)
        setCivilizaciones(civs.civilizations)
    }


    return (
        <div>
            <h1>Civilizaciones</h1>
            <ul>
                {
                    civilizaciones.map( item => (
                        <li key={item.id}>
                                <Link to={`civilizacion/${item.id}`}>
                                {item.name}-{item.expansion}
                            </Link>
                        </li>    
                    ))
                }
            </ul>
        </div>
    )
}



export default Civilizaciones
