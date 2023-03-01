//String
let name = "Hello world";
let long = name.length;
let charat = name.charAt(6);
let upper = name.toUpperCase();
let lower = name.toLowerCase();
let count = name.substring(0, 5);
console.log(upper);
console.log(lower);
console.log(long);
console.log(count);
console.log(name[7]);
console.log("Caracter number is: " + charat);
console.log("Caracter Type is: " + typeof charat);

//====================== Quiz
let str = "hello JS";
let upperStr = str.toUpperCase();
let replaceO = upperStr.replace("O", "Y");
let reverseStr = replaceO.split("").reverse().join("");
console.log("======= Reponse ===========");
console.log(str);
console.log(upperStr);
console.log(replaceO);
console.log(reverseStr);
console.log("===========================");
/* 
    //============================= Quiz 2
    let cStr = document.getElementById('dom').innerHTML = str
    let cStr2 = document.getElementById('dom2').innerHTML = `${upperStr} ---- ${replaceO} ------ ${reverseStr}`
    console.log('======= Reponse 2 =========')
    console.log(cStr)
    console.log(cStr2)
    console.log('===========================') */

//================================== Quiz 3
console.log("======== Reponse 3 ============");
let btn_submit = document
  .getElementById("submit")
  .addEventListener("click", () => {
    let inputInfo = document.getElementById("input").value;
    console.log(inputInfo);
    let upperStr1 = inputInfo.toUpperCase();
    let replaceO2 = upperStr1.replace("O", "Yes");
    let reverseStr3 = replaceO2.split("").reverse().join("");
    console.log("clicked");
    document.getElementById("dom").innerHTML = input.value;
    document.getElementById(
      "dom3"
    ).innerHTML = `${upperStr1} ---- ${replaceO2} ------ ${reverseStr3}`;
  });

console.log("===============================");

let replaceHello = name.toLowerCase();
console.log(name.replace("l", "r"));
console.log(replaceHello);
console.log(name.replace("hello", "HELLO"));

// Numbers
let x = "10";
let y = "20";
let z = x + y;
let w = x * y;
let num1 = 40;
let num2 = 25;
let num3 = 5;
let num4 = 15;
let num5 = 30;
let num6 = [40, 5, 14, 12, 20, 122];

console.log("======== Reponse 5 ===========");

console.log(z);
console.log(typeof z);
console.log(isNaN(z));
console.log(typeof w);
console.log(w);
console.log(isNaN(w));
console.log(Math.min(num1, num2, num3, num4));
console.log(Math.max(num1, num2, num3, num4));
console.log("===============================");

//Boolean
console.log("============ Boolean ==========");
let xi = 15;
let yi = 7;
let zi = 20;
let wi = 12;

console.log(Boolean(xi));
console.log(Boolean(xi) == false);
console.log(Boolean(yi));
console.log(Boolean(zi));
console.log(xi > 10 && yi > 8 && wi >= 12);
console.log("===============================");

// Casting
console.log("========= Casting =============");

let a = "8";
let b = "9";
let c = Number(a);
let e = 4;
let f = 46;
let g = true
console.log(c + b);
console.log(c + Number(b));
console.log(typeof c);
console.log(e + String(f));
console.log(e.toString() + f);
console.log(String(g))
console.log("===============================");

console.log("============ Conditions =============");

// Condition

console.log("===============================");


//Variables
let first = 10;
let second = 4;
let message = `First number is : ${first} \n Second number is : ${second}
     Sum is ${first + second}\n Sub is ${first - second}\n 
     Multiple is ${first * second}\n 
     Div is ${first / second}\n Modulo is ${first % second}\n  `;
document.getElementById("message").innerHTML = message;
let sum = () => console.log("Sum is " + (first + second));
let divi = () => console.log("Div is: " + first / second);
let multipl = () => console.log("Multi is : " + first * second);
let soustr = () => console.log("Sub is : " + (first - second));
let mod = () => console.log("Mod is : " + (first % second));
console.log("First number is " + first);
console.log("Second number is " + second);
sum();
divi();
soustr();
multipl();
mod();
