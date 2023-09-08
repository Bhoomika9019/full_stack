
let name2 = "admin"
let num1 = 22
let num2 = 33
let sum
sum = num1 + num2
console.log(name2)
console.log(sum)
let textbox
document.getElementById("btn").onclick = function(){
    console.log("button clicked")
    textbox = document.getElementById("txt").value
    console.log(textbox)
    document.getElementById("headline").innerHTML = sum
}