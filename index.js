
// <-----using function for changing background colors by using different buttons ----->
function bgchange(color) {
    document.body.style.background =  color;
    
}

// <!-- -----using function for changing background colors by using only one button ----- -->
const button = document.querySelector("button")
const body = document.querySelector("body")


r = Math.floor(Math.random() * 255)
g = Math.floor(Math.random() * 255)
b = Math.floor(Math.random() * 255)
function changeback(){
body.style.backgroundColor = `rgb(${r},${g},${b})`
}