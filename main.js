

let movieArrays = [
    ["The King's Speech", 'Black Swan', 'The Fighter', 'Inception', 'The Kids Are All Right', '127 Hours', 'The Social Network', 'Toy Story 3', 'True Grit', "Winter's Bone"],
    ['The Artist', 'The Descendants','Extremely Loud and Incredibly Close', 'The Help', 'Hugo', 'Midnight in Paris', 'Moneyball', 'The Tree of Life', 'War Horse'],
    ['Argo', 'Amour','Beasts of the Southern Wild','Django Unchained','Les Misérables','Life of Pi','Lincoln','Silver Linings Playbook','Zero Dark Thirty'],
    ['12 Years a Slave','American Hustle','Captain Phillips','Dallas Buyers Club','Gravity','Her','Nebraska','Philomena','The Wolf of Wall Street'],
    ['Birdman or (The Unexpected Virtue of Ignorance)', 'American Sniper','Boyhood','The Grand Budapest Hotel','The Imitation Game','Selma','The Theory of Everything','Whiplash'],
    ['Spotlight','The Big Short','Bridge of Spies','Brooklyn','Mad Max: Fury Road', 'The Martian', 'The Revenant', 'Room'],
    ['Moonlight', 'Arrival', 'Fences', 'Hacksaw Ridge', 'Hell or High Water','Hidden Figures', 'La La Land', 'Lion','Manchester by the Sea'],
    ['The Shape of Water','Call Me by Your Name','Darkest Hour','Dunkirk','Get Out','Lady Bird','Phantom Thread','The Post', 'Three Billboards Outside Ebbing, Missouri'],
    ["Green Book", 'Black Panther', 'BlacKkKlansman', 'Bohemian Rhapsody', 'The Favourite', 'Roma', 'A Star is Born','Vice'],
];

//console.log(movieArrays);

const cardContainer = document.getElementById('movie-container');
const yearSelector = document.getElementById('year-select');
yearSelector.addEventListener("change", ()=>{
  let condition = yearSelector.options[yearSelector.selectedIndex].value;
  //console.log(condition);
  const arraySelected = movieArrays[condition];
  selectedMovies = [];
  obtainMovies(arraySelected);
  //console.log(arraySelected);
  });

  //Create Cards
  const drawnCards = (movie) => {
    let card = `<div class="card">
      <div class=" ">
        <img class=" " src="${movie.poster}" alt="No Poster">
      </div>
      <div class=" ">
        <span class=" ">${movie.title}</span>
        <p>${movie.year}</p>
      </div>
      <div class=" ">
        <span class=" ">${movie.title}</span>
        <p>Director: ${movie.director}</p>
        <p>Cast: ${movie.actors}</p>
        <p>Run time: ${movie.runTime}</p>
        <h5>Synopsis</h5>
        <p>${movie.plot}.</p>
      </div>
    </div>`;
    cardContainer.insertAdjacentHTML("beforeend", card);
  };
  
  
  //Showing List Data
  const showCards = (moviesList) => {
    cardContainer.innerHTML = "";
    moviesList.forEach(element => {
      drawnCards(element);
    });
  };
  
//Geting data from API
  const obtainDataJson = (title) => {
    fetch('http://www.omdbapi.com/?t=' + title + "&apikey=4a33a137")
      .then(response => response.json())
      .then(dataMovies => {
        dataMoviesProperties = {
          title: dataMovies.Title,
          director: dataMovies.Director,
          actors: dataMovies.Actors,
          plot: dataMovies.Plot,
          runTime: dataMovies.Runtime,
          poster: dataMovies.Poster,
          year: dataMovies.Year,
          website: dataMovies.Website
        };
        selectedMovies.push(dataMoviesProperties);
        showCards(selectedMovies);
      })
  }

//Geting selected array info
  const obtainMovies = (arraySelected) => {
    for (let i = 0; i < arraySelected.length; i++) {
      obtainDataJson(arraySelected[i]);
    }
  }
    
