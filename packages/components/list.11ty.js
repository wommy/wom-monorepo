const escapeHTML = str =>
	str.replace(
		/[&<>'"]/g,
		tag =>
			({
				'&': '&amp;',
				'<': '&lt;',
				'>': '&gt;',
				"'": '&#39;',
				'"': '&quot;',
			}[tag] || tag),
	)
const trunc = (str, len = 45) =>
	str.length > len ? str.slice(0, len) + '...' : str

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
