$(document).ready(function() {
  $("form#sides").submit(function(event) {

    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());

    $(".results div").hide();

    if (side1 && side2 && side3) {
      if (side1===side2 && side1===side3 && side3===side1) {
        $("#equilateral").show();
      } else if ((side1===side2)||(side2===side3)||(side3===side1)) {
          $("#isosceles").show();
      } else if ((side1 !== side2) && (side1 !== side3) && (side2 !== side3)) {
          $("#scalene").show();
      } else {
          $("#notTriangle").show();
      }

    } else {
      alert('Please enter numbers.');
    }
    event.preventDefault();
  });
});
