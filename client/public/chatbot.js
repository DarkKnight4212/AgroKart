const {app} = require("../../server/index")
const {WebhookClient} = require('dialogflow-fulfillment')
const { Configuration, OpenAIApi } = require("openai");

const openai = new OpenAIApi(configuration);
// API key for openai
const configuration = new Configuration({
  apiKey: "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",
});


app.post('/webhook', (req, res) => {
    // get agent from request
    let agent = new WebhookClient({request: req, response: res})

    let intentMap = new Map();
    intentMap.set('GPT Fallback Intent',handleWebHookIntent)
    agent.handleRequest(intentMap)
})

async function handleWebHookIntent(agent){
  // The user complete query
  const userQuery = agent.query;

  // Getting openai response for the user-query
  const completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{role: "user", content: userQuery}],
  });

  // Displaying response from the openai to the chatbot
  agent.add(completion.data.choices[0].message)
}
