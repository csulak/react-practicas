import React from 'react'

const Contador = () => {

    //IDEM anotaciones en Eventos.jsx
    
    const [contador, setContador] = React.useState(4)


    //lo unico para destacar aca es como se maneja es setContador dentro de la funcion lambda aumentador para ir seteando su estado
    const aumentador = () => {
        console.log("cick al darle aumentar")
        setContador(contador + 1)

    }

    return (
        <div>
            <h2>Contador!</h2>
            <h3>Nuestro numero aumentando: {contador}</h3>
            <h4>
                {
                    contador > 20 ? 'Es Mayor a 20' : ' Es Menor a 20'
                }
            </h4>
            <button onClick= {() => aumentador()}> Aumentar</button>
        </div>
    )
}

export default Contador
