import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Login from './components/Login';
import Admin from './components/Admin';

import {auth} from "./firebase"
import Reset from './components/Reset';

function App() {

  const [fireBaseUser, setFireBaseUser] = React.useState(false)

  React.useEffect( () => {

    //aca genero el logueo del usuario de firebase para poder conectarme a todo el backend de firebase
    auth.onAuthStateChanged( user => {
      console.log(user)
      if(user){
        setFireBaseUser(user)
      }else{
        setFireBaseUser(null)
      }
    })
  },[])

  return fireBaseUser !== false ? (
    <Router>
      <div className="container">
        
        <Navbar fireBaseUser={fireBaseUser}/>
        
        <Switch>


            <Route path="/login">
              <Login />
            </Route>

            <Route path="/admin">
              <Admin />
            </Route>

            <Route path="/reset">
              <Reset />
            </Route>
            
            <Route path="/">
              inicio...
            </Route>

        </Switch>
      </div>


    </Router>
  ) : (
    <p>Loading...</p>
  )
}

export default App;
