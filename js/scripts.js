$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();
    var destination = $("#destination").val();
    var weather = $("#weather").val();
    var music = $("#music").val();
    var footwear = $("#shoes-sandals").val();
    var transportation = $("#transportation").val();

    if ((destination === 'beach' && music === 'reggae' && transportation === 'airplane' || destination === 'beach' && music === 'reggae' && weather === 'hot' || destination === 'beach' && music === 'reggae' && footwear === 'sandals')) {
      result = ("Go to Jamaica");
    } else if ((destination === 'mountains' && music === 'country' && transportation === 'car' || destination === 'mountains' && music === 'country' && footwear === 'shoes')) {
      result = ("Go to Bend, Oregon!");
    } else if ((destination === 'beach' && music === 'country' && transportation === 'car' || destination === 'beach' && weather === 'hot' && transportation === 'car' || destination === 'beach' && music === 'reggae' && transportation === 'car' || destination === 'beach' && footwear === 'sandals' && transportation === 'car' )) {
      result = ("Go to Cannon Beach, Oregon!");
    } else {
        alert ('Inconclusive, try other answers...');


  }
    $("#output").text(result);
  });
});
