module.exports = (str, len = 45) =>
	str.length > len ? str.slice(0, len) + '...' : str
