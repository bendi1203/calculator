import './App.css';

function App() {
  return (
    <div className="calculator">

        <input type="text" className="input"></input>
        
        <div className="buttons">
            <button type="button" value="+">+</button>
            <button type="button" value="-">-</button>
            <button type="button" value="*">*</button>
            <button type="button" value="/">/</button>

            <button type="button" value="7">7</button>
            <button type="button" value="8">8</button>
            <button type="button" value="9">9</button>
            
            <button type="button" value="4">4</button>
            <button type="button" value="5">5</button>
            <button type="button" value="6">6</button>

            <button type="button" value="1">1</button>
            <button type="button" value="2">2</button>
            <button type="button" value="3">3</button>

            <button type="button" value="0">0</button>
            <button type="button" value=".">.</button>
            <button type="button" value="AC">AC</button>

            <button type="button" className="btn equal" value="=">=</button>
        </div>
    </div>
  );
}

export default App;
