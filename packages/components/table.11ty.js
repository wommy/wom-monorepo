const escapeHTML = require('../utils/escape_html')
const trunc = require('../utils/truncate')
const datetimeFormatted = require('../utils/datetimeFormatted')

// ${['A', 'B', 'C'].map(L => `<button>${L}</button>`).join('')}

const style = `<style>
	table {
		table-layout: fixed;
		border-collapse: collapse;
		margin: 0 auto;
	}
	th:last-child {
		padding-right: 50%;
	}
	th, td {
		padding: 3px 5px;
	}
	td:nth-child(2) {
		text-align: center;
	}
</style>
`

module.exports = ({ getSanityMarx }) => `
${style}
<table>
	<thead>
		<tr>${['datetime', 'category', 'title'].map(x => `<th>${x}</th>`).join('')}</tr>
	</thead>
	<tbody>${getSanityMarx
		.map(
			({ _id, _createdAt, title, url, category }) => `
		<tr id="${_id}">
			<td>${datetimeFormatted(_createdAt)}</td>
			<td>${category.map(ea =>
				ea === 'inbox' ? '<button>=></button>' : ea,
			)}</td>
			<td><a href="${url}">${trunc(escapeHTML(title))}</a></td>
		</tr>`,
		)
		.join('')}
	</tbody>
</table>`
