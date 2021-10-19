
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home/Home';
import Header from './Pages/Home/Header/Header';
import Details from './Pages/Details/Details';
import Login from './Pages/Home/Login/Login'
import Register from './Pages/Home/Register/Register';
import Footer from './Pages/Home/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Appionment from './Pages/Appionment/Appionment';
import Doctors from './Pages/Doctors/Doctors';
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
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>
            <PrivateRoute path="/services/:id">
              <Details></Details>
            </PrivateRoute>
            <PrivateRoute path="/appoinment">
              <Appionment></Appionment>
            </PrivateRoute>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
