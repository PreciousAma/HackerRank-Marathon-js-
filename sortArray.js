const sortByLength = (arr) => {
    console.log(arr);
    const items = [...arr]; 
    items.sort((a,b) => {return b.length - a.length});
    return items;   
}
const result = sortByLength(['apple', 'nigeria','big', 'mneutohpy']);
console.log(result); 
