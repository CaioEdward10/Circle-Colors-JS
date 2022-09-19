const bigCircle = document.getElementById('circle');
const blue = document.getElementById('blue');
const red = document.getElementById('red');
const green = document.getElementById('green');
const cyan = document.getElementById('cyan');
const pink = document.getElementById('pink');

function colorCenterCircle(color){
 bigCircle.style.backgroundColor = color;
};
function borderReset (){
    blue.style.border = "none"
    red.style.border = "none"
    green.style.border = "none"
    cyan.style.border = "none"
    pink.style.border = "none"
}

function initialColor() {
 bigCircle.style.backgroundColor = '#d9d9d9';
 borderReset();
}

function selectedCircle (id){
 borderReset();

 if(id === "blue")blue.style.border = "4px solid black"
 if(id === "red") red.style.border = "4px solid black"
 if(id === "green") green.style.border = "4px solid black"
 if(id === "cyan") cyan.style.border = "4px solid black"
 if(id === "pink") pink.style.border = "4px solid black"
}
