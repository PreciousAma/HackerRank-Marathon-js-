const findIndex = (arr, value ) => {
   const filtered = arr.findIndex((currentvalue) => {
      return currentvalue === value;
    });

    console.log(filtered);
};

findIndex(["fgh", "wer", "tmk", "stv"], "fgh")