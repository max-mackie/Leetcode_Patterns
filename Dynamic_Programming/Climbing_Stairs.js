/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {}) {
    // // Tabulisation approach
    let array = Array(n+1).fill(0)
    array[0] = 0;
    array[1] = 1;
    array[2] = 2;

    for(let i=3; i < array.length; i++){
        array[i] = array[i-1] + array[i-2]
    }
    return array[n]

    // // Regresion with momoisation approach
    // if(n in memo) return memo[n]
    // if(n < 1) return 0;
    // if(n === 1) return 1;
    // if(n === 2) return 2;

    // memo[n] = climbStairs(n-1, memo) + climbStairs(n-2, memo);
    // return memo[n]
};
