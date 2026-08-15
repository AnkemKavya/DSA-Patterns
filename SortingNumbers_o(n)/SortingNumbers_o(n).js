let array = [];
function onclickToPush() {
    debugger;
    let number = Number(document.getElementById("txtNumber").value);
    array.push(number);
    document.getElementById("divpush").innerHTML = array;
    document.getElementById("txtNumber").value = "";
}

function onclickToSort() {
    debugger;
    let sorting = array.sort((a, b) => (a - b));
    document.getElementById("divSort").innerHTML = sorting;
}

function onClickToWhileLoop() {
    debugger;
    let target = 9;
    let left = 0;
    let right = array.length - 1;
    let sum = [];
    let count = 0;
    while (left < right) {
        sum = (array[left] + array[right]);
        if(sum == target) {
            left++;
            right--;
            count++;
        }
        else if(sum < target) {
            left++;
        }
        else if(sum > target) {
            right--;
        }
        document.getElementById("divWhileLoop").innerHTML = count;
    }
}