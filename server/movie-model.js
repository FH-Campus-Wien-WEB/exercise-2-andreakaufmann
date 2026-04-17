/* Task 1.1. Add your movie data here 
   and export it so it's available in server.js */

   const movies = {
      tt0266543: {
         imdbID: "tt0266543",
         Title:"Finding Nemo",
         Released:"2003-05-30",
         Runtime: 100,
         Genres: ["Animation", "Adventure", "Comedy"],
         Directors:["Andrew Stanton", "Lee Unkrich"],
         Writers:["Andrew Stanton", "Bob Peterson", "David Reynolds"],
         Actors:["Albert Brooks", "Ellen DeGeneres", "Alexander Gould"],
         Plot:"After his son is captured in the Great Barrier Reef and taken to Sydney, a timid clownfish sets out on a journey to bring him home.",
         Poster:"https://m.media-amazon.com/images/M/MV5BMTc5NjExNTA5OV5BMl5BanBnXkFtZTYwMTQ0ODY2._V1_SX300.jpg",
         Metascore: 90,
         imdbRating: 8.2
      },

      tt1853728: {
         imdbID: "tt1853728",
         Title:"Django Unchained",
         Released:"2012-12-25",
         Runtime: 165,
         Genres: ["Drama", "Western"],
         Directors:["Quentin Tarantino"],
         Writers:["Quentin Tarantino"],
         Actors:["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
         Plot:"With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner in Mississippi.",
         Poster:"https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_SX300.jpg",
         Metascore: 81,
         imdbRating: 8.5

      },

      tt0468569: {
         imdbID: "tt0468569",
         Title:"The Dark Knight",
         Released:"2008-07-18",
         Runtime: 152,
         Genres: ["Action", "Crime", "Drama"],
         Directors:["Christopher Nolan"],
         Writers:["Jonathan Nolan", "Christopher Nolan", "David S. Goyer"],
         Actors:["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
         Plot:"When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.",
         Poster:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
         Metascore: 85,
         imdbRating: 9.1
      }
  }
  module.exports = movies;

