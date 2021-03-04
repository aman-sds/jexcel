// function y(text) {
//     const len = text.length;
//     const forward = ['(', '[', '<'];
//     const revers = [')', ']', '>'];
//     let leftCircle = text.indexOf('(');
//     let rightCircle = text.indexOf(')');
//     let leftTriangle = text.indexOf('<');
//
//     let rightTriangle = text.indexOf('>');
//     let leftSquare = text.indexOf('[');
//     let rightSquare = text.indexOf(']');
// debugger
//     const minIndex = Math.min(leftCircle >= 0 ? leftCircle : len, leftSquare >= 0 ? leftSquare : len, leftTriangle >= 0 ? leftTriangle : len);
//     const maxIndex = Math.max(rightCircle >= 0 ? rightCircle : 0, rightSquare >= 0 ? rightSquare : 0, rightTriangle >= 0 ? rightTriangle : 0);
//
//     if (forward.includes(text[maxIndex]) && forward.indexOf(text[maxIndex]) === revers.indexOf(text[minIndex])){
//         return maxIndex > minIndex && len ? y(text.substring(minIndex+1, maxIndex)) : console.log('1');
//     } else {
//         return console.log('0');
//     }
// }

// function verify(text){
//     const config = {
//         '[': {key: '[', iterate: +1},
//         ']': {key: '[', iterate: -1},
//         '(': {key: '(', iterate: +1},
//         ')': {key: ')', iterate: -1},
//         '<': {key: '<', iterate: +1},
//         '>': {key: '>', iterate: -1},
//     }
//     const acc = {}
//     for (let i = 0; i < text.length; i++){
//         const char = text[i];
//         if (config[char]){
//             const {key, iterate} = config[char];
//             acc[key] = acc[key] + iterate;
//             if () {
//
//
//             }
//         })
//
// }

//
// function y(text) {
//     const brackets = ['(', '[', '<'];
//     const reverseBrackets = [')', ']', '>'];
//     const len = text.length;
//     for (let i = 0; i < len; i++) {
//         const index = brackets.indexOf(text[i]);
//         if (reverseBrackets.includes(text[i])) {
//             return console.log(0);
//         }
//         if (index > -1) {
//             for (let j = len; j > i; j--) {
//                 const reversIndex = reverseBrackets.indexOf(text[j]);
//                 if (brackets.includes(text[j])) {
//                     return console.log(0);
//                 }
//                 if (reversIndex > -1) {
//                     return index === reversIndex ? y(text.substring(i+1, j)) : console.log(0);
//                 }
//
//             }
//         }
//     }
//
//     return console.log(1);
// }

function y(text){
	const brackets = ['(', '[', '<'];
	const bracketsRevers = [')', ']', '>'];
	for (let i = 0; i < text.length; i ++){
		const index = brackets.indexOf(text[i]);
		if (index > -1) {
			const closeBracket = bracketsRevers[index];
			const closeIndex = text.lastIndexOf(closeBracket);
			if (closeIndex && i < closeIndex){
				return y(text.substring(i + 1, closeIndex)) && y(text.substring(closeIndex + 1));
			} else {
				return 0;
			}
		}
	}
	return 1;
}

function verify(text){
	const brackets = ['(', '[', '<'];
	const bracketsRevers = [')', ']', '>'];
	for (let i = 0; i < text.length; i ++){
		const index = brackets.indexOf(text[i]);
		if (index > -1) {
			const closeBracket = bracketsRevers[index];
			const closeIndex = text.lastIndexOf(closeBracket);
			if (closeIndex && i < closeIndex){
				return verify(text.substring(i + 1, closeIndex)) && verify(text.substring(closeIndex + 1));
			} else {
				return 0;
			}
		}
	}
	return 1;
}

console.log(verify("---(++++)----"))//  1
console.log(verify(""))//  1
console.log(verify("before ( middle []) after "))//  1
console.log(verify(") ("))//  0
console.log(verify("<(   >)"))//  0
console.log(verify("(  [  <>  ()  ]  <>  )"))//  1
console.log(verify("   (      [)"))//  0
