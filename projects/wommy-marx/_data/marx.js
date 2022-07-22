const cache = require('../utils/index.js')

const extend = ext =>
	`*[ _type=='bookmark' ${ext || ''} ] | order( _createdAt )`

const since = time =>
	extend(`&& dateTime( _updatedAt ) > dateTime( now() ) - ${time}`)

const hour = 60 * 60,
	day = hour * 24,
	week = day * 7

const marx_since = time => cache(since(time)).then(x => x.result)

module.exports = marx_since(day)
	// hour: marx_since(hour),
	// week: marx_since(week),

