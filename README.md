# 🎭 MoodLens

> **See the expression. Understand the mood.**

MoodLens is an AI-powered facial expression detection web application that uses the device's camera to analyze facial expressions and estimate the user's current mood.

The application provides an interactive experience where users enter their name, allow camera access, and let MoodLens analyze their facial expression. It displays the detected mood, confidence level, and a supportive personalized message. MoodLens can also read the result aloud using browser text-to-speech.

---

## ✨ Features

- 🎭 Facial expression detection
- 📷 Real-time camera access
- 🤖 AI-based expression analysis using face-api.js
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

| Expression | Mood |
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
```

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3

### AI / Face Detection

- face-api.js
- Tiny Face Detector
- Face Expression Recognition

### Browser APIs

- MediaDevices / getUserMedia
- Web Speech API
- Speech Synthesis API
- HTML Canvas API

### Development Tools

- Visual Studio Code
- Git
- GitHub
- npm

---

## 📂 Project Structure

```text
MOODRA/
│
├── MoodLens/
│   │
│   ├── frontend/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   └── Camera.jsx
│   │   │   ├── App.jsx
│   │   │   ├── index.css
│   │   │   └── main.jsx
│   │   │
│   │   ├── package.json
│   │   ├── package-lock.json
│   │   ├── vite.config.js
│   │   └── index.html
│   │
│   └── backend/
│
├── .gitignore
└── README.md
```

The current deployed version focuses on the frontend. A backend and database can be added later if persistent user data or mood history is required.

---

## 🚀 Getting Started

Follow these steps to run MoodLens on your computer.

### 1. Clone the Repository

```bash
git clone https://github.com/SONAL-THAKUR16/MOODRA.git
```

### 2. Move into the Project Directory

```bash
cd MOODRA
```

### 3. Move into the Frontend

```bash
cd MoodLens/frontend
```

### 4. Install Dependencies

```bash
npm install
```

This installs all required frontend dependencies.

### 5. Start the Development Server

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173/
```

Open the URL in your browser.

---

## 📷 Camera Permission

MoodLens requires access to your device's camera for facial expression detection.

When the browser asks for permission:

1. Click **Allow**.
2. Make sure your camera is not being used exclusively by another application.
3. Position your face clearly in front of the camera.
4. Make sure there is sufficient lighting.

---

## 💻 Browser Requirements

MoodLens works best on modern browsers that support:

- WebRTC / getUserMedia
- JavaScript
- Web Speech API
- Canvas
- Modern ES modules

### Recommended Browsers

- Google Chrome
- Microsoft Edge
- Mozilla Firefox

---

## 🔊 Voice Feedback

MoodLens uses the browser's built-in Speech Synthesis API to speak the detected mood.

For example:

> Hello! You are in Happy mode. Keep enjoying the positive energy.

The exact voice depends on the browser and operating system.

---

## 🌙 Dark Mode

MoodLens includes a dark/night mode for a more comfortable experience in low-light environments.

Users can switch between the normal and dark themes using the theme button.

---

## 🔁 Analyze Again

After an expression has been detected, users can choose **Analyze Again**.

This allows MoodLens to perform another facial expression analysis without requiring the user to completely restart the camera.

---

## 🔐 Privacy

MoodLens is designed around browser-based facial expression analysis.

The current frontend version:

- Uses the user's camera through browser permission.
- Does not require a database.
- Does not require user accounts.
- Does not require MongoDB.
- Does not require a backend server for facial expression detection.
- Does not store facial images in a database.
- Camera access is controlled by the user's browser.

Users should always review and understand the privacy implications of applications that use camera-based facial analysis.

---

## ⚠️ Limitations

MoodLens estimates facial expressions from visible facial features. Facial-expression recognition is not a definitive measurement of a person's actual emotional or mental state.

Detection can be affected by:

- Poor lighting
- Camera quality
- Face position
- Multiple faces in the camera
- Occlusion of facial features
- Extreme head angles
- Difficult-to-distinguish facial expressions

Therefore, the detected mood should be treated as an **AI-generated estimate**, not a psychological diagnosis.

---

## 🔮 Future Improvements

Possible future versions of MoodLens may include:

- 📊 Mood history
- 📈 Mood analytics dashboard
- 👤 User accounts
- 🔐 Secure authentication
- ☁️ Cloud database
- 🗄️ MongoDB integration
- 📅 Daily mood tracking
- 📱 Improved mobile interface
- 🎨 More UI themes
- 🎙️ More voice options
- 🧠 Improved emotion classification
- 📉 Mood statistics and charts
- 📝 Personal mood journal
- 🔔 Personalized recommendations

---

## ☁️ Deployment

The MoodLens frontend can be deployed using static hosting platforms such as **Netlify** or **Render**.

### Build Configuration

```text
Base / Root Directory:
MoodLens/frontend

Build Command:
npm run build

Publish Directory:
dist
```

### Production Build

Before deployment, test the production build locally:

```bash
npm run build
```

If the build succeeds, Vite creates the production files inside:

```text
dist/
```

---

## 🧪 Development

To run the application during development:

```bash
cd MoodLens/frontend
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions and suggestions are welcome.

To contribute:

1. Fork the repository.
2. Create a new branch.

```bash
git checkout -b feature/new-feature
```

3. Make your changes.
4. Commit your changes.

```bash
git commit -m "Add new feature"
```

5. Push the branch.

```bash
git push origin feature/new-feature
```

6. Create a Pull Request.

---

## 👨‍💻 Developer

**Sonal Thakur**

BTech Student | AI/ML & Web Development Enthusiast

---

## 📌 Project Status

| Component | Status |
|---|---|
| 🟢 Frontend Development | Active |
| 🟢 Facial Expression Detection | Implemented |
| 🟢 Camera Integration | Implemented |
| 🟢 Voice Feedback | Implemented |
| 🟢 Dark Mode | Implemented |
| 🟢 Analyze Again | Implemented |
| 🟡 Backend | Not required for current version |
| 🟡 Database | Not required for current version |

---

## ⭐ Support

If you find **MoodLens** interesting, consider giving the repository a ⭐ on GitHub.

**Thank you for checking out MoodLens! 🎭**
