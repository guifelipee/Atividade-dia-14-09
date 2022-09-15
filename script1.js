let num1 = Math.random()*10
let num2 = Math.random()*10
let num3 = Math.random()*10

//document.getElementById('numero1').innerHTML = num1
//document.getElementById('numero2').innerHTML = num2
//document.getElementById('numero3').innerHTML = num3 

if(num1> num2 && num1 > num3){
    document.getElementById('numero1').innerHTML = num1
} else if(num1 > num2 && num1 < num3 || num1 > num3 && num1 < num2){
    document.getElementById('numero2').innerHTML = num1
} else {
    document.getElementById('numero3').innerHTML = num1
}

if(num2 > num1 && num2 > num3){
    document.getElementById('numero1').innerHTML = num2
} else if(num2 > num1 && num2 < num3 || num2 > num3 && num2 < num1){
    document.getElementById('numero2').innerHTML = num2
} else {
    document.getElementById('numero3').innerHTML = num2
}


if(num3 > num1 && num3 > num2){
    document.getElementById('numero1').innerHTML = num3
} else if(num3 > num2 && num3 < num1 || num3 > num1 && num3 < num2){
    document.getElementById('numero2').innerHTML = num3
} else {
    document.getElementById('numero3').innerHTML = num3
}


