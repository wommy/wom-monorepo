require('dotenv').config()
export const sanitize = groq =>
	process.env.sanity_path + encodeURIComponent(groq.replace(/\s/g, ''))

export const cache = (url, duration = '1d', type = 'json') =>
	require('@11ty/eleventy-fetch')(sanitize(url), { duration, type })

// const extend = ext =>
// 	`*[ _type=='bookmark' ${ext || ''} ] | order( _createdAt )`
// const since = time =>
// 	extend(`&& dateTime( _updatedAt ) > dateTime( now() ) - ${time}`)
// const hour = 60 * 60,
// 	day = hour * 24,
// 	week = day * 7

// const marx_since = time => cache(since(time)).then(x => console.log(x.result))
