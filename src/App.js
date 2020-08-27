import React from "react";
import "./App.css";

function App({ name, age }) {
    return (
        <div>
            <div className="App">
                Hello <strong>{name}</strong> Here From RWP
            </div>
            <div>
                <ol className="ol">
                    <li>Usama</li>
                    <li>Umair</li>
                    <li>Asad</li>
                </ol>
                <ul className="ul">
                    <li>Rawalpindi</li>
                    <li>Lahore</li>
                    <li>Karachi</li>
                </ul>
            </div>
            <div className="App">
                <p>
                    My name is <strong>Usama</strong> and Age is{" "}
                    {(age - 10) * 2}
                </p>
            </div>
        </div>
    );
}

export default App;
