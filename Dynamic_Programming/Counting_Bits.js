/**
 * @param {number} n
 * @return {number[]}
 */

 var countBits = function(num) {
    if (num === 0) {
        return [0];
    }
    // const results = new Array(num + 1);
    const results = new Uint32Array(num + 1);
    // const results = [];
    results[0] = 0;
    results[1] = 1;
    
    let currentBase = 2;
    let nextBase = 4;
    
    for (let i = 2; i <= num; i++) {
        if (i === nextBase) {
            currentBase = nextBase;
            nextBase = currentBase * 2;
        }
        results[i] = results[i - currentBase] + 1;
    }
    
    return results;
};
