import React, { useState } from 'react';
import './App.css';

// Material Design 3 Tonal Palettes (Sanfte Hintergründe, starke Textfarben)
const wasteDatabase = {
    pet: { name: 'Leere PET-Flasche', bin: 'Gelber Sack / PET', desc: 'Bitte flachdrücken. Deckel kann draufbleiben.', bg: '#FEF7E0', color: '#B06000', points: 10 },
    pizza: { name: 'Fettiger Pizzakarton', bin: 'Restmüll', desc: 'Stark verschmutztes Papier ist nicht recycelbar.', bg: '#F1F3F4', color: '#3C4043', points: 5 },
    shampoo: { name: 'Leere Shampoo-Flasche', bin: 'Plastiksammelsack', desc: 'Komplett entleeren. Gut gemacht!', bg: '#E8F0FE', color: '#174EA6', points: 10 },
    apple: { name: 'Apfelgriebsch', bin: 'Biotonne / Kompost', desc: 'Perfekt für den natürlichen Kreislauf.', bg: '#E6F4EA', color: '#137333', points: 10 }
};

function App() {
    const [score, setScore] = useState(0);
    const [selectedItem, setSelectedItem] = useState('');
    const [result, setResult] = useState(null);
    const [error, setError] = useState('');

    const handleScan = () => {
        if (!selectedItem) {
            setError("Bitte wähle ein Abfallprodukt aus.");
            setResult(null);
            return;
        }

        setError('');
        const data = wasteDatabase[selectedItem];
        setResult(data);
        setScore(prevScore => prevScore + data.points);
    };

    return (
        <div className="m3-app">
            {/* M3 Flacher Header */}
            <header className="m3-header">
                <h1 className="m3-title">Smart-Sort AI</h1>
                <div className="m3-score-badge">
                    <svg className="m3-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.05C7.03 18.6 3.5 14.34 3.5 9.5V5L12 2L20.5 5V9.5C20.5 14.34 16.97 18.6 12 21.05Z" />
                    </svg>
                    {score}
                </div>
            </header>

            <main className="m3-content">
                {/* M3 Surface Container für Scanner */}
                <div className="m3-scanner-surface">
                    <svg className="m3-scanner-icon" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4h4v2H4v4H2V4h2zm16 0h-4v2h4v4h2V4h-2zM4 20h4v-2H4v-4H2v4h2zm16 0h-4v-2h4v-4h2v4h-2zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"/>
                    </svg>
                    <p>Kamera-Simulation</p>
                </div>

                {/* M3 Outlined Field */}
                <div className="m3-input-group">
                    <label className="m3-label">Abfallprodukt</label>
                    <div className="m3-select-wrapper">
                        <select
                            className="m3-select"
                            value={selectedItem}
                            onChange={(e) => {
                                setSelectedItem(e.target.value);
                                setError('');
                            }}
                        >
                            <option value="" disabled hidden>Bitte auswählen...</option>
                            {Object.entries(wasteDatabase).map(([key, item]) => (
                                <option key={key} value={key}>{item.name}</option>
                            ))}
                        </select>
                        <svg className="m3-dropdown-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 10l5 5 5-5z"/>
                        </svg>
                    </div>
                </div>

                {/* M3 Filled Button */}
                <button className="m3-btn" onClick={handleScan}>
                    Scannen & Sortieren
                </button>

                {/* M3 Error */}
                {error && (
                    <div className="m3-error">
                        <svg className="m3-icon" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                        </svg>
                        {error}
                    </div>
                )}

                {/* M3 Tonal Result Card */}
                {result && !error && (
                    <div
                        className="m3-result-card"
                        style={{ backgroundColor: result.bg, color: result.color }}
                    >
                        <h2 className="m3-result-title">{result.bin}</h2>
                        <p className="m3-result-desc">{result.desc}</p>
                        <div className="m3-points-chip" style={{ backgroundColor: result.color, color: result.bg }}>
                            +{result.points} Punkte
                        </div>
                    </div>
                )}
            </main>
        </div>
    );
}

export default App;