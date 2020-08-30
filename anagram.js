//write a function that accepts two arguments as input'
//check that both arguments are strings.
// write a function that eliminates white spaces in the arguments(strings)
// covert to the strings(arguments) to arrays
// sort the arrays
// convert the arrays back to strings
//check that arguments are equal (anagrams) and return "true".
//return false if arguments are not anagrams.



function isAnagram(stringOne, stringTwo) {

    const stringOne = stringOne.replace(/\s/g, '').toLowerCase();
    const stringTwo = strinTwo.replace(/\s/g, '').toLowerCase();

    return sortString(stringOne) === sortString(stringTwo)
}

function sortString(string) {
    return string.split('').sort().join('');
}

isAnagram();