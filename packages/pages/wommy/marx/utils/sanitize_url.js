require('dotenv').config()

module.exports = groq => 
	process.env.sanity_path + encodeURIComponent(
		groq.replace(/\s/g, '')
	)
