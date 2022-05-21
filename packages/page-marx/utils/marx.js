const fetch = require('./eleventy_fetch')
const sanitize = require('./sanitize_url')

const marx = `*[ _type=='bookmark' ] | order( _createdAt )`,
	extend = ext => `*[ _type=='bookmark' ${ext||''} ] | order( _createdAt )`,
	since = time => `&& dateTime( _updatedAt ) > dateTime( now() ) - ${time}`,
	hour = 60*60,
	day = hour*24,
	week = day*7,
	query = marx
;

// console.log(marx.ext(marx.lastWeek))
// console.log(q.extend(q.lastWeek).sanitize())
// console.log(query.extend(query.lastWeek).sanitize)
// console.log( sanitize(query.marx) )
// fetch( sanitize(extend(lastWeek)) ).then(x => console.log(x))
// console.log(week)

// fetch( sanitize(extend(since(day*2))) ).then(x => console.log(x))

fetch(sanitize(extend(since(day)))).then( x => console.log(x) )
