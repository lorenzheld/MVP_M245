import React, { useState } from 'react';
import './App.css';

// Simulierte Datenbank
const wasteDatabase = {
    pet: { name: 'Leere PET-Flasche', bin: 'Gelber Sack / PET-Sammlung', desc: 'Bitte flachdrücken! Deckel kann draufbleiben.', color: '#f1c40f', points: 10 },
    pizza: { name: 'Fettiger Pizzakarton', bin: 'Restmüll', desc: 'Stark verschmutztes Papier ist nicht recycelbar.', color: '#34495e', points: 5 },
    shampoo: { name: 'Leere Shampoo-Flasche', bin: 'Plastiksammelsack', desc: 'Komplett entleeren. Gut gemacht!', color: '#e67e22', points: 10 },
    apple: { name: 'Apfelgriebsch', bin: 'Biotonne / Kompost', desc: 'Perfekt für den natürlichen Kreislauf.', color: '#27ae60', points: 10 }
};

function App() {
    const [score, setScore] = useState(0);
    const [selectedItem, setSelectedItem] = useState('');
    const [result, setResult] = useState(null);

    const handleScan = () => {
        if (!selectedItem) {
            alert("Bitte wähle zuerst ein Objekt aus, um den Scan zu simulieren.");
            return;
        }
        const data = wasteDatabase[selectedItem];
        setResult(data);
        setScore(prevScore => prevScore + data.points); // Gamification Update
    };

    return (
        <div className="app-container">
            <header>
                <h1>Smart-Sort AI</h1>
            </header>

            <div className="score-board">
                Eco-Punkte: <strong>{score}</strong>
            </div>

            <main className="main-content">
                <div className="scanner-placeholder">
                    <span className="icon">📷</span>
                    <p>Kamera-Ansicht (Simulation)</p>
                </div>

                <div className="controls">
                    <p>1. Simuliere einen KI-Scan:</p>
                    <select
                        value={selectedItem}
                        onChange={(e) => setSelectedItem(e.target.value)}
                    >
                        <option value="">-- Abfallprodukt wählen --</option>
                        {Object.entries(wasteDatabase).map(([key, item]) => (
                            <option key={key} value={key}>{item.name}</option>
                        ))}
                    </select>

                    <button onClick={handleScan}>Abfall scannen & sortieren</button>
                </div>

                {/* Wird nur angezeigt, wenn ein Resultat existiert */}
                {result && (
                    <div
                        className="result-card"
                        style={{ backgroundColor: result.color, color: result.color === '#f1c40f' ? '#333' : '#fff' }}
                    >
                        <h2>Tonne: {result.bin}</h2>
                        <p>{result.desc}</p>
                        <div className="points-badge">+{result.points} Punkte!</div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;