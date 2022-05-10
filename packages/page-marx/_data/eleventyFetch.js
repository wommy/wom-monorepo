require('dotenv').config()

/* This returns a promise */
const EleventyFetch = url =>
  require('@11ty/eleventy-fetch')(url, {
    duration: '1d', // save for 1 day
    type: 'json', // we’ll parse JSON for you
  })

const year2021 = `&&( dateTime(_createdAt) < dateTime('2022-01-01T00:00:00Z') )`
const since2022 = `&&( dateTime(_createdAt) >= dateTime('2022-01-01T00:00:00Z') )`

const query = ext => `[_type=='bookmark'${ext}] |order(_createdAt)`
const encoded = q => encodeURIComponent(q)

const url2022 = `https://${process.env.sanity_url}?query=*${encoded(query(since2022))}`
const url2021 = `https://${process.env.sanity_url}?query=*${encoded(query(year2021))}`

module.exports = async function () {
  const { result: thisYear } = await EleventyFetch(url2022)
  const { result: lastYear } = await EleventyFetch(url2021)
  return {
    thisYear,
    lastYear,
    // recent:
    // archive:
  }
}
