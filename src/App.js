
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './Pages/Home/Header/Header';
function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header></Header>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
