//It's a example of caesar-encryption, if you want more information visit the link:
//https://learncryptography.com/classical-encryption/caesar-cipher
//Tks :)
var text = prompt("Digite seu texto:");
//Transform text in array.
text.split('');
var alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",];
//Function to crypt the text:
function cryptCesar(txt) {
	var txt2 = [];	
	for (var j=0; j <= txt.length; j++) {
			for (var i=0;i<=alfa.length; i++) {
				if(alfa[i]===text[j]){
					txt2.push(alfa[i+3]);
			}
		}
	}
	return txt2;
}
//Function to decryptCesar the text:
function decryptCesar(txt) {
	var txt3 = [];	
	for (var j=0; j <= txt.length; j++) {
			for (var i=0;i<=alfa.length; i++) {
				if(alfa[i]===text[j]){
					txt3.push(alfa[i-3]);
			}
		}
	}
	return txt3;
}
//Console to return text:
console.log(cryptCesar(text).toString());
//If you want to decrypt cesar cipher use this:
//console.log(decryptCesar(text).toString());