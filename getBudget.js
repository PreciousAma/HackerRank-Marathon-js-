const getBudgets = (arr) => {
    return arr
        .map(arr => arr.budget)
        .reduce((acc, curr) => acc + curr);
}
let result = getBudgets([{name: "john", age: 21, budget: 23000},
                        {name: "john", age: 21, budget: 23000},
                        {name: "john", age: 21, budget: 23000}]);
console.log("total budget" + " "  +  result);