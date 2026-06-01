const { GoogleGenerativeAI } = require(
    "@google/generative-ai"
);

const genAI = new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY
);

async function generateCaption(
    imageBase64,
    mimeType
) {

    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash"
    });

    const prompt = `

    Analyze this image and generate:

    1. A cool gen-z instagram caption
    2. 5 trendy hashtags
    3. The mood/vibe of the image

    `;

    const result = await model.generateContent([

        prompt,

        {
            inlineData: {
                data: imageBase64,
                mimeType
            }
        }
    ]);

    return result.response.text();
}

module.exports = generateCaption;