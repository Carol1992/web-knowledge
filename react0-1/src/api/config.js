let url = 'http://192.168.1.201:8084'

if(process.env.http_env === 'production') {
	url = 'http://192.168.1.201'
} else if(process.env.http_env === 'hk') {
	url = ''
}

export {
	url
}