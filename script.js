// Importing Elements based on ID
let equal = document.getElementById('buttonequal');
let clear = document.getElementById('buttonclear');
let input = document.getElementById('calcInput');
let buttton1 = document.getElementById('buttton1');
let buttton2 = document.getElementById('buttton2');
let buttton3 = document.getElementById('buttton3');
let buttton4 = document.getElementById('buttton4');
let buttton5 = document.getElementById('buttton5');
let buttton6 = document.getElementById('buttton6');
let buttton7 = document.getElementById('buttton7');
let buttton8 = document.getElementById('buttton8');
let buttton9 = document.getElementById('buttton9');
let buttton0 = document.getElementById('buttton0');
let butttonPlus = document.getElementById('buttonplus');
let butttonMinus = document.getElementById('buttonminus')
let butttonDivide = document.getElementById('buttondivide');
let butttonMultiply = document.getElementById('buttonmultiply');

// Deifing Result (To be used for Evaluate Function)
let result = '';

// Creating Evaluate Function
function Evaluate(){
    // Using the Result
    let result = eval(input.value);
    if(result === undefined){
        input.value = 'Error404 T_T';
    }else{
        input.value = result;
    }
}

// Creating Clear Function
function Clear(){
    input.value = '';
}

function Button1(){
    input.value = input.value + '1';
}

function Button2(){
    input.value = input.value + '2';
}

function Button3(){
    input.value = input.value + '3';
}

function Button4(){
    input.value = input.value + '4';
}

function Button5(){
    input.value = input.value + '5';
}

function Button6(){
    input.value = input.value + '6';
}

function Button7(){
    input.value = input.value + '7';
}

function Button8(){
    input.value = input.value + '8';
}

function Button9(){
    input.value = input.value + '9';
}

function Button0(){
    input.value = input.value + '0';
}

function ButtonPlus(){
    input.value = input.value + '+';
}

function ButtonMinus(){
    input.value = input.value + '-';
}

function ButtonDivide(){
    input.value = input.value + '/';
}

function ButtonMultiply(){
    input.value = input.value + '*';
}

function ButtonDecimal(){
    input.value = input.value + '.';
}

function ButtonPercentage(){
    input.value = input.value/100;
}