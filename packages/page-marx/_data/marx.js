require('dotenv').config()

/* This returns a promise */
const EleventyFetch = url =>
	require('@11ty/eleventy-fetch')(url, {
		duration: '4w', // save for 1 day
		type: 'json', // we’ll parse JSON for you
	})

const query = `[_type=='bookmark'] |order(_createdAt)`
const urlMarx = `${process.env.sanity_url_full}${encodeURIComponent(query)}`

module.exports = async function () {
	const { result: marxPre } = await EleventyFetch(urlMarx)

	console.log('==========')
	// const foo = marxPre[0]
	// console.log(foo._createdAt)
	// console.log('----------')
	// const bar = foo._createdAt.slice(0,7).split('-')
	// console.log(bar)
	// console.log('year: '+bar[0])
	// console.log('month: '+bar[1])

	// console.log('----------')
	const marx2021 = marxPre.filter( x => x._createdAt.split('-')[0] === '2021' )
	const marx2022 = marxPre.filter( x => x._createdAt.split('-')[0] === '2022' )
	// console.log( marx2021.length, ',', marx2022.length )
	// console.log('----------')

	// console.log( marx2021[0] )
	// const monthsARR = marxPre.reduce( x => x._createdAt.split('-')[1], [] )
		// console.log(
		// 	month, 
		// 	acc, 
		// 	acc.includes(month), 
		// 	acc.includes(month) ? acc : [...acc, x] 
		// )
	// marx2021.indexOf(month) === i
	// marx2021.indexOf(x._createdAt.split('-')[1]) === i

// reduce
	// const monthsARR = marx2021.reduce( ( acc, x ) => {
	// 	const month = x._createdAt.split('-')[1]
	// 	return acc.includes(month) ? acc : [...acc, month] 
	// }, [])
	// console.log( monthsARR )


	console.log('- months -')
	// const marx = [ marx2022, marx2021 ]
	// console.log( marx )
	console.log('==========')
	// return { marx }
}
