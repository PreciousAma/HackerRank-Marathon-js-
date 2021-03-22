const arrayValuesTypes = (Arr) => {
   const newArr = Arr.map((value) => {
        return typeof value });
    console.log(newArr);
} 

arrayValuesTypes(["null", [], null, 1, 7,]);