const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// =========================
// MONGODB CONNECTION
// =========================

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error(
            "MongoDB connection error:",
            error
        );
    });

// =========================
// MOOD SCHEMA
// =========================

const moodSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },

        mood: {
            type: String,
            required: true
        },

        confidence: {
            type: Number,
            required: true
        },

        message: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

const Mood = mongoose.model(
    "Mood",
    moodSchema
);

// =========================
// TEST ROUTE
// =========================

app.get("/", (req, res) => {
    res.json({
        message: "MoodLens backend is running 🚀"
    });
});

// =========================
// SAVE MOOD
// =========================

app.post("/api/moods", async (req, res) => {

    try {

        const {
            name,
            mood,
            confidence,
            message
        } = req.body;

        if (!name || !mood) {
            return res.status(400).json({
                message:
                    "Name and mood are required"
            });
        }

        const newMood = new Mood({
            name,
            mood,
            confidence,
            message
        });

        await newMood.save();

        res.status(201).json({
            success: true,
            message:
                "Mood saved successfully",
            data: newMood
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message:
                "Failed to save mood"
        });
    }
});

// =========================
// GET MOOD HISTORY
// =========================

app.get("/api/moods/:name", async (req, res) => {

    try {

        const moods = await Mood
            .find({
                name: req.params.name
            })
            .sort({
                createdAt: -1
            });

        res.json(moods);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message:
                "Failed to get mood history"
        });
    }
});

// =========================
// SERVER
// =========================

const PORT =
    process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(
        `Server running on port ${PORT}`
    );

});