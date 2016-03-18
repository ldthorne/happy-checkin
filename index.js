'use strict'

const fs = require('fs');
const request = require('request');
const https = require('https');
const oxford = require("project-oxford");
const client = new oxford.Client('e564d5e1c4a542e089428f44d34817e1');
const path = require('path');



const data = {
	path: path.join(__dirname, './index.jpg')
}

client.emotion.analyzeEmotion(data)
.then( response => {
	console.log(response);
})
.catch(console.error.bind(console));




// const options = {
// 	protocol: "https",
// 	hostname: 'api.imgur.com',
// 	path: '/3/image',
//     headers: {
//     	'Content-Type': 'image/jpg'
//         'Authorization': 'Client-ID 01c88b0e4ce9b78'
//     },
//     type: 'POST',
//     data: {
//         'image': 'index.jpg'
//     }
// }