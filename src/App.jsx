import React, {useState} from 'react';
import shortid from 'shortid';

function App() {

  const [tarea, setTarea] = useState('')
  const [listaTareas, setListaTareas] = useState([])
  const [modoEdicion, setModoEdicion] = useState(false)
  const [idModificado, setIdModificado] = useState('')
  const [error, setError] = useState(null)

const agregarTarea = e => {
  // esto se pone para que no refresque la pagina al darle click al boton agregar
  e.preventDefault()


  if(!tarea.trim()){
    console.log("elemento vacio")
    setError("escriba algo por favor!")
    return
  }
  console.log(tarea)


  setListaTareas([
    ...listaTareas,
    {idTarea: shortid.generate(), nombreTarea:tarea}
  ])

  setTarea('')
  setError(null)
}


const eliminarTarea = (idDeLaTarea) => {
  console.log("id de la tarea a la eliminar :" + idDeLaTarea)

  const arrayFiltrado = listaTareas.filter(item => item.idTarea !== idDeLaTarea)

  setListaTareas(arrayFiltrado)

}

const editar = (item) =>{
  console.log(item)
  setModoEdicion(true)
  setTarea(item.nombreTarea)
  setIdModificado(item.idTarea)
}


const editarTarea = e => {
  // esto se pone para que no refresque la pagina al darle click al boton agregar
  e.preventDefault()


  if(!tarea.trim()){
    setError("escriba algo por favor guachoo!")
    return
  }



  const arrayEditado = listaTareas.map(
      item => item.idTarea === idModificado ? {idTarea: idModificado, nombreTarea:tarea} : item
    )

  setListaTareas(arrayEditado)

  setModoEdicion(false)
  setTarea('')
  setIdModificado('')
  setError(null)

}

  return (
    <div className="container mt-5">
      <h1 className="text-center"> crud simple!</h1>
      <hr />
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de tareas</h4>
          <ul className="list-group">
            {

              listaTareas.length === 0 ? (
                <li className="list-group-item">No hay tareas</li>
              ) : (

                    listaTareas.map( item => (
                      <li className="list-group-item" key={item.idTarea}>
                        <span className="lead">{item.nombreTarea}</span>
      
      
                        <button 
                          className="btn btn-danger btn-sm float-right mx-2"
                          onClick={() => eliminarTarea(item.idTarea)}
                        >
                          Eliminar
                        </button>
      
      
                        <button 
                          className="btn btn-warning btn-sm float-right"
                          onClick={ () => editar(item)}
                        >
                          Editar
                        </button>
                      
                      </li>
      
                    ))
              
                  )


            }
          
          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">
          {
            modoEdicion ? 'Editar Tarea' : 'Agregar Tarea'
          }
        </h4>
        <form onSubmit={modoEdicion ? editarTarea : agregarTarea}>

          {
            error ? <span className="text-danger">{error}</span> : null
          }

          <input
            type="text"
            className="form-control mb-2"
            placeholder="ingrese la tarea" 
            onChange= { event => setTarea(event.target.value)}
            value={tarea}
          />

          {
            modoEdicion ? (
              <button className="btn btn-warning btn-block" type="submit">Editar</button>
            ) : (
              <button className="btn btn-dark btn-block" type="submit">Agregar</button>
            )
          }



        </form>
        </div>
      </div>
    </div>
  );
}

export default App;
