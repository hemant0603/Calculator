function myclick(num) {
    myform.display.value += num;
}
function calculate() {
    try {
        myform.display.value = eval(myform.display.value);
    } catch (error) {
        alert("Syntax Error")
    }
}

function ac() {
    myform.display.value = " ";
}




