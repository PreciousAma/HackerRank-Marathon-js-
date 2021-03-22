
const getMultipliedArr = (Arr) => {
    return Arr.map((value) => value * 2)
};

getMultipliedArr(Arr);



// 2
const Arr = [2, 5, 3];

const getMultipliedArr = (value) => {
    return value * 2;
}

const multipliedArr = Arr.map(getMultipliedArr);

console.log(multipliedArr);


