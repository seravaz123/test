// // 1. Ways to print in js
// // console.log("HELLO WORLD");
// // alert("I am mad");
// // document.write("this is document");

// // 2. Javascrip console API
// // console.warn("this is a warning");
// // console.error("this is a error");
// // console.log("HELLO WORLD", 4 + 6, "hii how are you");

// /*
// Multi
// Line
// Comment
// */


// // 3. Javascript Variables
// // What are Variables? - containers to store data values
// var number1 = 34;
// var number2 = 56;
// console.log(number1 + number2);

// // 4. DATA TYPES IN JAVASCRIPT
// // Numbers
// var num1 = 445;
// var num2 = 12.3;

// // String
// var str1 = "This is a string";
// var str2 = 'This is also a string';

// // Objects
// var marks = {
//     valen: 20,
//     caelan: 19,
//     cacia: 19

// };

// // Booleans
// var a = true;
// var b = false;


// // var und = undefined;
// var und;
// // console.log(und)  /* UNDIFINED */

// var u = null;
// // console.log(u)  /* NULL */

// /*
// At a high level , there are two types of data types in javascript
// 1. primitive data type : undifined , null , String , Boolean, Symbol 
// 2. Reference data type : Arrays and Objects
// */

// var arr = [1, 2, 3, 4, 5];
// var arr = [1, 2, 3, "This is a array", 4, 5];

// // console.log(a,b);
// // console.log(b);

// // Operators in js
// // 1. Arithematic Operators
// var a = 100;
// var b = 10;
// console.log("This value of a + b is", a + b);
// console.log("This value of a - b is", a - b);
// console.log("This value of a * b is", a * b);
// console.log("This value of a / b is", a / b);

// // // Assignment Operators
// var c = b;
// c += 2; // c = c + 2  
// c -= 2; // c = c - 2 
// c *= 2; // c = c * 2 
// c /= 2; // c = c / 2 
// console.log(c);

// // Comparison Operators
// var x = 34;
// var y = 64;
// // console.log(x==y);
// // console.log(x>=y);
// // console.log(x<=y);
// // console.log(x < y);
// // console.log(x > y);

// // Logical Operators
// // Logical and  
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// // // Logical or
// console.log(true || true);
// console.log(true || false);
// console.log(false || true);
// console.log(false || false);

// // Logical not
// console.log(!true);
// console.log(!false);

// // operator = +,-
// // operants = 3, 34, 5

// // functions in js
// // DRY = do not repeat yourself
// function avg(a, b) {
//     c = (a + b) / 2;
//     return c;
//     // return (a+b)/2;

// }
// c1 = avg(4, 6);
// c2 = avg(40, 60);
// // console.log(c1);
// // console.log(c2);

// // blue - number
// // black - string

// // Conditionals in js

// var age = 34;

// // single if statement
// if (age > 18) {
//     console.log("yor are not a kid")
// }

// // if - else statement
// if (age > 18) {
//     console.log("yor are not a kid")
// }
// else {
//     console.log("yor are a kid")
// }

// // // if - else ladder
// // if (age > 32) {
// //     console.log("b");
// // }
// // if (age > 26) {
// //     console.log("a");
// // }
// // if (age < 26) {
// //     console.log("a");
// // }
// // else {
// //     console.log("d");
// // }
// // console.log("End of Ladder")

// // var array = [1, 2, 3, 4, 5, 6, 7];
// // console.log(array);
// // // // if u want print it seperately
// // for (var i = 0; i < array.length; i++) {
// //     console.log(array[i]);

// // }


// // // const g = 0;
// // // this will not work
// // // g++;
// // // g = g +1 ;

// // var arr = [1, 2, 3, 4, 5, 6, 7];
// // let j = 0;
// // while (j<arr.length) {
// //     console.log(arr[j]);
// //     j++;

// // }

// // do{
// //     console.log(arr[j]);
// //     j++;
// // }while (j<arr.length)

// // var ar = [1, 2, 3, 4, 5, 6, 7];

// // for (var i = 0; i < ar.length; i++) {
// //     if (i==2) {
// //         break;  
// //         // 1 2 output
// //         continue;
// //         // output 1 2 4 5 6 7 

// //     }
// //     else
// //     console.log(array[i]);

// // }

// // DOM Manipulation

// // let elem = document.getElementById("btn");
// // // console.log(elem);

// // let elemm = document.getElementsByClassName("container");
// // // console.log(elemm);
// // // // elemm[0].style.background = "red";
// // // elemm[0].classList.add("tes");
// // // // elemm[0].classList.remove("tes");

// // console.log(elemm[0].innerHTML);
// // console.log(elemm[0].innerText);


// tn= document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "this is the created paragraph";
// tn[0].appendChild(createdElement);

// // // selecting using query

// function clicked() {
//     console.log("this button was clicked");

// }

// // EVENTS IN JAVASCRIPT -- CLICK ON BOTTON
// // onclick
// window.onload = function clicked() {
// console.log("the document is load");

// }

// // addeventlistner
// first_container.addEventListner('click',function () {

//     console.log("clicked on container");


// })


FirstContainer.addEventListener('click',function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked </b>";
       console.log("clicked on container");
       
})



function OnClick(){
    // fetch('')
    // .then(resp => resp.json())
    // .then(response => console.log(response))
    // .catch(e => console.log(e))
    console.log(2);
 };



// let preHtml =  document.querySelectorAll('.container')[1].innerHTML;

FirstContainer.addEventListener('mouseup',function () {
    document.querySelectorAll('.container')[1].innerHTML = preHtml;
       console.log("mouse up");
       
})

FirstContainer.addEventListener('mousedown',function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b> We have Clicked </b>";
       console.log("mousedown");
       
})

// settimeout function
// arrow function

// function sum(a,b) {
//     return a+b;
    
// }

// sum = (a,b) => {
//     return a+b;
    
// }

// function logkaro(){
//     console.log("sera")
    
// }
// setTimeout(logkaro,10000); // ---> function,time

