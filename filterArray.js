
const filterArray = (Arr) => {
    const numberArray = Arr.filter((value) =>{
           return  typeof value !== "number";
           } 
);
           console.log(numberArray);

};      

filterArray(["me", 1, 4, "6", 0, "p", 7]);