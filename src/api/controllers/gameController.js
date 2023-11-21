const { OpenAIAPI } = require('openai');
require('dotenv').config();

// Initialize OpenAI with your API key
const openai = new OpenAIAPI({
  apiKey: process.env.OPENAI_API_KEY,
});

exports.generateStory = async (req, res) => {
  try {
    const prompt = req.body.prompt; // Assuming the prompt is sent in the request body
    const response = await openai.createCompletion({
      model: 'text-davinci-003', // Specify the model you want to use
      prompt: prompt,
      max_tokens: 150,
    });

    res.json({ story: response.choices[0].text.trim() });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
