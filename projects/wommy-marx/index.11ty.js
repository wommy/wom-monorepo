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
  <h2>${ subtitle }</h2>
  
  ${await this.renderFile( './_includes/list_pure/index.11ty.js', list )}`
}
