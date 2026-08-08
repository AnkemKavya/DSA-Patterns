let array = [];
let sum = [];
let count = 0;
function onClickToAdd() {
    debugger;
    let number = Number(document.getElementById("txtArray").value);
    array.push(number);
    document.getElementById("divAdd").innerHTML = array;
    document.getElementById("txtArray").value = null;
}

function onClickSumArray() {
    debugger;
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            sum.push(array[i] + array[j]);
            if ((array[i] + array[j]) == 5) {
                count++;
            }
        }
    }

    document.getElementById("divSumArray").innerHTML = sum;
    alert(count);
}