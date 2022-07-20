module.exports.render = function ({list}) {
	return `<ul>
	${list.map(ea => `<li>${ea}`).join('\n\t')}
  </ul>
`
}
