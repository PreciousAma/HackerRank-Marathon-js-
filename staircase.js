const staircase = (n) => {
    let staircaseString = "";

    // for(i = 0; i < n; i++) {
    //     staircaseString = staircaseString + " ".repeat(n - (i + 1)) + "#".repeat(i + 1) + "\n";
    // }
    
    for(i = 0; i < n; i++) {
        staircaseString = `${staircaseString}${" ".repeat(n - (i + 1))}${"#".repeat(i + 1)}${"\n"}`;
    }

    console.log(staircaseString);
}

const result1 = staircase(6);
/*
*     #
*    ##
*   ###
*  ####
* #####
*######
*/

const result2 = staircase(3);
/*
*  #
* ##
*###
*/

const result3 = staircase(10);
/*
*         #
*        ##
*       ###
*      ####
*     #####
*    ######
*   #######
*  ########
* #########
*##########
*/