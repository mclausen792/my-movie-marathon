// Create a variable for the section that we want the movies to appen to
var movies = document.getElementById('movieSection')
//Calls the items when the page loads
window.onload = function() {
  // Variable that pulls the items from local storage when called
  var movieTitle = localStorage.getItem('title')
  // Splits the string at the given point. In this case the comma
  movieTitle = movieTitle.split(',')
  console.log(typeof movieTitle);
  // loop through movie title and append each title to its own h2
  for (var i = 0; i < movieTitle.length; i++) {
    var h4 = document.createElement('h4')
    h4.innerHTML = movieTitle[i]
    movies.append(h4)
  }


}
