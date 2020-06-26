import React from 'react';
import Pokemones from './components/Pokemones';
import Login from './components/Login';
import Perfil from './components/Perfil';
import Navbar from './components/Navbar';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

import {auth} from "./firebase"

function App() {

  const [fireBaseUser, setFireBaseUser] = React.useState(false)

  React.useEffect( () => {
    
    const fetchUser = () => {
      //aca genero el logueo del usuario de firebase para poder conectarme a todo el backend de firebase
      auth.onAuthStateChanged( user => {
        console.log("user de authStateChanged() " , user)
        if(user){
          setFireBaseUser(user)
        }else{
          setFireBaseUser(null)
        }
      })
    }
      fetchUser()
    }, [])


    const RutaPridava = ({component, path, ...rest}) => {
      
      if(localStorage.getItem('usuario')){
        const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'))

        // aca valido si el usuario guardado en localstorage coincide con el usuario guardado en firebase
        //esta doble validacion se hace para evitar hackeos
        if(usuarioGuardado.uid === fireBaseUser.uid){
          return <Route component={component} path={path} {...rest}/>

        }else{
          return <Redirect to="/login" {...rest} />
        }

      }else{
        return <Redirect to="/login" {...rest} />
      }


    }


  return fireBaseUser !== false ? (
    <Router>
      <div className="container mt-3">

        <Navbar />

        <Switch>
          <RutaPridava component={Pokemones} path="/" exact />
          <RutaPridava component={Perfil} path="/perfil" exact />
          <Route component={Login} path="/login" exact />
        </Switch>

      </div>


    </Router>
  ) : (<div>Cargando...</div>)
}

export default App;
