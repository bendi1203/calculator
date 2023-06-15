import './App.css';

function App() {
  return (
    <div className="calculator">

        <input type="text" className="input"></input>
        
        <div className="buttons">
            <button type="button" value="AC" className="operation ac">AC</button>
            <button type="button" value="MC" className="operation mc">MC</button>
            <button type="button" value="MS" className="operation ms">MS</button>
            <button type="button" value="/" className="operation div">÷</button>

            <button type="button" value="7" className="number n7">7</button>
            <button type="button" value="8" className="number n8">8</button>
            <button type="button" value="9" className="number n9">9</button>
            <button type="button" value="*" className="operation mul">×</button>
            
            <button type="button" value="4" className="number n4">4</button>
            <button type="button" value="5" className="number n5">5</button>
            <button type="button" value="6" className="number n6">6</button>
            <button type="button" value="-" className="operation minus">-</button>

            <button type="button" value="1" className="number n1">1</button>
            <button type="button" value="2" className="number n2">2</button>
            <button type="button" value="3" className="number n3">3</button>
            <button type="button" value="+" className="operation plus">+</button>
            
            <button type="button" value="0" className="number n0">0</button>
            <button type="button" value="." className="number dot">.</button>
            <button type="button" value="=" className="equal">=</button>
        </div>
    </div>
  );
}

export default App;