import React from 'react'

import {useDispatch, useSelector} from "react-redux"
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, pokemonDetalleAccion } from "../redux/pokeDucks"
import Detalle from './Detalle'

const Pokemones = () => {

    //useDispatch sirve para consumir las acciones de los ducks
    const dispatch = useDispatch()


    //useSelector sirve para leer el state del duck (dataInicial)
    // store es el store obvio, pokemones es el nombre que le asigne dentro del combineReducer dentro del store
    const pokemonesArray = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)
    console.log(pokemonesArray)
    
    return (
        <div className="row mt-5">

            <div className="col-md-6">

                <h3>Lista de pokemones</h3>
                
                <ul className="list-group mt-4" >
                    {
                        pokemonesArray.map(item => (
                            <li key={item.name} className="list-group-item text-uppercase">
                                {item.name}
                                <button 
                                    className="btn btn-dark btn-sm float-right"
                                    onClick = { () => dispatch(pokemonDetalleAccion(item.url))}
                                >
                                    Info
                                </button>
                            </li>
                        ))
                    }
                </ul>

            <div className="d-flex justify-content-between">

                {
                    pokemonesArray.length === 0 &&
                        /* recien aca al hacer click se va a disparar la accion y llenar el store */
                        <button onClick={ () => dispatch(obtenerPokemonesAccion())} className="btn btn-dark">Get Pokemones</button>
                }

                {
                    previous &&
                    <button onClick={ () => dispatch(anteriorPokemonAccion())} className="btn btn-dark mt-4">Anterior</button>

                }

                {
                    next && 
                    <button onClick={ () => dispatch(siguientePokemonAccion())} className="btn btn-dark mt-4">Siguiente</button>

                }

            </div>

            </div>
       
            <div className="col-md-6">
                <h3>Detalle Pokemon</h3>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones
