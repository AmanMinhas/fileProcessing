
function mode1(arrWords) {
	var arrResult = [];
	var arrVowel = ['a','e','i','o','u'];
	
	//Check for Words starting with a vowel and discard duplicates
	arrResult = arrWords.filter(function(strWord, idx, arrSelf) {	
		//Check if duplicate 
		if(idx !== arrSelf.indexOf(strWord)) return false;

		return arrVowel.some(function(strVowel) {
			return strWord.charAt(0).toLowerCase() == strVowel;
		}) 
	});

	//Sort by length. If length is equal, sort by character.
	arrResult.sort(function(str1,str2) {
		return str1.length - str2.length || str1.localeCompare(str2);
	});
	return arrResult;
}

function mode2(arrWords) {
	var numLines = arrWords.length;

	var arrResult = [];
	var strException = "x";

	var numFirstNonException;
	var numPrependCount = 0;

	arrWords.map(function(strWord, idx) {
		if( strWord.toLowerCase().includes(strException) ) {
			//String contains strException("x")
			if (typeof numFirstNonException == "undefined") {
				numPrependCount++;
			} else {
				// arrResult.push(strWord + "=>" + numFirstNonException)
				arrResult.push(numFirstNonException);
			}

		} else {
			var numPower = Math.pow(numLines,strWord.length);
			if (typeof numFirstNonException == "undefined") {
				numFirstNonException = numPower;
			} 
			// arrResult.push(strWord + "=>" + numPower)
			arrResult.push(numPower);
		}
	});

	for(var i=0; i<numPrependCount; i++) {
		arrResult.unshift(numFirstNonException);
	}

	return arrResult;
}

module.exports = {
	mode1,
	mode2
};