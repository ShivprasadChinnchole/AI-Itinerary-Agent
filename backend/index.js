const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/itinerary", async (req, res) => {
  const { destination, days, preferences } = req.body;

  const prompt = `Create a detailed ${days}-day itinerary for ${destination} based on these preferences: ${preferences.join(", ")}`;

  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3:latest",
      prompt: prompt,
      max_tokens: 2000,
      temperature: 0.7,
      stream: false
    });

    res.json({
      destination,
      days,
      preferences,
      plan: response.data.response
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to generate itinerary" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
