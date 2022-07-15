require('dotenv').config()

// returns a promise
const EleventyFetch = (query, duration = '1d', type = 'json') =>
	require('@11ty/eleventy-fetch')(sUrl(query), { duration, type })

const {
	sanityURL: sUrl,
} = query =>
	process.env.sanity_url_full + encodeURIComponent(query.replace(/\s/g, ''))

module.exports = async function () {
	const marxQuery = ext => `[ _type=='bookmark' ${ext} ] | order( _createdAt )`
	// const { result: marx } = await EleventyFetch( marxQ(), '1w' )

	// const marx2021 = marxPre.filter( x => x._createdAt.split('-')[0] === '2021' )
	// const marx2022 = marxPre.filter( x => x._createdAt.split('-')[0] === '2022' )

	// const monthsARR = marx.reduce( ( acc, ea ) => {
	// 	let yearMonth = ea._createdAt.split('-')[0] + '-' + ea._createdAt.split('-')[1]
	// 	return acc.includes(yearMonth) ? acc : [...acc, yearMonth]
	// }, [])

	// let marxPost = {}
	// monthsARR.forEach( x => marxPost[x] = [] )

	// marx.forEach( ea => {
	// 	let entry = {}
	// 	const [year,month,day] = ea._createdAt.split('T')[0].split('-')
	// 	const yearMonth = year+'-'+month
	// 	entry.title = ea.title
	// 	entry.url = ea.url
	// 	entry.datetime = ea._createdAt
	// 	entry.category = ea.category
	// 	marxPost[yearMonth].push(entry)
	// })

	// const marxExt = extra => `[ _type=='bookmark' ${extra} ] | order( _createdAt )`
	const lastWeek = `&& dateTime( _updatedAt ) > dateTime( now() ) - 60*60*24*7`

	return {
		// marx: ({result} = await EleventyFetch( marxQuery(), '1w' )),
		pastWeek: ({ result } = await EleventyFetch(marxQuery(lastWeek))),
	}
}
