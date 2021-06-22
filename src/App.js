import Home from "./pages/home/Home"
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/" exact component={Login}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/home" component={Home}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </Router>
  )
}

export default App;
