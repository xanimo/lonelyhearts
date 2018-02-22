function getRandomUsers(userCount, seed, gender) {
  const promise = fetch(`https://randomuser.me/api/?results=10&nat=US&seed=123&gender=female`)
    .then(response => {
      if(response.status >= 400) {
        throw `Response invalid ( ${response.status} )`;
        return;
      }
      return response.json();
    })
    .then(({results}) => {
        return (
          results
          );
    })
    .catch(error => {
      console.log(error);
    });
  return promise;
}

const users = [
{
"gender": "male",
"name": {
"title": "mr",
"first": "jared",
"last": "caldwell"
},
"location": {
"street": "8788 w pecan st",
"city": "tempe",
"state": "new york",
"postcode": 84922
},
"email": "jared.caldwell@example.com",
"login": {
"username": "purpletiger687",
"password": "sylveste",
"salt": "SgYAlckP",
"md5": "73ccbbda792de0679b55f3dfe755d454",
"sha1": "650beb6739c1496944889b9f040ba9997aa83c9f",
"sha256": "a7cffeb6531a32841d6e0d91483b4e88b873b553da39e453755e4c912ba0d334"
},
"dob": "1953-10-29 22:17:48",
"registered": "2008-03-16 00:29:16",
"phone": "(377)-697-2055",
"cell": "(063)-884-2467",
"id": {
"name": "SSN",
"value": "387-73-4830"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/30.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/30.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/30.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "rosemary",
"last": "woods"
},
"location": {
"street": "2315 n stelling rd",
"city": "joliet",
"state": "kansas",
"postcode": 52700
},
"email": "rosemary.woods@example.com",
"login": {
"username": "greensnake413",
"password": "earthlink",
"salt": "IEWkTc8m",
"md5": "aa4c7c6b1a2a54b2555f689fa92e92d4",
"sha1": "37df50e7200849f9847d0936d6996a651a5c4be0",
"sha256": "4bc1143ae91b9427a3daf5acc3c0b267e6e37f905a684f45cfc9726a84e025fd"
},
"dob": "1949-06-24 18:32:28",
"registered": "2013-12-17 08:27:59",
"phone": "(835)-438-5355",
"cell": "(465)-479-8717",
"id": {
"name": "SSN",
"value": "289-64-8542"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/88.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/88.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/88.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "mary",
"last": "turner"
},
"location": {
"street": "2847 cackson st",
"city": "greeley",
"state": "missouri",
"postcode": 79035
},
"email": "mary.turner@example.com",
"login": {
"username": "purpleleopard393",
"password": "sister",
"salt": "BaX2G8eR",
"md5": "e2d214190f763331e36fa5df94a147f7",
"sha1": "07af031b56687c45b537a8e36b02a78ee9f91271",
"sha256": "3686240d74604e99ef79b6dc01f087f32f1e44248557f19897dcced78d1306ae"
},
"dob": "1987-04-21 04:10:56",
"registered": "2007-11-29 15:57:26",
"phone": "(916)-685-8429",
"cell": "(249)-621-0392",
"id": {
"name": "SSN",
"value": "227-12-7541"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/62.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/62.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/62.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "carter",
"last": "harper"
},
"location": {
"street": "3011 pecan acres ln",
"city": "oceanside",
"state": "idaho",
"postcode": 18223
},
"email": "carter.harper@example.com",
"login": {
"username": "bigwolf223",
"password": "nokia",
"salt": "1ThNlncI",
"md5": "6b4666298553d4e1fd58ea62c1c0a838",
"sha1": "d169b6d39a80a19bc0e76642650fc765cda98804",
"sha256": "b8d91e51488d4e4b75374b65764d00c2c54eafe4188a5128463aa5aa7bffab87"
},
"dob": "1946-03-01 08:08:50",
"registered": "2008-08-17 04:11:58",
"phone": "(472)-880-8889",
"cell": "(828)-808-4294",
"id": {
"name": "SSN",
"value": "057-29-3679"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/57.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/57.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/57.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "clarence",
"last": "dixon"
},
"location": {
"street": "3631 country club rd",
"city": "palmdale",
"state": "pennsylvania",
"postcode": 73548
},
"email": "clarence.dixon@example.com",
"login": {
"username": "tinykoala492",
"password": "chacha",
"salt": "ANrdn87E",
"md5": "daf3ef9f4cf37cb64bb2708275a12e94",
"sha1": "c7f6dffc54b12c6fde802415a27a0fd1675f18b4",
"sha256": "a3f1e7ea30365fe8c65b8b1c262afec25364ec93f9432953a65e6fb4c62f6595"
},
"dob": "1968-07-13 23:32:00",
"registered": "2016-01-13 05:57:23",
"phone": "(238)-269-4504",
"cell": "(742)-137-1368",
"id": {
"name": "SSN",
"value": "012-98-2158"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/18.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "tom",
"last": "hansen"
},
"location": {
"street": "3006 walnut hill ln",
"city": "reno",
"state": "maryland",
"postcode": 74941
},
"email": "tom.hansen@example.com",
"login": {
"username": "lazygorilla208",
"password": "micron",
"salt": "zEz8TJI6",
"md5": "e2b59bfe506459c8d58288c6e64572b2",
"sha1": "ca8cbc25d94be2e3ec5877e93b3428f793af58f0",
"sha256": "48e400490116fd1b3b6e76c3cf823b303da9f144dd37ea03c015be2e997b6ae1"
},
"dob": "1979-04-06 18:31:23",
"registered": "2003-11-25 07:11:14",
"phone": "(253)-723-0153",
"cell": "(361)-225-8389",
"id": {
"name": "SSN",
"value": "753-12-0319"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/6.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/6.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/6.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "darren",
"last": "johnston"
},
"location": {
"street": "8712 hillcrest rd",
"city": "miami gardens",
"state": "tennessee",
"postcode": 80144
},
"email": "darren.johnston@example.com",
"login": {
"username": "bluemeercat210",
"password": "terrier",
"salt": "DbcXWDI6",
"md5": "a77510f98fb65af8a6d4bdf98ea5e427",
"sha1": "2a265809979b9d55962a47cfc08ead575d1b03ef",
"sha256": "fc539a742ce5129b094825fd87acd4a8e0182698b281aa5871dd1fe68388a402"
},
"dob": "1979-08-29 19:54:51",
"registered": "2009-04-21 07:13:00",
"phone": "(511)-189-1611",
"cell": "(037)-048-3884",
"id": {
"name": "SSN",
"value": "814-96-1941"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/64.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/64.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/64.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "ethel",
"last": "brewer"
},
"location": {
"street": "8998 fincher rd",
"city": "wilmington",
"state": "new york",
"postcode": 14246
},
"email": "ethel.brewer@example.com",
"login": {
"username": "silvercat848",
"password": "henry",
"salt": "ov4oJjYQ",
"md5": "d12f33c8f26da935b563aa7f452db12d",
"sha1": "cb7856c379f89a0073ecf3b44971dff58bd56140",
"sha256": "d50f45f3d5111b4dea7b56f3ac5726a9622e5535085cc0e4dc99aedc4c9224de"
},
"dob": "1973-03-28 16:00:12",
"registered": "2009-12-07 19:39:52",
"phone": "(069)-122-6828",
"cell": "(559)-526-8306",
"id": {
"name": "SSN",
"value": "430-75-5669"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/72.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/72.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/72.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "dave",
"last": "west"
},
"location": {
"street": "2113 mcclellan rd",
"city": "springfield",
"state": "north dakota",
"postcode": 80426
},
"email": "dave.west@example.com",
"login": {
"username": "organicpeacock765",
"password": "whisky",
"salt": "kLqDpRQD",
"md5": "79ff3dc9d87fc205655c0a82f3acce6e",
"sha1": "6fb08693b7a0691b9bfcc896deed58fd297e0d32",
"sha256": "79dd3c282441b7e3ad19a1e220553d967ba07b85db2207f2f3e8e12d62b28ede"
},
"dob": "1955-05-20 02:17:41",
"registered": "2012-01-12 01:49:23",
"phone": "(061)-309-7578",
"cell": "(581)-090-1367",
"id": {
"name": "SSN",
"value": "911-18-4220"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/0.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/0.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/0.jpg"
},
"nat": "US"
},
{
"gender": "male",
"name": {
"title": "mr",
"first": "roberto",
"last": "stevens"
},
"location": {
"street": "1379 plum st",
"city": "duncanville",
"state": "maryland",
"postcode": 61048
},
"email": "roberto.stevens@example.com",
"login": {
"username": "blackgorilla630",
"password": "golden",
"salt": "bAL2Jh5r",
"md5": "1c2028159e8bd1eebcc534cc8627d4ee",
"sha1": "5837bf03c9e98516d6a079c96f1281678c2644cc",
"sha256": "adbe8f69c1ddae54e06ca1d76976a57ca4b44d317a730e8450682545c86f4855"
},
"dob": "1948-10-05 23:55:17",
"registered": "2014-02-15 17:29:05",
"phone": "(440)-487-6392",
"cell": "(396)-648-0298",
"id": {
"name": "SSN",
"value": "755-07-0932"
},
"picture": {
"large": "https://randomuser.me/api/portraits/men/24.jpg",
"medium": "https://randomuser.me/api/portraits/med/men/24.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/men/24.jpg"
},
"nat": "US"
}
]

// The assertion for a promise must be returned.
it('works with promises', () => {
	expect.assertions(1);
	return getRandomUsers().then(data => expect(data).toEqual(users));
});

// works with resolves
it('works with resolves', () => {
	expect.assertions(1);
	return expect(getRandomUsers()).resolves.toEqual(users);
});


// async/await can be used.
it('works with async/await', async () => {
	expect.assertions(1);
	const data = await getRandomUsers();
	expect(data).toEqual(users);
});

// async/await can also be used with `.resolves`.
it('works with async/await and resolves', async () => {
	expect.assertions(1);
	await expect(getRandomUsers()).resolves.toEqual(users);
});

// // Testing for async errors using Promises.catch.
// test('tests error with promises', async () => {
// 	expect.assertions(1);
// 	return getRandomUsers(2).catch(error =>
// 		expect(error).toEqual({
// 			error: 'User with 2 not found.',
// 		}),
// 	);
// });