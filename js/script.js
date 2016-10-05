
var Something = function(limit, countBy) {
  var outMath = [];

for (i=1; i<= limit; i++) {
    outMath.push(  i * countBy);

}

$("#results").text(outMath);
}




 $(document).ready(function() {
$("form#num-form").submit(function(event) {
  event.preventDefault();
  var countTo = parseInt($("input#num-to").val());
  var countBy = parseInt($("input#num-by").val());
  var limit = countTo / countBy;

  if (countTo === NaN) {
    alert("please enter a number ");
} else {

    var total = Something(limit, countBy);
}



});

});


//
//
//
//
//
//
// function saySomething(whatToSay) {
//   alert(whatToSay);
// }
//
//
//
//
//
// $(document).ready(function() {
//   ["face", "Booty", "Boobies"].forEach(function(part) {
//     alert("I love " + part + "!");
//
//   });
//
//   saySomething("but nugget!");
//     alert(whatToSay);
//
//
//
//
//
// });
