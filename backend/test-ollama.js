const axios = require("axios");
async function testOllama() {
  try {
    const response = await axios.post("http://localhost:11434/api/generate", {
      model: "llama3:latest",
      prompt: "Hello",
      max_tokens: 2000,
      temperature: 0.7,
      stream: false
    });

    console.log("AI Response:", response.data.response);
  } catch (err) {
    console.error("Error:", err.response?.data || err.message);
  }
}

testOllama();
