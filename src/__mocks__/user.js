import request from './request';

export function getUserName(name) {
	return request('/users/' + name).then(user => user.name);
}