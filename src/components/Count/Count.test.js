import { countArray } from './Count';

let users = [
{
"gender": "female",
"name": {
"title": "ms",
"first": "joan",
"last": "smith"
},
"location": {
"street": "6351 elgin st",
"city": "redding",
"state": "california",
"postcode": 51581
},
"email": "joan.smith@example.com",
"login": {
"username": "whiteladybug758",
"password": "eileen",
"salt": "GOPNblG2",
"md5": "c53e3aa00449f4c47bd1fdb17fb31a83",
"sha1": "69b43846260a4654740ac995d154399eb79ae8a7",
"sha256": "682398d75ff7b099fdf17ce6a2b732543c036ceae4334d0de964608809de3ea1"
},
"dob": "1951-07-05 16:01:13",
"registered": "2007-08-07 19:13:39",
"phone": "(437)-698-0792",
"cell": "(579)-680-7484",
"id": {
"name": "SSN",
"value": "244-45-6428"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/78.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/78.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/78.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "ms",
"first": "sheila",
"last": "carr"
},
"location": {
"street": "9267 ranchview dr",
"city": "the colony",
"state": "louisiana",
"postcode": 40803
},
"email": "sheila.carr@example.com",
"login": {
"username": "ticklishbear200",
"password": "dogs",
"salt": "VM5Uu7PA",
"md5": "f89a4d7f744b3eab857de838844a90f9",
"sha1": "de79d734c4ec12198583ec7b01b74678b4da5b15",
"sha256": "1b40c47f92f48453caa2d9a6baff0968a3a42e37094b4e5880b4f76372622196"
},
"dob": "1961-10-18 17:48:58",
"registered": "2006-11-30 08:24:17",
"phone": "(828)-006-3859",
"cell": "(518)-278-7242",
"id": {
"name": "SSN",
"value": "461-51-0501"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/67.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/67.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/67.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "miss",
"first": "anne",
"last": "chapman"
},
"location": {
"street": "6867 dane st",
"city": "columbus",
"state": "florida",
"postcode": 74579
},
"email": "anne.chapman@example.com",
"login": {
"username": "lazytiger734",
"password": "phillip",
"salt": "PmuOUd7X",
"md5": "a0761d0955a18abb474ca31a8a82f5df",
"sha1": "aaa1fb65949d6d51a0d74e5b9cd80a9c4eab90aa",
"sha256": "a1755b2b323b6865d48bb5c41efe86c9aca8f3689673e197d7ee5df0f830e783"
},
"dob": "1967-05-22 18:19:32",
"registered": "2003-04-18 15:35:35",
"phone": "(012)-411-9215",
"cell": "(242)-842-0802",
"id": {
"name": "SSN",
"value": "973-22-3742"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/83.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/83.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/83.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "miss",
"first": "emma",
"last": "chavez"
},
"location": {
"street": "5917 plum st",
"city": "celina",
"state": "tennessee",
"postcode": 55243
},
"email": "emma.chavez@example.com",
"login": {
"username": "organiclion867",
"password": "choice",
"salt": "Czbbkjtj",
"md5": "3d601dd79c1bd2d4031c0a2458be4670",
"sha1": "8b2c530d83872773211dd1ddb93d96828d22a2f9",
"sha256": "8fa414e189ed243d269b39a885467ef97a32d06a023565a396e31919b3bb7b39"
},
"dob": "1991-12-06 04:36:30",
"registered": "2006-04-24 15:43:26",
"phone": "(402)-996-7780",
"cell": "(618)-669-7994",
"id": {
"name": "SSN",
"value": "590-23-8534"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/64.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/64.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/64.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "miss",
"first": "wendy",
"last": "spencer"
},
"location": {
"street": "5027 e little york rd",
"city": "irving",
"state": "minnesota",
"postcode": 21620
},
"email": "wendy.spencer@example.com",
"login": {
"username": "silverpeacock259",
"password": "happyday",
"salt": "f4RJdM4L",
"md5": "052d3509748ea4d5988daf36cbb54d7a",
"sha1": "6a138bb928b5aabb57213c2ccde4c29353d474a2",
"sha256": "23055299be2b7a8df0fc75b3320884cd4ebb817920f0760b1ecab000f01e761e"
},
"dob": "1974-12-30 07:35:46",
"registered": "2005-11-23 19:02:59",
"phone": "(613)-551-6424",
"cell": "(679)-061-5463",
"id": {
"name": "SSN",
"value": "673-76-0209"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/9.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/9.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/9.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "ms",
"first": "annette",
"last": "holland"
},
"location": {
"street": "6064 college st",
"city": "lakeland",
"state": "colorado",
"postcode": 86566
},
"email": "annette.holland@example.com",
"login": {
"username": "crazymeercat277",
"password": "melanie",
"salt": "6iqRVxdl",
"md5": "c6c08d2d83a1ef266f074efb166465be",
"sha1": "355e401ad8ebcfbc7f9a5ae5b46b538a875db732",
"sha256": "032ea2198046d2b14e46a6e4393995b94e4f807b8d63fb9d7003805a0ff917f9"
},
"dob": "1951-07-24 08:33:43",
"registered": "2003-06-06 03:13:32",
"phone": "(704)-897-6433",
"cell": "(957)-897-5194",
"id": {
"name": "SSN",
"value": "590-64-4822"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/76.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/76.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/76.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "ms",
"first": "vanessa",
"last": "lowe"
},
"location": {
"street": "5838 hillcrest rd",
"city": "erie",
"state": "illinois",
"postcode": 47360
},
"email": "vanessa.lowe@example.com",
"login": {
"username": "tinyswan457",
"password": "raider",
"salt": "R8FDkKor",
"md5": "88cf3bde9df9fb7e6ae600d80c361eb4",
"sha1": "702d7f6fe1c87c4636041ae3bd144850881e9bd6",
"sha256": "edb88996926e07670b69d1a680385cc2fb7312ccbe008a6ce587828ef990836d"
},
"dob": "1954-06-20 10:14:09",
"registered": "2008-08-18 15:34:03",
"phone": "(870)-643-5685",
"cell": "(440)-336-3868",
"id": {
"name": "SSN",
"value": "469-13-2696"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/31.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/31.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/31.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "regina",
"last": "simpson"
},
"location": {
"street": "2011 prospect rd",
"city": "lewisville",
"state": "indiana",
"postcode": 79700
},
"email": "regina.simpson@example.com",
"login": {
"username": "smallgoose722",
"password": "1029",
"salt": "qLGDj1ks",
"md5": "5ef269e59a160440c6acc847eeb33ebe",
"sha1": "cc134bab328fe4eef136a242f8503d8c9d344744",
"sha256": "d97590093947a3bb4d9a8d4100ce819c774c39e20538ed5d1f70df3148ea0748"
},
"dob": "1989-08-09 08:28:06",
"registered": "2005-04-02 03:07:58",
"phone": "(236)-683-2288",
"cell": "(276)-837-5128",
"id": {
"name": "SSN",
"value": "196-27-5789"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/6.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/6.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/6.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "tiffany",
"last": "scott"
},
"location": {
"street": "1053 daisy dr",
"city": "athens",
"state": "louisiana",
"postcode": 91296
},
"email": "tiffany.scott@example.com",
"login": {
"username": "orangepanda760",
"password": "audi",
"salt": "yweN6J6I",
"md5": "29d23c6d12c9c77cdcf8d4c0c906001c",
"sha1": "088233e81b771f7968a53a37fcef2a8beae561db",
"sha256": "cb5230dece6257c396bfd2ab384f6599318e6fa6f06c09050ca57c49e88538f9"
},
"dob": "1978-07-23 21:07:41",
"registered": "2012-08-12 19:49:46",
"phone": "(139)-495-6146",
"cell": "(270)-896-5616",
"id": {
"name": "SSN",
"value": "125-38-1898"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/34.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/34.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/34.jpg"
},
"nat": "US"
},
{
"gender": "female",
"name": {
"title": "mrs",
"first": "deanna",
"last": "gregory"
},
"location": {
"street": "9191 hillcrest rd",
"city": "stamford",
"state": "delaware",
"postcode": 74935
},
"email": "deanna.gregory@example.com",
"login": {
"username": "tinylion308",
"password": "flyer",
"salt": "2RsXCmDd",
"md5": "d12bc9dfa6c595da1d1b2e4b6286cf1c",
"sha1": "f539944b65147002f766fd283df8696628ec2c6a",
"sha256": "2cae5a17004bfe0315fb67ae654bbbbaaafba04e2afdcb1489a448572b2370e6"
},
"dob": "1953-09-15 04:52:15",
"registered": "2015-04-21 18:04:24",
"phone": "(584)-364-6681",
"cell": "(827)-397-1792",
"id": {
"name": "SSN",
"value": "411-09-5317"
},
"picture": {
"large": "https://randomuser.me/api/portraits/women/38.jpg",
"medium": "https://randomuser.me/api/portraits/med/women/38.jpg",
"thumbnail": "https://randomuser.me/api/portraits/thumb/women/38.jpg"
},
"nat": "US"
}
]

test('counts objects in json array between minimum and maximum age', () => {
  expect(countArray(users, 18, 99)).toBe(10);
});