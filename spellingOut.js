const spellOut = (str) => {
    const finalWord = [];
    let currentWord = "";
    for(const s of str) {
        currentWord = currentWord+s;
        finalWord.push(currentWord);
    }
    return finalWord;
}
let result = spellOut("bee");
console.log(result);