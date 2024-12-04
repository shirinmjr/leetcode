/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let zeroCount = 0;
    let zeroIndex = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[zeroIndex] = nums[i];
            zeroIndex++
        }
    }
    console.log(nums)
   for (let i = zeroIndex; i < nums.length; i++) {
        nums[i] = 0; // Fill remaining positions with zeros
    }
};