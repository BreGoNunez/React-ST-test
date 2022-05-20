import logo from './logo.svg';
import { InlineShareButtons } from 'sharethis-reactjs';
import {config} from './components/InlineShareButtonsConf'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
<h2>De vuelta al primer commit</h2>
        <InlineShareButtons config={config}/>
      </header>
    </div>
  );
}

export default App;
