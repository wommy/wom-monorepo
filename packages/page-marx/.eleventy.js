require('dotenv').config()

const query = `[_type=='bookmark'] |order(_createdAt)`
const url = `https://${process.env.sanity_url}?query=*${encodeURIComponent(query)}`

/* This returns a promise */
const EleventyFetch = require('@11ty/eleventy-fetch')(url, {
		duration: '4w', // save for 1 day
		type: 'json', // we’ll parse JSON for you
	})

module.exports = function (eleventyConfig) {
	eleventyConfig.addGlobalData( 'fetchMarx', async () => {
		const { result: marx } = await EleventyFetch
		return marx
	})
}
