import axios from "axios"

//constantes
const dataInicial = {
    count: 0,
    next: null,
    previous: null,
    results: [],
}

//types
const OBTENER_POKEMONES_EXITO = "OBTENER_POKEMONES_EXITO"
const SIGUIENTE_POKEMONES_EXITO = "SIGUIENTE_POKEMONES_EXITO"
const ANTERIOR_POKEMONES_EXITO = "ANTERIOR_POKEMONES_EXITO"
const DETALLE_POKEMON_EXITO = "DETALLE_POKEMON_EXITO"

//reducer
export default function pokeReducer(state = dataInicial, action){
    switch(action.type){
        case OBTENER_POKEMONES_EXITO:
            return {
                ...state, 
                ...action.payload
            }
        case SIGUIENTE_POKEMONES_EXITO:
            return{
                ...state,
                ...action.payload
            }
        case ANTERIOR_POKEMONES_EXITO:
            return{
                ...state,
                ...action.payload
            }     
        case DETALLE_POKEMON_EXITO:
            return{
                ...state,
                pokemonDetalle: action.payload
            }                      
        default:
            return state

    }

}


//accciones
export const obtenerPokemonesAccion = () => async(dispatch, getState) => {
//con dispatch vamos a poder activar el reducer

// con getState vamos a poder obtener la dataInicial. pero lo va a retornar mediante la tienda. donde aclaramos que guarde el pokeReducer en pokemones
// y es este pokemones el que va a retornar el getState()

    console.log("get state", getState().pokemones)


    // valido antes de pegarle a la api si lo que quiero obtener no esta guardado en localstorage
    if(localStorage.getItem('offset=0')){
        console.log("datos obtenidos desde localstorage")
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem('offset=0'))
        })
        return
    }

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`)
        
        console.log("datos obtenidos desde la api")
        console.log("que hay aqui",res.data)
        
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: res.data
        })

        //aca guardo en localstorage la info que retorna la api
        localStorage.setItem('offset=0', JSON.stringify(res.data))
    
    } catch (error) {
        console.log(error)
    }
}

//otra accion
export const siguientePokemonAccion = () => async(dispatch, getState) =>{

    const {next} = getState().pokemones

    // valido antes de pegarle a la api si lo que quiero obtener no esta guardado en localstorage
    if(localStorage.getItem(next)){
        console.log("datos obtenidos desde localstorage")
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(next))
        })
        return
    }

    try {

        console.log("datos obtenidos desde la api")
        
        const res = await axios.get(next)
        dispatch({
            type: SIGUIENTE_POKEMONES_EXITO,
            payload: res.data

        })

        //aca guardo en localstorage la info que retorna la api
        localStorage.setItem(next, JSON.stringify(res.data))        

    } catch (error) {
        console.log(error)
    }
}


//otra accion
export const anteriorPokemonAccion = () => async(dispatch, getState) =>{

    const {previous} = getState().pokemones

        // valido antes de pegarle a la api si lo que quiero obtener no esta guardado en localstorage
    if(localStorage.getItem(previous)){
        console.log("datos obtenidos desde localstorage")
        dispatch({
            type: OBTENER_POKEMONES_EXITO,
            payload: JSON.parse(localStorage.getItem(previous))
        })
        return
    }

    try {
    
        console.log("datos obtenidos desde la api")

        const res = await axios.get(previous)
        dispatch({
            type: ANTERIOR_POKEMONES_EXITO,
            payload: res.data

        })

        //aca guardo en localstorage la info que retorna la api
        localStorage.setItem(previous, JSON.stringify(res.data))           

    } catch (error) {
        console.log(error)
    }
}

export const pokemonDetalleAccion = (url= 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) => {

    if(localStorage.getItem(url)){
        console.log("datos obtenidos desde localstorage")

        dispatch({
            type: DETALLE_POKEMON_EXITO,
            payload: JSON.parse(localStorage.getItem(url))
        })

        return
    }

    try {
        const res = await axios.get(url) 
        console.log("datos obtenidos desde la api")
        console.log("detalle del pokemon", res.data)
        dispatch({
            type: DETALLE_POKEMON_EXITO,
            payload: {
                nombre: res.data.name,
                ancho: res.data.weight,
                alto: res.data.height,
                foto: res.data.sprites.front_default
            }
     
        })
        //aca guardo en localstorage la info que retorna la api
        localStorage.setItem(url, JSON.stringify({
            nombre: res.data.name,
            ancho: res.data.weight,
            alto: res.data.height,
            foto: res.data.sprites.front_default            
        }))
        
    } catch (error) {
        console.log(error)
    }

}