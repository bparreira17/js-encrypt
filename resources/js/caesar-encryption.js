//It's a example of caesar-encryption, if you want more information visit the link:
//https://learncryptography.com/classical-encryption/caesar-cipher
//Tks :)
var text = prompt("Input your text here:");
text.split('');
function cesar(txt) {
    var alfa = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
	var text2 = [];	
	for (var j=0; j <= txt.length; j++) {
			for (var i=0;i<=alfa.length; i++) {
				if(alfa[i]===text[j]){
					text2.push(alfa[i+3]);
			}
		}
	}
	return text2;
}
console.log(cesar(text).toString());