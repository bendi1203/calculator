import "./App.css";
import React, { useState } from "react";

function App() {
  const [input, setInput] = useState("");
  const [displayedInput, setDisplayedInput] = useState(input);
  const [numbers, setNumbers] = useState([]);
  const [operator, setOperator] = useState(null);

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleOperation = (operation) => {
    setOperator(operation);
    setNumbers([...numbers, parseFloat(displayedInput)]);
    setDisplayedInput("");
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
    const value = e.target.value;
    if (value === "-" && !displayedInput) {
      setDisplayedInput("-");
    } else if (value !== "-") {
      setInput((prevInput) => prevInput + value);
      setDisplayedInput((prevDisplayedInput) => prevDisplayedInput + value);
    }
  };

  const division = () => {
    handleOperation("/");
  };

  const multiplication = (e) => {
    handleOperation("*");
  };

  const addition = () => {
    handleOperation("+");
  };

  const subtraction = () => {
    if (!displayedInput) {
      setDisplayedInput("-");
    } else {
      handleOperation("-");
    }
  };

  const calculate = () => {
    const operands = [...numbers, parseFloat(displayedInput)];
    let result = 0;

    if (operator === "*") {
      result = 1;
      operands.forEach((operand) => {
        if (!isNaN(operand)) {
          result *= operand;
        }
      });
    } else if (operator === "/") {
      result = operands[0];
      for (let i = 1; i < operands.length; i++) {
        const operand = operands[i];
        if (!isNaN(operand) && operand !== 0) {
          result /= operand;
        } else {
          console.log("Divisor is 0 or not a number!");
          return;
        }
      }
    } else if (operator === "+") {
      result = 0;
      operands.forEach((operand) => {
        if (!isNaN(operand)) {
          result += operand;
        }
      });
    } else if (operator === "-") {
      result = operands[0];
      for (let i = 1; i < operands.length; i++) {
        const operand = operands[i];
        if (!isNaN(operand) && operand !== 0) {
          result -= operand;
        }
      }
    }

    setDisplayedInput(result.toString());
    setNumbers([]);
    setOperator(null);
  };

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
          onClick={subtraction}
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
        <button type="button" value="=" className="equal" onClick={calculate}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
