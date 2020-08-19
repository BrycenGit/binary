$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();

    let binaryInput = $("#binInput").val();
    let binaryArray = binaryInput.split("");
    let decimalOutput = 0;
    let temp = binaryArray.length;

    binaryArray.forEach(function(digit) {
      temp = temp - 1;
      decimalOutput = decimalOutput + (parseInt(digit) * (2 ** temp)); 
    });

    $("#answer").text(decimalOutput);
  });
});