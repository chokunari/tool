//test.js

let t1 = new Date();
let t2 = new Date();
let t11 = t1.getTime() - 1000;
console.log(t11);
let test = ()=>{
    let t22 = t2.getTime();
    console.log(t22);
    let diff = t22 - t11;
    console.log((new Date(diff)).toUTCString());
    console.log((new Date(diff)).toUTCString().match(/..:..:../)[0]);
}
setTimeout(test, 2000);


/*
//HH部分取得
let diffHour = diff / (1000 * 60 * 60);
//MM部分取得
let diffMinute = (diffHour - Math.floor(diffHour)) * 60;
//SS部分取得
let diffSecond = (diffMinute - Math.floor(diffMinute)) * 60;

console.log(('00' + Math.floor(diffHour)).slice(-2) + ':' + ('00' + Math.floor(diffMinute)).slice(-2) + ':' + ('00' + Math.round(diffSecond)).slice(-2));
*/
