//Import the Library and Constants
const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  //Set Up the API Key
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_GEMINI_API_KEY;
  //Initialize the Generative AI Client
  const genAI = new GoogleGenerativeAI(apiKey);
  
  //Configure the Generative Model -> This line retrieves a specific generative model called "gemini-1.5-flash" from the AI service.
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  //Set Up Generation Configuration
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
  //Define the Main Function . We export the chatSession function for use that function inside our application.
   export const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
  
