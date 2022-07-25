module.exports = function (str) {
	const d = new Date(str)
	const i = new Intl.DateTimeFormat('default', {
		month: '2-digit',
		day: '2-digit',
		hour12: false,
		hour: 'numeric',
		minute: 'numeric',
		// second: 'numeric',
		// timeZoneName: 'short',
	}).format(d)
	return `${d.getFullYear()}/${i}`
}
