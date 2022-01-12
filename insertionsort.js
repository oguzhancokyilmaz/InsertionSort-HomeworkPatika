let ulDOM = document.querySelector("ul#list")
let liDOM = document.createElement('li')

let sort = [22,27,16,2,18,6] 
console.log(sort)

console.log(insertionSort(sort))

function insertionSort(sort) {
    let n = sort.length;
        for (let i = 1; i < n; i++) {
            let current = sort[i];
            let j = i-1; 
            
            while ((j > -1) && (current < sort[j])) {
                sort[j+1] = sort[j];
                j--;
            }
            sort[j+1] = current;
           
        }
    return sort;
}