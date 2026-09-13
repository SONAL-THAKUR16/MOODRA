import { useState } from "react";
import "./index.css";
import Camera from "./components/Camera";
function App() {
    const [name, setName] = useState("");

    const [started, setStarted] = useState(false);

    const [cameraOpen, setCameraOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    function handleStart() {
        if (name.trim() === "") {
            alert("Please enter your name");
            return;
        }
        setStarted(true);
    }

    const openCamera = () => {
        setCameraOpen(true);
    };

    const closeCamera = () => {
        setCameraOpen(false);
    };

    if (cameraOpen) {
        return (
            <div
                className={`app ${
                    darkMode ? "dark-mode" : ""
                }`}
            >

                {/* Dark Mode Button */}
                <button
                    className="theme-button"
                    onClick={() =>
                        setDarkMode(!darkMode)
                    }
                >
                    {darkMode ? "☀️" : "🌙"}
                </button>

                <Camera
                    onBack={closeCamera}
                    userName={name}
                />
            </div>
        );
    }

    return (
        <div
            className={`app ${
                darkMode ? "dark-mode" : ""
            }`}
        >
            <button
                className="theme-button"
                onClick={() =>
                    setDarkMode(!darkMode)
                }
            >
                {darkMode ? "☀️" : "🌙"}
            </button>


            {!started ? (
                <div className="welcome-card">

                    <div className="emoji">
                        🎭
                    </div>

                    <h1>
                        Welcome to <span>MOODRA</span>
                    </h1>

                    <p>
                        Let's discover your current
                        facial expression.
                    </p>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) =>
                            setName(e.target.value)
                        }
                    />

                    <button
                        onClick={handleStart}
                    >
                        Continue →
                    </button>

                </div>

            ) : (

                <div className="camera-card">

                    <div className="emoji">
                        👋
                    </div>

                    <h1>
                        Hello {name}!
                    </h1>

                    <p>
                        Ready to discover your
                        current expression?
                    </p>

                    <button
                        onClick={openCamera}
                    >
                        📷 Open Camera
                    </button>

                </div>

            )}

        </div>
    );
}
export default App;