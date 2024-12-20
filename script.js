// Movie Search and Display
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const movieListContainer = document.getElementById('movie-list');
const movieModal = document.getElementById('movie-modal');
const closeMovieModal = document.getElementById('close-movie-modal');
const buyTicketBtn = document.getElementById('buy-ticket-btn');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.toLowerCase();
  fetchMovies(query);
});

function fetchMovies(query = '') {
  fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(data => {
      const filteredMovies = data.filter(movie => movie.title.toLowerCase().includes(query));
      populateMovies(filteredMovies);
    })
    .catch(error => console.error('Error fetching movies:', error));
}

function populateMovies(movies) {
  movieListContainer.innerHTML = '';
  movies.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie');
    movieElement.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>${movie.year}</p>
      <button onclick="showMovieDetails(${movie.id})">View Details</button>
    `;
    movieListContainer.appendChild(movieElement);
  });
}

function showMovieDetails(movieId) {
  fetch(`http://localhost:3000/movies/${movieId}`)
    .then(response => response.json())
    .then(movie => {
      document.getElementById('modal-title').textContent = movie.title;
      document.getElementById('modal-year').textContent = `Year: ${movie.year}`;
      document.getElementById('modal-sold-tickets').textContent = `Tickets Sold: ${movie.soldTickets} / ${movie.capacity}`;
      document.getElementById('modal-overview').textContent = movie.overview;
      document.getElementById('modal-poster').src = movie.poster;

      // Fix Buy Ticket functionality
      buyTicketBtn.onclick = () => buyTicket(movie);
      movieModal.style.display = 'block';
    })
    .catch(error => console.error('Error loading movie details:', error));
}

closeMovieModal.onclick = () => {
  movieModal.style.display = 'none';
};

function buyTicket(movie) {
  if (movie.soldTickets < movie.capacity) {
    movie.soldTickets++;

    fetch(`http://localhost:3000/movies/${movie.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ soldTickets: movie.soldTickets })
    })
    .then(() => {
      alert('Ticket purchased successfully!');
      showMovieDetails(movie.id);
    })
    .catch(error => console.error('Error purchasing ticket:', error));
  } else {
    alert('Sorry, no tickets available!');
  }
}


// Authentication Modals
const loginBtn = document.getElementById('login-btn');
const registerBtn = document.getElementById('register-btn');
const authModal = document.getElementById('auth-modal');
const closeAuthModal = document.getElementById('close-auth-modal');
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
const authError = document.getElementById('auth-error');

loginBtn.addEventListener('click', () => {
  authModal.style.display = 'block';
  loginForm.style.display = 'block';
  registerForm.style.display = 'none';
});

registerBtn.addEventListener('click', () => {
  authModal.style.display = 'block';
  loginForm.style.display = 'none';
  registerForm.style.display = 'block';
});

closeAuthModal.onclick = () => {
  authModal.style.display = 'none';
};

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const email = document.getElementById('auth-email').value.trim();
  const password = document.getElementById('auth-password').value.trim();

  if (!email || !password) {
    authError.textContent = 'Please fill in all fields';
    authError.style.display = 'block';
    return;
  }

  if (!validateEmail(email)) {
    authError.textContent = 'Invalid email format';
    authError.style.display = 'block';
    return;
  }

  loginUser(email, password);
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(email);
}

function loginUser(email, password) {
  // Simulating a login request here
  setTimeout(() => {
    alert('Logged in successfully!');
    authModal.style.display = 'none';
  }, 500);
}


// Render Movies on Page Load
window.onload = () => fetchMovies();

// Function to render movies
function renderMovies() {
  const movieListContainer = document.getElementById('movie-list');
  movieListContainer.innerHTML = '';  // Clear existing content

  movieData.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.classList.add('movie-card');

      movieCard.innerHTML = `
          <img src="${movie.poster}" alt="${movie.title} Poster" class="movie-poster">
          <div class="movie-card-content">
              <h2>${movie.title}</h2>
              <p>${movie.overview}</p>
              <p class="showtime">Showtime: ${movie.showtime}</p>
              <p class="status">${movie.soldTickets} / ${movie.capacity} tickets sold</p>
          </div>
      `;

      movieCard.addEventListener('click', () => openModal(movie));
      movieListContainer.appendChild(movieCard);
  });
}

// Function to open the modal
function openModal(movie) {
  const modal = document.getElementById('movie-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalDescription = document.getElementById('modal-overview');
  const modalShowtime = document.getElementById('modal-showtime');
  const modalTickets = document.getElementById('modal-tickets');
  const modalPoster = document.getElementById('modal-poster');
  const ticketCount = document.getElementById('ticket-count');
  const ticketCapacity = document.getElementById('ticket-capacity');
  const buyTicketBtn = document.getElementById('buy-ticket-btn');

  modalTitle.textContent = movie.title;
  modalDescription.textContent = movie.description;
  modalShowtime.textContent = `Showtime: ${movie.showtime}`;
  ticketCount.textContent = movie.soldTickets;
  ticketCapacity.textContent = movie.capacity;
  modalPoster.src = movie.poster;

  buyTicketBtn.onclick = () => {
      if (movie.soldTickets < movie.capacity) {
          movie.soldTickets++;
          ticketCount.textContent = movie.soldTickets;
          alert('You have successfully bought a ticket!');
      } else {
          alert('Sorry, this movie is sold out!');
      }
  };

  modal.style.display = 'block';  // Show the modal
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById('movie-modal');
  modal.style.display = 'none';  // Hide the modal
}

// Event listener for closing the modal
document.getElementById('close-modal').addEventListener('click', closeModal);
document.getElementById('modal-backdrop').addEventListener('click', closeModal);
