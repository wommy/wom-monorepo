const incl_path = x => `./_includes/${x}/index.11ty.js`

module.exports.data = {
  layout: 'with_header/index.njk',
  subtitle: 'inbox',
  list: [
    'apple',
    'banana',
    'carrot',
    'donut',
  ]
}

module.exports.render = async function({ subtitle, list }){
  return `
  ${await this.renderTemplate(`## {{ subtitle }}`, 'njk,md', subtitle)}
  ${await this.renderFile(incl_path('list_data'))}
`
}
