var http = require('http');

var PORT = 8080;

var person = require('./person'); 

// var person = [
// 	{
// 	voornaam : 'k1',
// 	achternaam : 'R.',
// 	tel : '06 46833765',
// 	woonplaats : 'Breda'
// }, {
// 	voornaam : 'k2',
// 	achternaam : 'Ra.',
// 	tel : '06 1243531515',
// 	woonplaats : 'Breda'
// 	}
// ]


	http.createServer( function (req, res) {

		res.writeHead(200, { 'Content-Type' : 'application/json' });
		
		res.end( JSON.stringify( person.i18l('uk') ));


	}).listen(PORT);

console.log('Server is running @ port : ' + PORT);	
