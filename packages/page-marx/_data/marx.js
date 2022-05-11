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

	// console.log('==========')
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
	// console.log( ' --- articles : ', marx2021.length, ',', marx2022.length )
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
	const monthsARR = marxPre.reduce( ( acc, x ) => {
		const yearMonth = x._createdAt.split('-')[0] + '-' + x._createdAt.split('-')[1]
		// const month = x._createdAt.split('-')[1]
		return acc.includes(yearMonth) ? acc : [...acc, yearMonth] 
	}, [])
	// console.log(' --- year/month : ', monthsARR)
	// console.log( monthsARR )
	let marxPost = {}
	monthsARR.forEach( x => {
		marxPost[x] = []
	} )

	// console.log(marxPost)

	// console.log(marxPre[0])
	marxPre.forEach( ea => {
		let entry = {}
		// entry.date = ea._createdAt.split('T')[0]
		// entry.time = ea._createdAt.split('T')[1]
		const [year,month,day] = ea._createdAt.split('T')[0].split('-')
		const yearMonth = year+'-'+month
		entry.title = ea.title
		entry.url = ea.url
		entry.datetime = ea._createdAt
		entry.category = ea.category

		// foo[yearMonth].push(yearMonthDay+'--'+ea.title) 
		marxPost[yearMonth].push(entry) 
	})
	// console.log(' --- year/month : ', monthsARR)
	// console.log( monthsARR )
	// let foo = {}
	// monthsARR.forEach( x => {
	// 	foo[x] = []
	// } )

	// Object.keys(marxPost).forEach( ea => console.log(ea+': '+marxPost[ea].length ) )

	// console.log(marxPost['2021-09'].length)

	// marxPre.forEach( x => {
	// 	const [ year, month ] = x._createdAt.split('-')
	// 	console.log( year+'-'+month )
	// })

	// const marx = [ marx2022, marx2021 ]
	// console.log( marx )
	// console.log('==========')
	return marxPost
}

















































