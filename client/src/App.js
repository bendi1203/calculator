import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [displayedInput, setDisplayedInput] = useState(input);
  const [numbers, setNumbers] = useState([]);

  // const handleButtonClick = (value) => {
  //     setInput((prevInput) => prevInput + value);
  // ;}

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const save = async () => {
    await fetch("http://localhost:5000/save", {
      method: "POST",
      body: JSON.stringify({
        value: Number(displayedInput),
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });
  };

  const load = async () => {
    await fetch("http://localhost:5000/load", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        setDisplayedInput(data ? data : "");
      })
      .catch((err) => {
        console.log("error:", err.message);
      });
  };

  const display = (e) => {
    setInput((prevInput) => prevInput + e.target.value);
    setDisplayedInput(
      (prevDisplayedInput) => prevDisplayedInput + e.target.value
    );
  };

  const division = () => {
    console.log("division");
  };

  const multiplication = (e) => {
    setNumbers([...numbers, parseFloat(displayedInput)]);
    setDisplayedInput("");
  };

  const addition = () => {
    console.log("addition");
  };

  const substraction = () => {
    console.log("substraction");
  };

  const calculate = () => {
    const operand1 = numbers[0];
    const operand2 = parseFloat(displayedInput);
  
    if (!isNaN(operand1) && !isNaN(operand2)) {
      const result = operand1 * operand2;
      setDisplayedInput(result.toString());
      setNumbers([]);
    }
  }

  return (
    <div className="calculator">
      <input
        type="text"
        className="input"
        onChange={handleInputChange}
        value={displayedInput}
      ></input>

      <div className="buttons">
        <button
          type="button"
          value="AC"
          className="operation ac"
          onClick={() => setDisplayedInput("")}
        >
          AC
        </button>
        <button
          type="button"
          value="SAVE"
          className="operation save"
          onClick={save}
        >
          SAVE
        </button>
        <button
          type="button"
          value="LOAD"
          className="operation load"
          onClick={load}
        >
          LOAD
        </button>
        <button
          type="button"
          value="/"
          className="operation div"
          onClick={division}
        >
          ÷
        </button>

        <button type="button" value="7" className="number n7" onClick={display}>
          7
        </button>
        <button type="button" value="8" className="number n8" onClick={display}>
          8
        </button>
        <button type="button" value="9" className="number n9" onClick={display}>
          9
        </button>
        <button
          type="button"
          value="*"
          className="operation mul"
          onClick={multiplication}
        >
          ×
        </button>

        <button type="button" value="4" className="number n4" onClick={display}>
          4
        </button>
        <button type="button" value="5" className="number n5" onClick={display}>
          5
        </button>
        <button type="button" value="6" className="number n6" onClick={display}>
          6
        </button>
        <button
          type="button"
          value="-"
          className="operation minus"
          onClick={substraction}
        >
          -
        </button>

        <button type="button" value="1" className="number n1" onClick={display}>
          1
        </button>
        <button type="button" value="2" className="number n2" onClick={display}>
          2
        </button>
        <button type="button" value="3" className="number n3" onClick={display}>
          3
        </button>
        <button
          type="button"
          value="+"
          className="operation plus"
          onClick={addition}
        >
          +
        </button>

        <button type="button" value="0" className="number n0" onClick={display}>
          0
        </button>
        <button
          type="button"
          value="."
          className="number dot"
          onClick={display}
        >
          .
        </button>
        <button
          type="button"
          value="="
          className="equal"
          onClick={calculate}
        >
          =
        </button>
      </div>
    </div>
  );
}

export default App;
