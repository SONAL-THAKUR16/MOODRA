# 🎭 MoodLens

> **See the expression. Understand the mood.**

MoodLens is an AI-powered facial expression detection web application that uses your device's camera to analyze facial expressions and identify the user's current mood.

The application provides a simple and interactive experience where users enter their name, allow camera access, and let MoodLens analyze their facial expression. Based on the detected expression, the application displays the detected mood, confidence level, and a supportive message. It can also read the result aloud using browser text-to-speech.

---

## ✨ Features

- 🎭 Facial expression detection
- 📷 Real-time camera access
- 🤖 AI-based expression analysis using `face-api.js`
- 😊 Detects multiple facial expressions
- 📊 Displays detection confidence
- 💬 Provides mood-specific supportive messages
- 🔊 Text-to-speech voice feedback
- 🔁 Analyze Again functionality
- 👤 Personalized greeting using the user's name
- 🌙 Dark / Night mode
- 📱 Responsive user interface
- 🌐 Runs directly in the web browser
- 🚫 No database required for the current version

---

## 🧠 Supported Expressions

MoodLens currently recognizes the following facial expressions:

| Facial Expression | Mood |
|---|---|
| 😊 Happy | Happy |
| 😢 Sad | Sad |
| 😠 Angry | Angry |
| 😲 Surprised | Surprised |
| 😨 Fearful | Fearful |
| 🤢 Disgusted | Disgusted |
| 😐 Neutral | Neutral |

---

## 🎯 How MoodLens Works

The application follows a simple process:

```text
User enters name
       ↓
MoodLens welcomes the user
       ↓
User opens camera
       ↓
Browser requests camera permission
       ↓
Face is detected
       ↓
Facial expressions are analyzed
       ↓
Most likely expression is selected
       ↓
Expression is converted into a mood
       ↓
Confidence score is displayed
       ↓
A personalized message is generated
       ↓
MoodLens speaks the result

🛠️ Technologies Used
Frontend
React.js
Vite
JavaScript
HTML5
CSS3
AI / Face Detection
face-api.js
Tiny Face Detector
Face Expression Recognition
Browser APIs
MediaDevices / getUserMedia
Web Speech API
Speech Synthesis API
Development Tools
Visual Studio Code
Git
GitHub
npm
📂 Project Structure
MoodLens/
│
├── frontend/
│   ├── public/
│   │
│   ├── src/
│   │   ├── components/
│   │   │   └── Camera.jsx
│   │   │
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── index.html
│
├── backend/
│   └── ...
│
├── .gitignore
└── README.md
The current deployed version focuses on the frontend. A backend/database can be added later if persistent user data or mood history is required.
🚀 Getting Started
Follow the steps below to run MoodLens on your computer.
1. Clone the Repository
git clone https://github.com/SONAL-THAKUR16/MOODRA.git
Move into the project directory:
cd MOODRA
Then move into the frontend:
cd MoodLens/frontend
2. Install Dependencies
Run:
npm install
This installs all required frontend dependencies.
3. Start the Development Server
Run:
npm run dev
Vite will provide a local URL similar to:
http://localhost:5173/
Open that URL in your browser.

## 📷 Camera Permission
MoodLens requires access to your device's camera for facial expression detection.
When the browser asks for permission:
Click Allow
Make sure your camera is not being used exclusively by another application.
Position your face clearly in front of the camera.
Make sure there is enough lighting.
## 💻 Browser Requirements
MoodLens works best on modern browsers that support:
WebRTC / getUserMedia
JavaScript
Web Speech API
Canvas
Modern ES modules
Recommended browsers:
Google Chrome
Microsoft Edge
Mozilla Firefox

## 🔊 Voice Feedback
MoodLens uses the browser's built-in Speech Synthesis API to speak the detected mood.
For example, the application can provide a response similar to:
Hello! You are in Happy mode. Keep enjoying the positive energy.
The exact voice depends on the browser and operating system.

## 🌙 Dark Mode
MoodLens includes a dark/night mode for a more comfortable experience in low-light environments.
Users can switch between the normal and dark themes using the theme button.

## 🔁 Analyze Again
After an expression has been detected, users can choose Analyze Again.
This allows MoodLens to perform another facial expression analysis without requiring the user to completely restart the camera.

## 🔐 Privacy
MoodLens is designed around browser-based facial expression analysis.
The current frontend version:
Uses the user's camera through browser permission.
Does not require a database.
Does not require user accounts.
Does not require MongoDB.
Does not store facial images in a database.
Does not require a backend server for facial expression detection.
Camera access is controlled by the user's browser.
Users should always review and understand the privacy implications of any application that uses camera-based facial analysis.

## ⚠️ Limitations
MoodLens estimates facial expressions from visible facial features. Facial-expression recognition is not a definitive measurement of a person's actual emotional or mental state.
Detection can be affected by:
Poor lighting
Camera quality
Face position
Multiple faces in the camera
Occlusion of facial features
Extreme head angles
Facial expressions that are difficult to distinguish
Therefore, the detected mood should be treated as an AI-generated estimate, not a psychological diagnosis.

## 🔮 Future Improvements
Possible future versions of MoodLens may include:
•📊 Mood history
•📈 Mood analytics dashboard
•👤 User accounts
•🔐 Secure authentication
•☁️ Cloud database
•🗄️ MongoDB integration
•📅 Daily mood tracking
•📱 Improved mobile interface
•🎨 More UI themes
•🎙️ More voice options
•🧠 Improved emotion classification
•📉 Mood statistics and charts
•📝 Personal mood journal
•🔔 Personalized recommendations

## ☁️ Deployment
The frontend can be deployed using a static hosting platform such as Netlify.
For the current project structure, the frontend build configuration is:
Base directory: MoodLens/frontend
Build command: npm run build
Publish directory: dist
Before deployment, test the production build locally:
npm run build
If the build succeeds, Vite creates the production files inside:
dist/

## 🧪 Development
To run the application during development:
cd MoodLens/frontend
npm install
npm run dev
To create a production build:
npm run build
To preview the production build locally:
npm run preview

## 🤝 Contributing
Contributions and suggestions are welcome.
To contribute:
Fork the repository.
Create a new branch.
git checkout -b feature/new-feature
Make your changes.
Commit your changes.
git commit -m "Add new feature"
Push the branch.
git push origin feature/new-feature
Create a Pull Request.
👨‍💻 Developer
Sonal Thakur
BTech Student | Developer | Problem Solver
Interested in:
Artificial Intelligence
Machine Learning
Web Development
Data Structures & Algorithms
Software Development
📌 Project Status
🟢 Frontend Development: Active
🟢 Facial Expression Detection: Implemented
🟢 Camera Integration: Implemented
🟢 Voice Feedback: Implemented
🟢 Dark Mode: Implemented
🟡 Backend: Not required for the current version
🟡 Database: Not required for the current version
⭐ Support
If you find MoodLens interesting, consider giving the repository a ⭐ on GitHub.
