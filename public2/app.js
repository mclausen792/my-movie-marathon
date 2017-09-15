//Button to activate the pull of data from my API
var button1 = document.getElementById('movie-form');

var main = document.getElementById('mainDiv')

// Tells the function to listen for a click
button1.addEventListener('click', function(event) {
  event.preventDefault();

  // Empty array to put movies in and push to local storage
  var movieArr = []
  console.log(movieArr);
  // Get me the API from this website
  fetch('https://galvanize-cors.herokuapp.com/http://netflixroulette.net/api/api.php?actor=' + movieInput.value)
    .then(function(response) {
      // Give me the results in JSON format
      return response.json()
        // function that calls my API
        .then(function(movieInfo) {
          // console.log(movieInfo);
          // Tells the page to clear on a new search without the need for a refresh
          main.innerHTML = ''
          // Iterate through my data that waas returned
          for (i = 0; i < movieInfo.length; i++) {
            // Section to place the results I get back from my API
            var newDiv = document.createElement('div');
            //New header for movie titles
            var h2 = document.createElement('h2');
            //Section in my html that these items will be in
            var movies = document.getElementsByClassName('movies')[0]
            //New smaller header for the year
            var yr = document.createElement('h3')
            //New image tag for the images on my API
            var image = document.createElement('img')
            // New paragraph for the summary
            var summary = document.createElement('p')
            // summary.className = "something"

            // Make the inner text of our h2 the content under show_title
            h2.innerText = movieInfo[i].show_title
            // Append to our newly crated div
            newDiv.appendChild(h2)
            // Give out h2 an ID
            h2.id = 'titleID'

            //Make the inner text of our h3 the content under release_year
            yr.innerText = movieInfo[i].release_year
            //Append to our newly created div
            newDiv.appendChild(yr)

            // Make the image inside of our image variable the image under poster
            image.setAttribute('src', movieInfo[i].poster)
            //Append to our created div
            newDiv.appendChild(image)
            // Give our image an ID
            image.id = 'imgBtn'

            // Make the inner text of our 'p' tag the content under summary
            summary.innerText = movieInfo[i].summary
            //Append to newly created div
            newDiv.appendChild(summary)
            //Append our newly created div to the 'movies' section of our html
            movies.append(newDiv)

            // Makes my images clickable
            image.addEventListener('click', function(event) {
              event.preventDefault();
              console.log("do I work?");
            })
            // Makes my titles clickable
            h2.addEventListener('click', function(event) {
              event.preventDefault();
              console.log("Hey");
            })

          }
          // Variable that makes all the all of the titles with that ID selectable
          var allTitles = document.querySelectorAll('#titleID')
          // Iterates through the titles
          for (var i = 0; i < allTitles.length; i++) {
            // Makes all of the titles clickable
            allTitles[i].addEventListener('click', function(event) {
              // Pushes the itmes in our array to local storage
              movieArr.push(this.innerHTML)
              // Stops the items from being added to the current page
              event.stopPropagation()
              // Accesses local storage and adds the item 'title' to it
              window.localStorage.setItem('title', movieArr);
            })
          }




        })
    })
})


var salty = ["Chips", "Nachos", "Popcorn", "Soft Pretzel", "Pizza"]
var sweet = ["Gummy Bears", "Junior Mints", "Twizzlers", "Ice Cream", "M&M's", "Milk Duds", "Skittles", "Hot Tamales", "Sweet Tarts", "Raisinets", "Whoppers"]

function sweetSnack() {

  var snack1 = [Math.floor(Math.random() * sweet.length)];
  document.getElementById('sweetSection').innerHTML = sweet[snack1];
}

function saltySnack() {
  var snack2 = [Math.floor(Math.random() * salty.length)];
  document.getElementById('saltySection').innerHTML = salty[snack2];
}
