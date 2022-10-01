import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [title, setTitle] = useState("Algum titulo");
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if (counter === 10) {
      setTitle("Aulas Encerradas");
    }
  }, [counter]);

  const handleTitle = () => {
    if (title === "Algum titulo") {
      setTitle("Novo Title");
    } else if (title === "Novo Title") {
      setTitle("Algum titulo");
    }
  };
  const handleCounter = () => {
    setCounter(counter + 1);
  };

  const [countries, setCountries] = useState([]);

  const url = `http://universities.hipolabs.com/search?county=Brazil`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setCountries(data));
  }, []);

  return (
    <div className="App">
      <ul>
        {countries.map((country) => (
          <li>{country.name}</li>
        ))}
      </ul>

      <h1>{title}</h1>
      <button onClick={handleTitle}>Mudar Título</button>
      <h1>{counter}</h1>
      <button onClick={handleCounter}>Contar Aulas</button>
      <select
        onChange={(e) => {
          setTitle(e.target.value);
          setCounter(0);
        }}
      >
        <option value="Aula 1">Aula 1</option>
        <option value="Aula 2">Aula 2</option>
        <option value="Aula 3">Aula 3</option>
      </select>
    </div>
  );
}

export default App;
