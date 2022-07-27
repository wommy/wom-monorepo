const escapeHTML = require('../utils/escape_html')
// const trunc = require('../utils/truncate')
const datetimeFormatted = require('../utils/datetimeFormatted')

const style = `<style>
</style>
`
// <td>${datetimeFormatted(mark._createdAt)}</td>
// <td>${mark.category.map(ea => (ea === 'inbox' ? '<button>=></button>' : ea))}</td>
// <td><a href="${mark.url}">${trunc(escapeHTML(mark.title))}</a></td>

module.exports = ({ getSanityMarx }) => `
${style}
<ol>
	${getSanityMarx
		.map(
			mark => `
	<li><details id="${mark._id}"><summary>${datetimeFormatted(
				mark._createdAt,
			)} - ${escapeHTML(mark.title)}</summary><pre>${escapeHTML(
				JSON.stringify(mark, null, 2),
			)}</pre></details>`,
		)
		.join('')}
</ol>`
