// Create a new function called "efficient" below the "msytery" function that returns
// the same value as the mystery function. However, the efficient function
// should have only one line of code inside its body instead of 4 lines of code,
// like the mystery function has.

//function mystery(x, y) {
  var a = 4 * x * y;
  var b = 3 * y + 5;
  var c = a + b;
  return c;
//}



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
  