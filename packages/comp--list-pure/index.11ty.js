module.exports.render = function ({list}) {
	return `<ul>
	${list.map(ea => `<li key="${ea}">${ea}`).join('\n\t')}
  </ul>
`
}
