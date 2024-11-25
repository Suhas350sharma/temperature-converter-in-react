import React, { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(""); // To store the input value
  const [result, setResult] = useState(""); // To store the converted temperature
  const [error, setError] = useState(""); // To show error messages

  // Function to convert Celsius to Fahrenheit
  function convertToFahrenheit() {
    if (isNaN(temperature) || temperature === "") {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      const fahrenheit = (temperature * 9) / 5 + 32;
      setResult(`${fahrenheit.toFixed(2)}°F`);
      setError(""); // Clear any previous error
    }
  }

  // Function to convert Fahrenheit to Celsius
  function convertToCelsius() {
    if (isNaN(temperature) || temperature === "") {
      setError("Please enter a valid number.");
      setResult("");
    } else {
      const celsius = ((temperature - 32) * 5) / 9;
      setResult(`${celsius.toFixed(2)}°C`);
      setError(""); // Clear any previous error
    }
  }

  // Function to reset input and result
  function resetConverter() {
    setTemperature("");
    setResult("");
    setError("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Temperature Converter</h1>

      {/* Input Field */}
      <input
        type="text"
        placeholder="Enter temperature"
        value={temperature}
        onChange={(e) => setTemperature(e.target.value)}
        style={{ padding: "10px", width: "200px", marginBottom: "20px" }}
      />

      <br />

      {/* Buttons */}
      <button onClick={convertToFahrenheit} style={buttonStyle}>
        Convert to °F
      </button>
      <button onClick={convertToCelsius} style={buttonStyle}>
        Convert to °C
      </button>
      <button onClick={resetConverter} style={{ ...buttonStyle, backgroundColor: "red" }}>
        Reset
      </button>

      {/* Display Error */}
      {error && <p style={{ color: "red", marginTop: "20px" }}>{error}</p>}

      {/* Display Result */}
      {result && <p style={{ color: "green", marginTop: "20px", fontSize: "18px" }}>{result}</p>}
    </div>
  );
}

// Simple button style
const buttonStyle = {
  padding: "10px 15px",
  margin: "5px",
  backgroundColor: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
};

export default App;
