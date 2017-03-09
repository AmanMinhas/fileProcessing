var expect = require('chai').expect;
var oModes = require('./../lib/modes.js');

var mode1 = oModes.mode1;
var mode2 = oModes.mode2;

describe('Modes', function() {

	describe('#mode1()',function() {
			
		it('it should only include words starting with vowels', function() {
			var arrTest = ["abc","xyz","unicorn"];
			var arrResult = mode1(arrTest);
			expect(arrResult).to.eql(["abc","unicorn"]);
		})

		it('it should sort words by length', function() {
			var arrTest = ["aaaaa","aa","aaa","a"];
			var arrResult = mode1(arrTest);
			expect(arrResult).to.eql(["a","aa","aaa","aaaaa"]);	
		});

		it('it should sort words of equal length alphabetically', function() {
			var arrTest = ["aabc","aacb"];
			var arrResult = mode1(arrTest);
			expect(arrResult).to.eql(["aabc","aacb"]);
		})
	});

	describe('#mode2()',function() {

		it('it should return number of lines to the power length of word as response to each word', function() {
			var arrTest = ["aa","abc","abcd"];
			var arrLength = arrTest.length;
			
			var arrResult = oModes.mode2(arrTest);

			expect(arrResult).to.eql([
				Math.pow(arrLength,2),
				Math.pow(arrLength,3),
				Math.pow(arrLength,4)
			]);
		});

		it('it should return number of lines to the power length of 1st word without x for words with x', function() {
			var arrTest = ["aa","abc","abcx"];
			var arrLength = arrTest.length;
			
			var arrResult = oModes.mode2(arrTest);

			expect(arrResult).to.eql([
				Math.pow(arrLength,2),
				Math.pow(arrLength,3),
				Math.pow(arrLength,2)
			]);

			arrTest = ["ax","abc","abcd"];
			arrLength = arrTest.length;

			arrResult = oModes.mode2(arrTest);

			expect(arrResult).to.eql([
				Math.pow(arrLength,3),
				Math.pow(arrLength,3),
				Math.pow(arrLength,4)
			]);
		})

	});
});