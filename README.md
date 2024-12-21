
# MovieMart

MovieMart is an e-commerce platform designed to streamline the movie ticket booking experience. It provides an easy-to-use web application for both theater owners and moviegoers. The platform allows users to browse movies, select showtimes, and book tickets directly from theaters, eliminating inefficiencies like long queues, limited information, and confusing navigation.

## Features

### **For Moviegoers (Users)**
- **Authentication**: Secure login and registration to purchase tickets.
- **Browse Movies**: View all available movies listed on the platform.
- **Search & Filter**: Search movies by title, genre, or release date, and filter by showtime, rating, and genre.
- **View Showtimes**: See available showtimes for each movie.

## Tech Stack
- **Frontend**: 
  - **HTML**: Used to structure the content for both the theater owners and moviegoers.
  - **CSS** (Bootstrap): Styling to ensure the platform is user-friendly and responsive.
  - **JavaScript**: Handles dynamic content changes, user interactions, and data manipulation.
  
- **Backend**: 
  - **JSON**: Uses a `db.json` file to store and retrieve data such as movie details, bookings, and showtimes.

## Installation

To run this project locally, follow these steps:

### Prerequisites
- Make sure you have [Node.js](https://nodejs.org/) installed on your computer.

### 1. Clone the repository
```bash
git clone https://github.com/your-username/moviemart.git
cd moviemart
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the application
```bash
npm start
```
The application will be running on `http://localhost:3000` by default.

## File Structure

## How It Works
- **Theater Owners**:
  - After logging in, theater owners can add new movie showings, update existing ones, and manage bookings.
  
- **Moviegoers**:
  - After logging in, users can browse through all available movies, search for a specific movie, filter by genre or showtime, and select their desired movie and showtime to book tickets.

## Contributing

Feel free to fork this repository, create a branch, and submit pull requests. Here are some ways you can contribute:
- Add new features.
- Fix bugs.
- Improve the UI/UX.

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments
- Bootstrap for responsive design.
- JSON for storing data in a simple, accessible format.

---

This `README.md` file covers the essential components of your project, from the features and tech stack to the installation instructions. It assumes that you have some experience with setting up web applications. Let me know if you'd like any adjustments or additions!
