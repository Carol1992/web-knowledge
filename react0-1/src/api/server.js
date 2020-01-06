import axios from './axios'
import {api} from './api'
const FileDownload = require('js-file-download');

export const post = (path, param) => axios.post(api[path], param)

export const get = (path, param) => axios.get(api[path], {params: param})

export const postForm = (path, formData) => axios({
	method: 'post',
	url: api[path],
	config: { headers: {'Content-Type': 'multipart/form-data' }},
	data: formData
})

export const getFile = (path, param) => axios.get(api[path], {params: param}).then(response => {
	FileDownload(response, 'reg_code.csv');
})