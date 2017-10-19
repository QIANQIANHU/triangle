$(document).ready(function() {
  $("form#sides").submit(function(event) {

    var side1 = parseFloat($("input#side1").val());
    var side2 = parseFloat($("input#side2").val());
    var side3 = parseFloat($("input#side3").val());


    if (side1 && side2 && side3) {
      if (side1 === side2 && side1 === side3) {
        $("#equilateral").show();
      } else if (side1 === side2 && side1 !== side3) {
          $("#isosceles").show();
      } else if () {
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
