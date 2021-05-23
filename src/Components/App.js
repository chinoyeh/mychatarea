import React from 'react'
import Login from './Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signup from './Signup'
const App = () => {
    return (
        <div>
            <Router>
<Switch>
<Route exact path='/'>
<Login/>
</Route>
<Route exact path ='/signup' >
    <Signup/>
</Route>
</Switch>
</Router>
         
        </div>
    )
}

export default App;
