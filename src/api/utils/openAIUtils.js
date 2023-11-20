const axios = require('axios');

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci/completions';

/**
 * Send a prompt to the OpenAI API and return the response.
 * @param {string} prompt - The prompt to send to OpenAI.
 * @param {number} maxTokens - Maximum number of tokens to generate.
 * @returns {Promise<string>} - The response from OpenAI.
 */
const sendPromptToOpenAI = async (prompt, maxTokens = 150) => {
    try {
        const response = await axios.post(
            OPENAI_API_URL,
            {
                prompt: prompt,
                max_tokens: maxTokens
            },
            {
                headers: {
                    'Authorization': `Bearer ${OPENAI_API_KEY}`,
                    'Content-Type': 'application/json'
                }
            }
        );

        return response.data.choices[0].text;
    } catch (error) {
        console.error('Error in sending prompt to OpenAI:', error);
        throw error;
    }
};

module.exports = {
    sendPromptToOpenAI
};


//sample function to use for the controllers
// const openAIUtils = require('../utils/openAIUtils');

// const getAIResponse = async (req, res) => {
//     const prompt = 'Translate the following English text to French: ' + req.body.text;
//     try {
//         const aiResponse = await openAIUtils.sendPromptToOpenAI(prompt);
//         res.json({ translatedText: aiResponse });
//     } catch (error) {
//         res.status(500).send('Failed to get response from OpenAI');
//     }
// };

//utils makes it easier for us to use the openAI api in our controllers ensuring that all openai api requests are made in the same way