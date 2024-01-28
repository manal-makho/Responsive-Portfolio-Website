/*it's done after creating a map to store the indices of elements, and Calculate the complement needed to reach the target,
with checking each element if the complement is already in the Map, and add the result to an array
*/

function twoSum(nums, target) {
    const numIndices = new Map();

    
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (numIndices.has(complement)) {
            return [numIndices.get(complement), i];
        }
        numIndices.set(nums[i], i);
    }

    return [];
}

// The element
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 
