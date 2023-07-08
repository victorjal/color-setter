import { useState } from 'react';
import './App.css';
import Button from "./Button";

function App() {

  const [color, setColor] = useState({ text: 'Elige un color', code: '#000000' });

  function changeColor(params) {
    console.log(params);
    setColor({ text: params.text, code: params.code });
  }

  return (
    <div className="App">
      <Text title={color.text} code={color.code}/>
      <Button title="Amarillo" handleClick={() => changeColor({ text: 'Amarillo', code: '#ffcc00' })}/>
      <Button title="Azul" handleClick={() => changeColor({ text: 'Azul', code: '#0033cc' })}/>
      <Button title="Rojo" handleClick={() => changeColor({ text: 'Rojo', code: '#cc0000' })}/>
    </div>
  );
}

function Text(props) {
  const styles = {
    color: props.code
  };

  return (
    <h1 style={styles}>{props.title}</h1>
  );
}


export default App;
