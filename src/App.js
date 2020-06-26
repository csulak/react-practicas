import React from 'react';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';

function App() {
  return (
    <div className="container mt-5">
      <h1>Proyecto desde 0</h1>
      <Saludo persona="Ignacio" edad={25} />
      <Saludo persona="Lucas" edad={50}/>
      <Saludo persona="Maru" edad={51}/>
      <hr />
      <h3>Cajita de comentarios</h3>
      <Comentario
        media="https://picsum.photos/64"
        nombre="Lucas!"
        comentario="estoy aprendiendo react y react native :)"
      />

      <Comentario
        media="https://picsum.photos/64"
        nombre="Maru"
        comentario="Ojala sea muy feliz conmigo !!!"
      />

      <Comentario
        media="https://picsum.photos/64"
        nombre="Facu!"
        comentario="Quiero aprender ingles"
      />
    </div>
  );
}

export default App;
