module.exports.render = function ({list}) {
	return `<ul>
	${list.map(ea => `<li>${ea}</li>`).join('\n\t')}
</ul>`
}
