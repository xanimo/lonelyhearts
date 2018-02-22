const user = {
"results": [
{
"gender": "male",
"name": {
"title": "mr",
"first": "jared",
"last": "caldwell"
},
"email": "jared.caldwell@example.com",
"dob": "1953-10-29 22:17:48",
"phone": "(377)-697-2055",
"cell": "(063)-884-2467",
"picture": {
"large": "https://randomuser.me/api/portraits/men/30.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
}
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "rosemary",
"last": "woods"
},
"email": "rosemary.woods@example.com",
"dob": "1949-06-24 18:32:28",
"phone": "(835)-438-5355",
"cell": "(465)-479-8717",
"picture": {
"large": "https://randomuser.me/api/portraits/women/88.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
}
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "mary",
"last": "turner"
},
"email": "mary.turner@example.com",
"dob": "1987-04-21 04:10:56",
"phone": "(916)-685-8429",
"cell": "(249)-621-0392",
"picture": {
"large": "https://randomuser.me/api/portraits/women/62.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "carter",
"last": "harper"
},
"email": "carter.harper@example.com",
"dob": "1946-03-01 08:08:50",
"phone": "(472)-880-8889",
"cell": "(828)-808-4294",
"picture": {
"large": "https://randomuser.me/api/portraits/men/57.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "clarence",
"last": "dixon"
},
"email": "clarence.dixon@example.com",
"dob": "1968-07-13 23:32:00",
"phone": "(238)-269-4504",
"cell": "(742)-137-1368",
"picture": {
"large": "https://randomuser.me/api/portraits/men/18.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "tom",
"last": "hansen"
},
"email": "tom.hansen@example.com",
"dob": "1979-04-06 18:31:23",
"phone": "(253)-723-0153",
"cell": "(361)-225-8389",
"picture": {
"large": "https://randomuser.me/api/portraits/men/6.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "darren",
"last": "johnston"
},
"email": "darren.johnston@example.com",
"dob": "1979-08-29 19:54:51",
"phone": "(511)-189-1611",
"cell": "(037)-048-3884",
"picture": {
"large": "https://randomuser.me/api/portraits/men/64.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
}
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "ethel",
"last": "brewer"
},
"email": "ethel.brewer@example.com",
"dob": "1973-03-28 16:00:12",
"phone": "(069)-122-6828",
"cell": "(559)-526-8306",
"picture": {
"large": "https://randomuser.me/api/portraits/women/72.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "dave",
"last": "west"
},
"email": "dave.west@example.com",
"dob": "1955-05-20 02:17:41",
"phone": "(061)-309-7578",
"cell": "(581)-090-1367",
"picture": {
"large": "https://randomuser.me/api/portraits/men/0.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
}
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "roberto",
"last": "stevens"
},
"email": "roberto.stevens@example.com",
"dob": "1948-10-05 23:55:17",
"phone": "(440)-487-6392",
"cell": "(396)-648-0298",
"picture": {
"large": "https://randomuser.me/api/portraits/men/24.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
}
}
],
"info": {
"seed": "123",
"results": 10,
"page": 1,
"version": "1.1"
}
}

export default function request(url) {
	return new Promise((resolve, reject) => {
		const user = url.substr('/results/'.length), 10;
		process.nextTick(
			() =>
			results[name]
			? resolve(users[name])
			: reject ({
				error: 'User with ' + name + ' not found.',
			}),
		);
	});
}