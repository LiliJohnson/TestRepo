import fetch from 'node-fetch';
globalThis.fetch = fetch;

let callEveryXMilliSeconds = 40;
let url = 'https://api.colonise.com/api/Account';
let tsAppToken = '82402-64984162582de14f2b98a4a6958146fc46ada8b4';
// let tsAppToken = '82404-38231cb555814121d8b9aabc911747cccedaba1e';
let numberOfTimes = 1;
let limit = 1010;

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