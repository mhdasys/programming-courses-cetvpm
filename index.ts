//######################################################################
//###########################           SSTech       ###################
//###########################   Programming Courses  ###################
//######################################################################
let num1, num2, num3, num4, num5, num6, num7, num8: number;
num1 = 2;
num2 = 2;
num3 = num1 + num2;
console.log(num3);
console.log(num1 + num2 + num3);
num4 = 60;
num5 = 70;
num6 = num4 / num5;
num7 = num6 - num1;
num8 = num7 * num5 + num4;
console.log(num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8);

let mhd, asys: string;
mhd = 'مرحبا و سهلا بك في عالم البرمجة ';
asys = 'في المانيا';
console.log(mhd + asys);

let mynumber: number;
let sk: string;
mynumber = 100;
mynumber = mynumber + 10;
sk = ' النتيجة هي العدد';
console.log(mynumber + sk);

let myNumber1, myNumber2, myn3: number;
myNumber1 = 151;
myNumber2 = 256;
myn3 = myNumber1;
myNumber1 = myNumber2;
myNumber2 = myn3;
console.log('inhalt der erste glas', myNumber1);
console.log('inhalt der zweite glas', myNumber2);

let mytext: string;
mytext = prompt('name');
console.log(mytext);

let myn1, myn2, myn4: number;
myn1 = parseInt(prompt('schreibe die erste zahl'));
myn2 = parseInt(prompt('schreibe die zweite zahl'));
myn4 = myn1 + myn2;
console.log(myn4);

let mynu: number;
mynu = parseInt(prompt('Bitte gib ein zahl'));
if (mynu > 0) {
  console.log('Positive zahl');
}
console.log('das Ende');

let k: number;
k = prompt('gib ein zahl');
if (k < 0) {
  console.log('neg zahl');
} else {
  console.log('pos zahl');
}
console.log('bis morgen');
