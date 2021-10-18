
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Details from './Pages/Details/Details';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/services/:id">
              <Details></Details>
            </Route>

          </Switch>

        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
