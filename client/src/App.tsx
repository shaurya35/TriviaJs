import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [backend, setBackendData] = useState<string>('');

  useEffect(() => {
    fetch('http://localhost:8080/')
      .then(response => response.json())
      .then(data => {
        setBackendData(JSON.stringify(data)); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <>
      <div className="App">
        <p>{backend}</p>
      </div>
    </>
  );
}

export default App;
