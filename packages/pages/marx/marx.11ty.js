module.exports = {
	data: {
		layout: 'with_header/index.html',
		// list: ['apple', 'banana', 'carrot', 'donut'],
	},
	async render(data) {
		// const incl_path = x => `../../components/${x}`
		// return await this.renderFile(incl_path('list_data'))
		return await this.renderFile('../../components/details_summary.11ty.js', data)
	},
}
