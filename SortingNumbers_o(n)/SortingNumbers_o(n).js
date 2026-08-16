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

function onClickToAddWhileLoop() {
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
        document.getElementById("divAdd").innerHTML = count;
    }
}

function onClickToSubWhileLoop() {
    debugger;
    let target = 0;
    let left = 0;
    let right = array.length - 1;
    let sub = [];
    let count = 0;
    while(left < right){
        sub = ((array[right] - array[left]));
        if(sub == target){
            left++;
            right--;
            count++;
        }
        else if(sub < target){
            left++;
        }
        else if(sub > target){
            right--;
        }
        document.getElementById("divSub").innerHTML = count;
    }
}

function onClickToMulWhileLoop() {
    debugger;
    let target = 10;
    let left = 0;
    let right = array.length - 1;
    let mul = [];
    let count = 0;
    while(left < right){
        mul = ((array[left] * array[right]));
        if(mul == target){
            left++;
            right--;
            count++;
        }
        else if(mul < target) {
            left++;
        }
        else if(mul > target){
            right--;
        }
        document.getElementById("divMul").innerHTML = count;
    }
}