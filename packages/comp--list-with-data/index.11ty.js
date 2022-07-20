const List = ['apple', 'banana', 'carrot']

module.exports.render = () => `<ul>
	${List.map(	ea => `<li>${ea}</li>`,).join('\n\t')}
</ul>`
