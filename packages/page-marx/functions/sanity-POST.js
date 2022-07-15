require('dotenv').config()

//// conf the client
const client = require('@sanity/client')({
  projectId: process.env.SANITY_PROJECTID,
  dataset: process.env.SANITY_DATASET,
  token: process.env.SANITY_TOKEN,
  // useCdn: false,
})

const handler = async event => {

	//// early exit if !POST
  if (!event.httpMethod === 'POST') {
    return {
      statusCode: 400,
      body: 'unrecognized HTTP Method, only POST allowed',
    }
  }

	//// build the document
  const document = {
    _type: 'todo',
    todo: decodeURIComponent(event.body.split('=')[1].replace(/\+/g, ' ').trim()),
    category: ['inbox'],
    isComplete: false,
  }

	//// promise
  try {
    const result = await client.create(document)
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(result),
    }
  } catch (err) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: err.responseBody || JSON.stringify({ error: 'An error occurred' }),
    }
  }
}

module.exports = { handler }
