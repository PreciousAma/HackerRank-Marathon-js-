const toNumberArray = (Arr) => {
    return Arr.map((value) => Number(value))
};

toNumberArray(["1", "2", "4", "5"]);