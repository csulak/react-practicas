import React from 'react'

const Variables = () => {

// En este ejemplo se muestra como manejar las variables dentro de nuestro codigo html 
// (div, h2, img. OJO no es propiamente html sino que react lo interpreta como tal) 
// hay que poner entre llaves { variable } y listo


    const saludo = "Hola desde constante"
    const imagen = "https://www.movilzona.es/app/uploads/2018/10/app-foto-movimiento.jpg?x=810"

    return (
        <div>
            <h2>Nuevo Componente {saludo}</h2>
            <img src= {imagen} alt="" />
        </div>
    )
}

export default Variables
