import logo from './logo.svg';
import './App.css';

function App() {
  let current_time = (new Date()).toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Current Time:
        </p>
        <h3>{current_time}</h3>
      </header>
    </div>
  );
}

export default App;
