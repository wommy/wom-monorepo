require('dotenv').config()
const sanitize = groq => 
	process.env.sanity_path + encodeURIComponent(
		groq.replace(/\s/g, '')
	)

const fetch = (url, duration = '1d', type = 'json') =>
	require('@11ty/eleventy-fetch')( sanitize(url), { duration, type })

const marx = `*[ _type=='bookmark' ] | order( _createdAt )`,
	extend = ext => `*[ _type=='bookmark' ${ext||''} ] | order( _createdAt )`,
	since = time => extend(`&& dateTime( _updatedAt ) > dateTime( now() ) - ${time}`)
	hour = 60*60,
	day = hour*24,
	week = day*7
	// query = marx
;

fetch( since( week ) ).then( x => console.log(x) )
