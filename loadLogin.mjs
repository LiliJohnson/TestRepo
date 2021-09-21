import fetch from 'node-fetch';
globalThis.fetch = fetch;

let callEveryXMilliSeconds = 5;
let url = 'https://api.avaza.com/api/Account';
let tsAppToken1 = '425304-58d279b275020f9e90376e2fe9f4f90cba781bd0';
let tsAppToken2 = '425295-43d8a5b29983a87cab6cb553366e0732072ead8e';
let numberOfTimes = 1;
let limit = 10100;

const runScript = () => {
	if (numberOfTimes > limit) {callAPIs && clearInterval(callAPIs); return;}
	fetch(url, {method: 'GET', headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${tsAppToken}`}})
	.then(response => response.json())
	.then(data => {
			console.log('#', numberOfTimes + '/' + limit);
			numberOfTimes += 1;
			console.log('Success:', data.CurrentServerTimeISO ? data.CurrentServerTimeISO : data);
		})
		.catch((error) => {
			console.error('Error:', error);
		});
}

var callAPIs = setInterval(runScript, callEveryXMilliSeconds);