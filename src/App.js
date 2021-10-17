
import './App.css';
import AuthProvider from './AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <h3>this is something</h3>
      </AuthProvider>
    </div>
  );
}

export default App;
