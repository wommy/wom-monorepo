module.exports = ({ list }) =>
	`<ul>${list.map(
		item => `
		<li ${item}>${item}`
	).join('')}
	</ul>`
