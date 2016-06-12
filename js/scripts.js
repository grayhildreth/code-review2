$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var destination = $("#destination").val();
    var weather = $("#weather").val();
    var music = $("#music").val();
    var footwear = $("#shoes-sandals").val();
    var transportation = $("#transportation").val();

    if (destination === 'beach' && music === 'reggae' && transportation === 'airplane') {
      result = ("Go to Jamaica");
    } else if (destination === 'mountains' && music === 'country' && transportation === 'car') {
      result = ("Go to Bend, Oregon!");
    } else if (destination === 'beach' && music === 'country' && transportation === 'car') {
      result = ("Go to Cannon Beach, Oregon!");
    } else {
        alert ('Inconclusive, try other answers...');


  }
    $("#output").text(result);
  });
});
