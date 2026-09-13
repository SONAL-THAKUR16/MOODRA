import { useEffect, useRef, useState } from "react";
import * as faceapi from "face-api.js";

function Camera({ onBack, userName }) {
    const videoRef = useRef(null);
    const streamRef = useRef(null);
    const intervalRef = useRef(null);
    const lastSpokenMood = useRef("");

    const [loading, setLoading] = useState(true);
    const [cameraError, setCameraError] = useState("");
    const [faceDetected, setFaceDetected] = useState(false);

    const [mood, setMood] = useState("");
    const [message, setMessage] = useState("");
    const [confidence, setConfidence] = useState(0);

    const [showResult, setShowResult] = useState(false);
    const [speaking, setSpeaking] = useState(false);

    const MODEL_URL =
        "https://justadudewhohacks.github.io/face-api.js/models";

    useEffect(() => {
        // eslint-disable-next-line react-hooks/immutability
        startMoodDetection();

        return () => {
            // eslint-disable-next-line react-hooks/immutability
            stopCamera();
        };
    }, []);

    // =========================
    // START CAMERA + AI
    // =========================

    const startMoodDetection = async () => {
        try {
            setLoading(true);
            setCameraError("");
            setMood("");
            setMessage("");
            setConfidence(0);
            setFaceDetected(false);
            setShowResult(false);

            lastSpokenMood.current = "";

            await faceapi.nets.tinyFaceDetector.loadFromUri(
                MODEL_URL
            );

            await faceapi.nets.faceExpressionNet.loadFromUri(
                MODEL_URL
            );

            const stream =
                await navigator.mediaDevices.getUserMedia({
                    video: true,
                    audio: false
                });

            streamRef.current = stream;

            if (videoRef.current) {
                videoRef.current.srcObject = stream;

                videoRef.current.onloadedmetadata = () => {
                    setLoading(false);
                    startDetection();
                };
            }

        } catch (error) {
            console.error(error);

            setLoading(false);

            setCameraError(
                error.message ||
                "Unable to start camera or mood detection."
            );
        }
    };

    // =========================
    // FACE + EXPRESSION
    // =========================

    const startDetection = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(async () => {

            if (!videoRef.current) return;

            const detection =
                await faceapi
                    .detectSingleFace(
                        videoRef.current,
                        new faceapi.TinyFaceDetectorOptions()
                    )
                    .withFaceExpressions();

            if (!detection) {
                setFaceDetected(false);
                return;
            }

            setFaceDetected(true);

            const expressions =
                detection.expressions;

            let strongestExpression = "neutral";
            let highestProbability = 0;

            Object.entries(expressions).forEach(
                ([expression, probability]) => {

                    if (
                        probability >
                        highestProbability
                    ) {
                        highestProbability =
                            probability;

                        strongestExpression =
                            expression;
                    }
                }
            );

            const detectedMood =
                convertExpressionToMood(
                    strongestExpression
                );

            const moodMessage =
                getMoodMessage(detectedMood);

            const newConfidence =
                Math.round(
                    highestProbability * 100
                );

            setMood(detectedMood);
            setMessage(moodMessage);
            setConfidence(newConfidence);

            setShowResult(true);

            if (
                lastSpokenMood.current !==
                detectedMood
            ) {

                lastSpokenMood.current =
                    detectedMood;

                speakMoodAutomatically(
                    detectedMood,
                    moodMessage
                );
            }

        }, 1500);
    };

    // =========================
    // EXPRESSION → MOOD
    // =========================

    const convertExpressionToMood = (
        expression
    ) => {

        switch (expression) {

            case "happy":
                return "Happy";

            case "sad":
                return "Sad";

            case "angry":
                return "Angry";

            case "surprised":
                return "Surprised";

            case "fearful":
                return "Fearful";

            case "disgusted":
                return "Disgusted";

            case "neutral":
                return "Neutral";

            default:
                return "Neutral";
        }
    };

    // =========================
    // MOOD MESSAGE
    // =========================

    const getMoodMessage = (mood) => {

        switch (mood) {

            case "Happy":
                return "You look really happy right now! ✨ Keep that beautiful smile and enjoy this positive moment. Your happiness can also spread good energy to the people around you. 😊 That's a wonderful smile! 🌸 You seem to be in a very positive mood. Enjoy this moment, appreciate the little things around you, and keep that positive energy going. You are looking cheerful and full of positive energy! 🌟 Sometimes a simple smile can make the whole day feel better. Keep smiling and enjoy your day! Your expression shows a lot of happiness! 💛 Whatever made you feel this way, hold on to that positive feeling. Take this good energy with you and make the most of your day.";

            case "Sad":
                return "You seem a little sad right now. 💙 Remember that it's completely okay to have difficult moments. Take a slow breath, give yourself some time, and don't be too hard on yourself. Better moments will come. It looks like you might be feeling down. 🌧️ You don't have to be okay all the time. Take a little break, listen to something you enjoy, talk to someone you trust, and give yourself some time to feel better. Your expression looks a little sad today. 💙 Remember that one difficult moment doesn't define your entire day or your life. Take a deep breath, relax, and remind yourself that things can get better. Sometimes we all have days when we don't feel our best. 🌿 If you're feeling sad, take things slowly today. Drink some water, rest for a while, and do something small that makes you comfortable.";

            case "Angry":
                return "You look a little angry right now. 😠 Before reacting, take a slow and deep breath and give yourself a moment. Sometimes stepping away from a stressful situation can help you think more clearly and calmly. It seems like something may be frustrating you. 🌿 Take a few seconds to breathe and relax your mind. You don't have to respond immediately. Give yourself some space and come back when you feel calmer. Your expression shows some anger. 😤 Remember that it's okay to feel angry, but taking control of how you respond can make a big difference. Take a deep breath and give yourself a little time. You seem to be having a frustrating moment. 💭 Try taking a short break, relaxing your shoulders, and breathing slowly. Sometimes a little distance from the situation can completely change how you feel.";

            case "Surprised":
                return "Wow! 😲 You look really surprised right now! Something unexpected must have caught your attention. Take a moment to enjoy the experience and find out what happens next. You seem genuinely surprised! ✨ Your expression suggests that something unexpected just happened. Sometimes surprises can turn an ordinary moment into a memorable one. That's quite a surprised expression! 😲 Whatever caught your attention definitely seems interesting. Take a moment, process what happened, and enjoy the unexpected moment. You look surprised and curious at the same time! 🌟 Life can be full of unexpected moments. Stay curious and see where this surprising moment takes you.";

            case "Fearful":
                return "You seem a little worried or fearful right now. 💙 Take a slow, deep breath and remind yourself that you can handle things one step at a time. You don't need to solve everything immediately. Your expression suggests that you might be feeling nervous. 🌿 Try taking a few slow breaths and focus on the present moment. Give yourself some time to calm down before making any decisions. You look a little concerned right now. 💪 Remember to breathe slowly and stay grounded. Whatever is making you uncomfortable, take it one small step at a time. You don't have to rush. It seems like something may be making you uncomfortable or nervous. 🌸 Take a moment to relax your body and breathe. Remind yourself that difficult feelings can pass and you can take things slowly.";

            case "Disgusted":
                return "Something doesn't seem to be sitting well with you right now. 🤢 Take a moment to step away from whatever is bothering you and give yourself some space. A short break can sometimes help you reset. You look like something has really bothered you. 🌿 It's okay to dislike something strongly. Take a breath, move away from the situation if possible, and give yourself a moment to feel comfortable again. Your expression suggests that you're not enjoying what you're seeing or experiencing. 😕 Take a little break and focus on something more pleasant. Sometimes changing your surroundings can help improve your mood. Something definitely seems to have caught you the wrong way! 🌱 Take a moment to relax and reset. Give yourself some distance from whatever is bothering you and focus on something that makes you feel comfortable.🌿";

            case "Neutral":
                return "You look calm and composed right now. 😐 Sometimes being neutral is actually a great place to be. Take a breath, stay relaxed, and continue your day at your own pace. Your expression looks peaceful and balanced. 🌿 You don't seem particularly excited or upset, which can be a nice moment of calm. Enjoy this quiet state and keep moving forward. You appear relaxed and focused right now. 😊 Not every moment needs a strong emotion. Sometimes a calm mind gives you the perfect opportunity to concentrate on what matters. You have a calm and neutral expression. ✨ Take this peaceful moment to slow down, collect your thoughts, and continue with whatever you have planned for today.";
            default:
                return "";
        }
    };

    // =========================
    // MOOD EMOJI
    // =========================

    const getMoodEmoji = () => {

        switch (mood) {

            case "Happy":
                return "😊";

            case "Sad":
                return "😢";

            case "Angry":
                return "😠";

            case "Surprised":
                return "😲";

            case "Fearful":
                return "😨";

            case "Disgusted":
                return "🤢";

            case "Neutral":
                return "😐";

            default:
                return "🙂";
        }
    };

    // =========================
    // AUTOMATIC VOICE
    // =========================

    const speakMoodAutomatically = (
        detectedMood,
        moodMessage
    ) => {

        if (!userName) return;

        const text =
            `Hello ${userName}. ` +
            `You are in ${detectedMood} mode. ` +
            `${moodMessage}`;

        window.speechSynthesis.cancel();

        const speech =
            new SpeechSynthesisUtterance(text);

        speech.rate = 1.0;
        speech.pitch = 1.3;
        speech.volume = 1.0;

        speech.onstart = () => {
            setSpeaking(true);
        };

        speech.onend = () => {
            setSpeaking(false);
        };

        window.speechSynthesis.speak(
            speech
        );
    };

    const speakAgain = () => {

        if (!mood || !message) return;

        speakMoodAutomatically(
            mood,
            message
        );
    };

    // =========================
    // ANALYZE AGAIN
    // ONLY UPDATED PART
    // =========================

    const analyzeAgain = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        window.speechSynthesis.cancel();

        setMood("");
        setMessage("");
        setConfidence(0);
        setFaceDetected(false);
        setSpeaking(false);
        setShowResult(false);

        lastSpokenMood.current = "";

        setTimeout(() => {

            if (
                videoRef.current &&
                streamRef.current
            ) {

                videoRef.current.srcObject =
                    streamRef.current;

                videoRef.current.play()
                    .then(() => {

                        setLoading(false);

                        startDetection();

                    })
                    .catch((error) => {

                        console.error(
                            "Camera play error:",
                            error
                        );

                        setCameraError(
                            "Unable to restart camera."
                        );
                    });

            } else {

                startMoodDetection();

            }

        }, 300);
    };

    // =========================
    // STOP CAMERA
    // =========================

    const stopCamera = () => {

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }

        if (streamRef.current) {

            streamRef.current
                .getTracks()
                .forEach((track) => {
                    track.stop();
                });

            streamRef.current = null;
        }

        window.speechSynthesis.cancel();
    };

    // =========================
    // BACK
    // =========================

    const handleBack = () => {

        stopCamera();

        onBack();
    };

    // =========================
    // RESULT SCREEN
    // =========================

    if (showResult && mood) {

        return (
            <div className="result-container">

                <div className="result-card">

                    <div className="result-emoji">
                        {getMoodEmoji()}
                    </div>

                    <h2>
                        Hello {userName}! 👋
                    </h2>

                    <h1>
                        You are in {mood} Mode
                    </h1>

                    <p className="result-message">
                        {message}
                    </p>

                    <div className="confidence">
                        Detection confidence:
                        <strong>
                            {" "}{confidence}%
                        </strong>
                    </div>

                    <button
                        onClick={speakAgain}
                        disabled={speaking}
                    >
                        {speaking
                            ? "🔊 Speaking..."
                            : "🔊 Hear Again"}
                    </button>

                    <button
                        className="analyze-button"
                        onClick={analyzeAgain}
                    >
                        📷 Analyze Again
                    </button>

                    <button
                        className="back-button"
                        onClick={handleBack}
                    >
                        ← Exit
                    </button>

                </div>

            </div>
        );
    }

    // =========================
    // CAMERA SCREEN
    // =========================

    return (
        <div className="camera-container">

            <h1>
                MOODRA 🧠
            </h1>

            <p>
                Look directly at the camera.
            </p>

            {loading && (
                <div className="loading">
                    Loading AI and camera...
                </div>
            )}

            {cameraError && (
                <div className="camera-error">

                    <h3>
                        Something went wrong
                    </h3>

                    <p>
                        {cameraError}
                    </p>

                    <button
                        onClick={startMoodDetection}
                    >
                        Try Again
                    </button>

                </div>
            )}

            <div className="video-wrapper">

                <video
                    ref={videoRef}
                    autoPlay
                    muted
                    playsInline
                />

            </div>

            {!loading &&
                !cameraError && (
                    <div className="face-status">

                        {faceDetected ? (
                            <span className="detected">
                                🟢 Face detected
                            </span>
                        ) : (
                            <span className="not-detected">
                                🟢 Face detected
                            </span>
                        )}

                    </div>
                )}

            <button
                className="back-button"
                onClick={handleBack}
            >
                ← Back
            </button>

        </div>
    );
}

export default Camera;