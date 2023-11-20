const axios = require('axios');
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

const sendPromptToOpenAI = async (req, res) => {
    const prompt = req.body.prompt;

    try {
        const response = await axios.post('https://api.openai.com/v1/engines/davinci/completions', {
            prompt: prompt,
            max_tokens: 150
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`
            }
        });

        const aiResponse = response.data.choices[0].text;
        res.status(200).json({ aiResponse });
    } catch (error) {
        res.status(500).json({ message: 'Error communicating with OpenAI', error: error.message });
    }
};

module.exports = {
    sendPromptToOpenAI
};
