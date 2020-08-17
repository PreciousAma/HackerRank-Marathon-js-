// create a function that accept strings as Input.
// use the toLowerCase method to turn all str inputs to lower case.
// create a funtion that checks for non-alphanumeric character and eliminate them.
// create a function that checks for a possible palindrome input.



function checkPalindrome(str) {
    const nonAlpanumeric = str.toLowerCase().replace(/[\W_]/g, '');  
    for(let i=0; i < nonAlpanumeric.length / 2; i++ ) {
        if (nonAlpanumeric[i] !== nonAlpanumeric[nonAlpanumeric.length - 1 - i])  {
         return "this is not a palindrone"   
        }
    }
    return "this is a panlindrome"
}
checkPalindrome();

function checkPalindrome(str) {
    const nonAlpanumeric = str.toLowerCase().replace(/[\W_]/g, '');
    const checkArray = nonAlpanumeric.split(''); 
 
    for (let i of checkArray) {
        if (i !== checkArray.pop()) {
            return false;
        }
    } 
    return true;        
         
}
checkPalindrome('bo b');

