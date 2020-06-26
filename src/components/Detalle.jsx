import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import {pokemonDetalleAccion} from "../redux/pokeDucks"


const Detalle = () => {

    //useDispatch sirve para consumir las acciones de los ducks
    const dispatch = useDispatch()

    React.useEffect( () => {

        const fetchData = () =>{
            // con el dispatch estamos llamando a la accion una vez que se levanta el componente
            dispatch(pokemonDetalleAccion())
        }

        fetchData()
    }, [dispatch])

    const pokemon = useSelector(store => store.pokemones.pokemonDetalle)


    //al dejarle los corchetes indicamos que se va a llamar una vez la funcion. si no entendi mal si le ponemos hooks (parametros) dentro del los corchetes
    // va a ejecutarse cada vez que esos hooks sufran modificaciones

    return pokemon ? (
        <div className="card mt-4 text-center">
            <div className="card-body">
                <img src= {pokemon.foto} className="img-fluid" alt=""/>
                <div className="card-title text-uppercase">{pokemon.nombre}</div>
                <p className="card-text">Alto: {pokemon.alto} | Ancho: {pokemon.ancho}</p>
            </div>
        </div>
    ) : null
}

export default Detalle
