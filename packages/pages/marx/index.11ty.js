module.exports = {
	data: {
		layout: 'with_header/index.html',
		list: ['apple', 'banana', 'carrot', 'donut'],
	},
	async render({ list }) {
		const incl_path = x => `./_includes/${x}/index.11ty.js`
		// return await this.renderFile(incl_path('list_data'))
		return await this.renderFile(incl_path('list'), list)
	},
}
