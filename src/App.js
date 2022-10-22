import logo from './img/aspen_transparent.png';
import stars1 from './img/stars1.png'
import stars2 from './img/stars2.png'
import Block from './Block';
import './App.css';

function App() {
  return (
    <div className="App">

      <br />
      <br />
      <br />

      <div className="headers">
        <header className="App-header">
          JAMES BAKER
        </header>
        <div className="App-header2">
        cooking up amazing things
        </div>
      </div>   

      <br />
      <br />
      <br />

      <div className="doodles">
        <img src={stars1} width="225" height="60" alt="logo" />
        <img src={logo} className="App-logo" width="50" height="60" alt="logo" />
        <img src={stars2} width="225" height="60" alt="logo" />
      </div>
      
      <br />
      <br />

      <Block />

    </div>
  );
}

export default App;
