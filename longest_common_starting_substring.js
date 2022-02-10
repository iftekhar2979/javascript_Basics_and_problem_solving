/*function longest_common_starting_substring(arr1){
var arr= arr1.concat().sort();
var a1= arr[0];
var a2= arr[arr.length-1];

var i= 0;

while(i<a1.length && a1.charAt(i)=== a2.charAt(i)) i++;
        return a1.substring(0, i);
}

console.log(longest_common_starting_substring(['go', 'google'])); 

console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 

console.log(longest_common_starting_substring(['ABcd', 'abCd'])); 
*/


const num=10122543;
const str = num.toString();
const result = [str[0]];
  
for(let x=1; x<str.length; x++)
  {
    if((str[x-1]%2 === 0)&&(str[x]%2 === 0))
     {
      result.push('-', str[x]);
     }
    else
     {
      result.push(str[x]);
     }
  }
console.log(result.join(''));
