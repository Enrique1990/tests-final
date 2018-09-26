// no API key required for this API
//1
var age = 28;
var after5years = age+5;
console.log(after5years);
//2
 var cantidad = 10;
 i=1;

 while (i<=cantidad){ 
 console.log(cantidad);
 cantidad = cantidad-1 ;
 }
 //3
 for (var i=1; i<=10; i++){
     console.log(i);
 };
 //4
 var numGoldfish = 4;
 var monthNumber = 1;
 var monthTosprint = 12;

 while (monthNumber <= monthTosprint){
     numGoldfish *=4;
     console.log(`There will be ${(numGoldfish)} after ${monthNumber} month(s)!`);
     monthNumber++;
 }
 //5
 var currentGen = 1;
var totalGen = 19;
var totalMW = 0;
 
for (currentGen; currentGen <= totalGen; currentGen++) {
    if(currentGen === 1 || currentGen === 2 || currentGen === 3 || currentGen === 4) {
        totalMW = totalMW + 62;
        console.log(`Generator # ${currentGen} is on, adding 62 MW, for a total of ${totalMW} MW`);
    }else {
        totalMW = totalMW + 124;
        console.log(`Generator # ${currentGen} is on, adding 124 MW, for a total of ${totalMW} MW`);
    }
} 
//6
var condition = 3 > 4;
if (condition) {
    console.log('The condition is true');
} else {
    console.log('condition is false');
}
//7
 for(var i = 1; i<= 20; i++) {
     if (i % 2 == 0){
         console.log(i);
     }
 }
 //8
 function sum(a,b) {
     return a+b;
 }
 console.log(sum(3,5));
 console.log(sum(10,3));
 console.log(sum(-8 ,5));
  
 //9
 function max0f2(num1, num2) {
     if (num1== num2) {
         return 'equal' ;

     }
     else if (num1 > num2) {
         return num1;
     }else {
         return num2;
     }

 }
 console.log(max0f2(5,3));
 console.log(max0f2(5,5));
 console.log(max0f2(-6,-3));

 //10
 function mystery(x, y) {
    var a = 4 * x * y;
    var b = 3 * y + 5;
    var c = a + b;
    console.log(c);
    return c;
  }

  function efficient (){
    return mystery (4,5); 
    
    
      
  }
  console.log(mystery(4,5));
  const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
  var quoteText = document.querySelector('.quote-text');
  var quoteAuthor = document.querySelector('.quote-author');
  var btn = document.querySelector('.btn');

function getQuote() {
    $.ajax({
        type: "GET",
        url: API_URL,
        dataType: 'json',
        success: function (data) {
            console.log(data);
            quoteText.textContent = data.quoteText;
            quoteAuthor.textContent = data.quoteAuthor;
        },
        error: function (error) {
            console.log("There was an error")
        }
    });
}
btn.addEventListener('click', btnClick, false);
function btnClick(e) {
    console.log(e);
    getQuote();
    e.preventDefault();
}

function randomValue() {
    return Math.floor(Math.random());
}
getQuote()
  
