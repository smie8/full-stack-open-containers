import { useEffect, useState } from "react";
import './App.css';

const App = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(process.env.REACT_APP_BACKEND_URL)
        .then(response => response.json())
        .then(response => {
          setResults(response)
        })
        .catch(err => console.error(err))
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      List of people and their phone numbers:
      <ul>
      { results.map(person => {
        return (
          <li key={person.number}>
          name: {person.name},
          number: {person.number}
          <br/>
          </li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
