    var result;
var vacation = function(destination, weather, music, footwear,transportation) {
  if ((destination === 'beach' && music === 'reggae' && transportation === 'airplane' || destination === 'beach' && music === 'reggae' && weather === 'hot' || destination === 'beach' && music === 'reggae' && footwear === 'sandals')) {
  result = ("Go to Jamaica!");
  } else if ((destination === 'mountains' && music === 'country' && transportation === 'car' || destination === 'mountains' && music === 'country' && footwear === 'shoes' || destination === 'mountains' && music === 'country' && weather === 'cold')) {
  result = ("Go to Bend, Oregon!");
  } else if ((destination === 'beach' && music === 'country' && transportation === 'car' || destination === 'beach' && weather === 'hot' && transportation === 'car' || destination === 'beach' && music === 'reggae' && transportation === 'car' || destination === 'beach' && footwear === 'sandals' && transportation === 'car' )) {
  result = ("Go to Cannon Beach, Oregon!");
  } else {
  result = ("Inconclusive, try other answers...")
}

}



$(document).ready(function() {
  $("form#vacation").submit(function(event) {
    event.preventDefault();

    var destination = $("#destination option:selected").val();
    var weather = $("#weather option:selected").val();
    var music = $("#music option:selected").val();
    var footwear = $("#shoes-sandals option:selected").val();
    var transportation = $("#transportation option:selected").val();

vacation  (destination, weather, music, footwear,transportation)

    $("#output").text(result);

  });
});
