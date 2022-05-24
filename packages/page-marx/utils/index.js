require('dotenv').config()

const sanitize = groq =>
	process.env.sanity_path + encodeURIComponent(groq.replace(/\s/g, ''))

module.exports = (url, duration = '1d', type = 'json') =>
	require('@11ty/eleventy-fetch')(sanitize(url), { duration, type })
