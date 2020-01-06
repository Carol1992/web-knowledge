import Mock from 'mockjs';
import {url} from '../src/api/config.js'
import {api} from '../src/api/api.js'

function req(name) {
	return RegExp(url + api[name] + ".*")
}

Mock.mock(req('login'), {
	code: 0
});

Mock.mock(req('getUserInfo'), {
	code: 0,
	user_id: '@id',
	user_name: '@cname',
	intro: '@word(20)'
});
