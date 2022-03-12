import { useState } from "react";
import "./App.css";

function App() {
    const [name, setName] = useState("");
    return(
        <div className="app">
            <h1>App</h1>

            <div>
                <label htmlFor="name">Nombre: </label>
                <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </div>
        </div>
    );
}

export default App;