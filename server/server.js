const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));

// Configure a 'get' endpoint for data..
app.get('/movies', function (req, res) {
  // Part 1: Remove the next line and replace with your code
  const movies = [
      {Title:"Bound",Released:"1996-10-04",Runtime:109,Genres:["Crime" , "Thriller"],Directors:["Lana Wachowski", "Lilly Wachowski"],Writers:["Lilly Wachowski", "Lana Wachowski"],Actors:["Jennifer Tilly", "Gina Gershon", "Joe Pantoliano"],Plot:"Tough ex-con Corky and her lover Violet concoct a scheme to steal millions of stashed mob money and pin the blame on Violet\'s crooked boyfriend Caesar.",Poster:"https://m.media-amazon.com/images/M/MV5BNjY0OWFmODctNmEwNy00Njc2LWFkYTAtNmI4OWIzY2ZkYjJlXkEyXkFqcGc@._V1_SX300.jpg",Metascore:64,imdbRating:7.3},
      {Title:"The Boy and the Heron",Released:"2023-12-08",Runtime: 124,Genres:["Animation", "Adventure", "Drama"],Directors:["Hayao Miyazaki"],Writers:["Hayao Miyazaki"],Actors:["Soma Santoki", "Masaki Suda", "Kô Shibasaki"],Plot:"In the wake of his mother\'s death and his father\'s remarriage, a headstrong boy ventures into a dreamlike world shared by the living and the dead in search of his missing stepmother.",Poster:"https://m.media-amazon.com/images/M/MV5BMzA5Zjg3MTAtM2FhZS00NTNjLTg3NjEtNWQ4MTRhZjhiNzVmXkEyXkFqcGc@._V1_SX300.jpg",Metascore:91,imdbRating:7.3},
      {Title:"Cars",Released:"2006-06-09", Runtime:116,Genres:["Animation", "Adventure", "Comedy"],Directors:["John Lasseter", "Joe Ranft"],Writers:["Dan Fogelman", "John Lasseter", "Joe Ranft"],"Actors":["Owen Wilson", "Bonnie Hunt", "Paul Newman"],Plot:"On the way to the biggest race of his life, a hotshot rookie race car gets stranded in a rundown town and learns that winning isn\'t everything in life.",Poster:"https://m.media-amazon.com/images/M/MV5BMTg5NzY0MzA2MV5BMl5BanBnXkFtZTYwNDc3NTc2._V1_SX300.jpg",Metascore:73,imdbRating:7.3}
  ];
  res.json(movies);
})

app.listen(3000)

console.log("Server now listening on http://localhost:3000/")

