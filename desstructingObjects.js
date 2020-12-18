const obj = {first: "james", last: "Baker", alias: "JB"};
const {first, last, nickname = "JD" } = obj;

console.log(nickname);