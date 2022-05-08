require('dotenv').config()
const EleventyFetch = require('@11ty/eleventy-fetch')

module.exports = async function () {
  let url = `https://${process.env.sanity_project_id}.api${
    process.env.sanity_cdn && 'cdn'
  }.sanity.io/v${process.env.sanity_today}/data/query/${
    process.env.sanity_dataset
  }?query=${encodeURIComponent("*[_type=='bookmark'] | order(_createdAt desc)")}`

  /* This returns a promise */
  return EleventyFetch(url, {
    duration: '1d', // save for 1 day
    type: 'json', // we’ll parse JSON for you
  })
}
