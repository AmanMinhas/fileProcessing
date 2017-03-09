var fs = require("fs");
var oModes = require("./lib/modes.js");

var strInputFile = './words-input.txt';
var strEncodeUtf8 = 'utf8';

//Async read
fs.readFile(strInputFile, strEncodeUtf8, function(err, strData) {
	if(err) return console.error(err);

	var arrWords = strData.split("\n");
	
	var arrMode1Result = [];
	var arrMode2Result = [];

	arrMode1Result = oModes.mode1(arrWords);
	console.log("Output for Mode 1 : ");
	console.log(arrMode1Result);

	arrMode2Result = oModes.mode2(arrWords);
	console.log("Output for Mode 2 : ");
	console.log(arrMode2Result);
});