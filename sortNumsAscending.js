const sortNumsAscending = (arr) => {
    if (Array.isArray(arr) && arr.length > 0 ) {
     let sorted = arr.sort((a,b) => a - b);
        return sorted;
}
     return [];  
    
}

console.log(sortNumsAscending(null));
