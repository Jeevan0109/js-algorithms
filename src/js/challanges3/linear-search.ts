console.log('Linear Search');
/**
 * Pseudocode
 * - This function accepts an array and a value 
 * - Loop through the array and check if the current array elementis equal to the value
 * - If it is, return the index at which the element is found
 * - If the value is never found , return -1
 * 
 */
const linearSearch = (arr:any, val:any) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i
    }
    return -1
}

console.log(linearSearch([1, 2, 3, 4, 5, 6], 6))