function reverseString(s) {
            return s.split("").reverse().join("");
        }
        function formatRuntime(min) {
            const hours = Math.floor(min / 60);
            const minutes = min % 60;

            if (hours === 0) {
                return `${minutes}min`;
            }
            return `${hours}h ${minutes}min`;
        }

window.onload = function () {
  const xhr = new XMLHttpRequest();
  xhr.onload = function () {
    const bodyElement = document.querySelector("body");
    if (xhr.status == 200) {
      const movies = JSON.parse(xhr.responseText);
      for (const movie of movies) {
        /* Task 1.3. Add your code from exercise 1 here 
           and include a non-functional 'Edit' button
           to pass this test */

        const article = document.createElement("article")

        article.id = movie.imdbID;

        const title = document.createElement("h1")
        title.textContent = movie.Title

        const img = document.createElement("img")
        img.src = movie.Poster;

        const plot = document.createElement("p")
        plot.textContent = movie.Plot;
        plot.className = "plot"

        const info = document.createElement("p")
        info.innerHTML = `
        Released: ${movie.Released} | Runtime: ${formatRuntime(movie.Runtime)} <br>
        Directors: ${movie.Directors.join(", ")} <br>
        Writers: ${movie.Writers.join(", ")} <br>`;

        const rating = document.createElement("p")
        rating.textContent = `Rating: ${movie.imdbRating} | Metascore: ${movie.Metascore}`;

        const genresDiv = document.createElement("div")

        movie.Genres.forEach(genre => {
            const genreSpan = document.createElement("span");
            genreSpan.className = "genre";
            genreSpan.textContent = genre;
            genresDiv.appendChild(genreSpan)
        });

        const actors = document.createElement("p")
        actors.textContent = `Actors: ${movie.Actors.join(", ")}`;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.onclick = function() {
            location.href = "edit.html?imdbID=" + movie.imdbID;
        };

        article.appendChild(title);
        article.appendChild(img);
        article.appendChild(plot);
        article.appendChild(info);
        article.appendChild(rating);
        article.appendChild(genresDiv);
        article.appendChild(actors);
        article.appendChild(editButton);

        bodyElement.appendChild(article);
      }
    } else {
      bodyElement.append(
        "Daten konnten nicht geladen werden, Status " +
          xhr.status +
          " - " +
          xhr.statusText
      );
    }
  };
  xhr.open("GET", "/movies");
  xhr.send();
};
