module.exports = require('@sanity/client')({
	projectId: '4mxx5zpk',
	dataset: 'production',
	apiVersion: '2022-07-21',
	token:
		'sk7axbQaIMRo8P6Y8Hx5RFGu4MY7w1bNOeD5uTujlr5pLRIUGypkpVlmaSfwwmwTuWnOu5ZAzwv6IeIwM5yUPwQe4jwaIgoYzX6J3mLkbNdsfjibYmUgQKzaP3DTCBeK0ngcGEUoj8CPZlFfWio11jLwM1eiVorhBQhd2vJVmDkUoHoQQaG3',
	useCdn: true,
})
	.fetch(`*[_type=='bookmark']|order(_createdAt desc)`)
	.then( marx => console.log(marx) )
