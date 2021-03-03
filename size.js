// Synchronus way
// const sizeOf = require('image-size');
// const dimensions = sizeOf('images/computer.jpg');
// console.log(dimensions.width, dimensions.height);

// Asynchronus way
// const sizeOf = require('image-size');
// sizeOf('images/computer.jpg',function(err,dimensions){
// 	console.log(dimensions.width, dimensions.height);	
// });

// Get image size from a website
const url = require('url');
const http = require('http');

const sizeOf = require('image-size');

const imgUrl = 'http://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60%20100w';

const options = url.parse(imgUrl);

http.get(options, function (response) {
	const chunks = [];
	response.on('data',function(chunk){
		chunks.push(chunk);
	}).on('end',function(){
		const buffer = Buffer.concat(chunks);
		console.log(sizeOf(buffer));
	});
});