module.exports = async ()=> await require('@sanity/client')({
  projectId: '4mxx5zpk',
  dataset: 'production',
  apiVersion: '2022-07-12',
  token: 'skpTJxJLX0emUzs1wmItmhiIxjV3SbGgQajPqsFBtR4eksJsJgInz1qCtxYH9xOUNC6giFOjtZ8Bz0PH9HrLGVHjgiojkQwK1IDAiw3AtvGNVr1QoKdB4B8YfZK52D4gzDsxSxzklDnGOqVP8rkhNq4KxCwQkxPCm09fsUYvMCLiSjxZjRXT',
  useCdn: true,
}).fetch(`*[_type=='bookmark'] | order(_createdAt asc)`)
