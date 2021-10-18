
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './Pages/Home/Home/Home';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Home></Home>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
