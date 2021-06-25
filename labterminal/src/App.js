import logo from './logo.svg';
import './App.css';
import Topbar from './Components/Topbar'
import LoginPage from './Components/LoginPage'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import LandingPage from './Components/Landingpage';

function App() {
  return (
    <Router>
      <div>
        <h1>MY App</h1>
        <Topbar />
        <Switch>
          <Route to="/login" component={LoginPage} />
          <Route to="/" exact component={LandingPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
