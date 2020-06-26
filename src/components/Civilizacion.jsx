import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Civilizacion = () => {

    //console.log(useParams())

    const {id} = useParams()

    const [civilizacion, setCivilizacion] = useState([])

    // el useEffect esta atento a los cambios de estados de los hooks
    useEffect( () => {
        //console.log("use Effect")
        obtenerDatos()
    }, [])
    
    
    const obtenerDatos = async () => {
        const data = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`)
        const civ = await data.json()
        
        console.log(civ)
        setCivilizacion(civ)
    }
    

    return (
        <div>
            <h3>{civilizacion.name}</h3>
            <p>{civilizacion.team_bonus}</p>
        </div>
    )
}

export default Civilizacion
