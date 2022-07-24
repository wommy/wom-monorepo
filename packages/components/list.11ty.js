const escapeHTML = require('../utils/escape_html')
const trunc = require('../utils/truncate')

// ${['A', 'B', 'C'].map(L => `<button>${L}</button>`).join('')}

module.exports = ({ getSanityMarx }) => `
<style>
	table {
		table-layout: fixed;
		border-collapse: collapse;
		margin: 0 auto;
	}
	tr > th:last-child {
		padding-right: 50%;
	}
	th, td {
		padding: 3px 5px;
	}
</style>

<table>
	<thead>
		<tr>${['cat', 'day', 'form', 'title'].map(x => `<th>${x}</th>`).join('')}</tr>
	</thead>
	<tbody>${getSanityMarx
		.map(
			({ _id, _createdAt, category, url, title }) => `
		<tr id="${_id}"><td>${category.map(ea => (ea === 'inbox' ? '' : ea))}</td><td>${
				_createdAt.split('T')[0]
			}</td><td></td><td><a href="${url}">${trunc(
				escapeHTML(title),
			)}</a></td></tr>`,
		)
		.join('')}
	</tbody>
</table>`
