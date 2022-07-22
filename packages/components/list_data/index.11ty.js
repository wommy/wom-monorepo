const list = ['apple', 'banana', 'carrot']

module.exports.render = () => `<ul>
	${list.map(ea => `<li ${ea}>${ea}`).join('\n\t')}
  </ul>`
