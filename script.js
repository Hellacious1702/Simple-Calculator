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

// Importing Audio based on ID
let clickAudio = document.getElementById('click');

// Deifing Result (To be used for Evaluate Function)
let result = '';

// Creating Evaluate Function
function Evaluate(){
    // Using the Result
    let result = eval(input.value);
    clickAudio.play();
    if(result === undefined){
        input.value = 'Error404 T_T';
    }else{
        input.value = result;
    }
}

// Creating Clear Function
function Clear(){
    clickAudio.play();
    input.value = '';
}

// Creating Copy Function
function copyResult(){
    clickAudio.play();
    input.select();
    document.execCommand("copy");
}

function Button1(){
    input.value = input.value + '1';
    clickAudio.play();
}

function Button2(){
    input.value = input.value + '2';
    clickAudio.play();
}

function Button3(){
    input.value = input.value + '3';
    clickAudio.play();
}

function Button4(){
    input.value = input.value + '4';
    clickAudio.play();
}

function Button5(){
    input.value = input.value + '5';
    clickAudio.play();
}

function Button6(){
    input.value = input.value + '6';
    clickAudio.play();
}

function Button7(){
    input.value = input.value + '7';
    clickAudio.play();
}

function Button8(){
    input.value = input.value + '8';
    clickAudio.play();
}

function Button9(){
    input.value = input.value + '9';
    clickAudio.play();
}

function Button0(){
    input.value = input.value + '0';
    clickAudio.play();
}

function ButtonPlus(){
    input.value = input.value + '+';
    clickAudio.play();
}

function ButtonMinus(){
    input.value = input.value + '-';
    clickAudio.play();
}

function ButtonDivide(){
    input.value = input.value + '/';
    clickAudio.play();
}

function ButtonMultiply(){
    input.value = input.value + '*';
    clickAudio.play();
}

function ButtonDecimal(){
    input.value = input.value + '.';
    clickAudio.play();
}

function ButtonPercentage(){
    input.value = input.value/100;
    clickAudio.play();
}