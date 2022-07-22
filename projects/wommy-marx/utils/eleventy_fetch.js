module.exports = (url, duration = '1d', type = 'json') =>
	require('@11ty/eleventy-fetch')( url, { duration, type })
