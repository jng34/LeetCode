/**
 * @param {number[]} arr
 * @return {number}
 */
var maxChunksToSorted = function(arr) {
    // Create prefix and suffix arrays to find chunks
    let prefixMax = -Infinity, suffixMin = Infinity, chunks = 1;
    
    for (let i = 1; i < arr.length; i++) {
        // Compare min of suffix and max of prefix
        // Min(suffix) > Max(prefix) in order to chunk )+1)
        // Update prefixMax
        prefixMax = Math.max(prefixMax, arr[i-1]);
        suffixMin = Math.min(...arr.slice(i));
        if (suffixMin > prefixMax) chunks++;
    }
    
    return chunks;
};