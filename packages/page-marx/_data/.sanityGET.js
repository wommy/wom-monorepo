require('dotenv').config()

const client = require('@sanity/client')({
  projectId: process.env.sanity_project_id,
  dataset: process.env.sanity_dataset,
  apiVersion: '2022-05-08',
  token: process.env.sanity_token,
  useCdn: true,
})

/*** api request schema
  * 
  * _createdAt
  * _id
  * _rev
  * _type
  * _updatedAt
  * category[]
  * title
  * url
  *
  * */

module.exports = async () =>
  await client.fetch(`*[_type=='bookmark'] | order(_createdAt desc)`)
