// Implementation of modules: named export is used with aliases to avoid conflict
import { add as funcAdd, sub as funcSub, mul as funcMul, div as funcDiv } from './calculator.js';

$(document).ready(function() {
    // Basic DOM UI updates to show the selected operator symbol
    $('#btn_add').click(() => $('#symbol').val('+'));
    $('#btn_sub').click(() => $('#symbol').val('-'));
    $('#btn_mul').click(() => $('#symbol').val('*'));
    $('#btn_div').click(() => $('#symbol').val('/'));

    $('#btn_res').click(function() {
        // Converted to Integer because values are stored as strings by default
        let x = parseInt($('#num1').val()); 
        let y = parseInt($('#num2').val());
        let operator = $('#symbol').val();

        // Basic DOM validation
        if (!x && x !== 0) {
            alert("Plz enter num1");
            return;
        }
        
        // if(!y) alone fails if the user enters 'e' or 0
        if (!y && y !== 0) {
            alert("Plz enter num2");
            return;
        }

        if (!operator) {
            alert("Please select operation");
            return;
        }

        // Calculation using the imported functions
        let res;
        switch(operator) {
            case '+': res = funcAdd(x, y); break;
            case '-': res = funcSub(x, y); break;
            case '*': res = funcMul(x, y); break;
            case '/': res = funcDiv(x, y); break;
        }
        
        // Display result in the disabled input field
        $('#result').val(res);
    });
});