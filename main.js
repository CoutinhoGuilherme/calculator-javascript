
//function to clear screen when C is pressed
function clearScreen() {
    document.getElementById('input').value = '';
}

//function to display buttons values
function liveScreen(value){
    let res = document.getElementById('input');
    if (res.value == 'undefined') {
        res.value = '';                           
    }
    res.value += value;
}

//function to backspace
function backSpace() {
    let value = document.getElementById('input').value;
    document.getElementById('input').value = value.substr(0, value.length - 1);
}