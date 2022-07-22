module.exports.render = ({ list }) => `<ul> ${list
	.map(
		item => `
		<li ${item}>${item}`,
	)
	.join('\t\t')}
	</ul>`
