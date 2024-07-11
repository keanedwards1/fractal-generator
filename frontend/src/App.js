import React, { useState } from 'react';

function App() {
    const [fractal, setFractal] = useState(null);

    const generateFractal = async () => {
        const response = await fetch('http://localhost:5000/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        setFractal(data);
    };

    return (
        <div className="App">
            <h1>Fractal Generator</h1>
            <button onClick={generateFractal}>Generate Fractal</button>
            {fractal && <div>{fractal.data}</div>}
        </div>
    );
}

export default App;

