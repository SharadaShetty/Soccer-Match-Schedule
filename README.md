# Soccer Matches by Date

A web application to display upcoming soccer matches on a selected date using a free live football data API.

## Features

- Select a date and view soccer matches scheduled on that day.
- Match details include competing teams and match start time (with timezone).
- Responsive and user-friendly frontend.
- Node.js backend that fetches match data from the external API and formats it.

## Technologies Used

- Frontend: HTML, CSS, JavaScript (Vanilla)
- Backend: Node.js, Express, Axios
- CORS enabled for cross-origin requests

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/soccer-matches.git
   cd soccer-matches
2. Install backend dependencies:

   ```bash
   npm install
3. Update the API key in server.js:
    ```bash
    headers: {
      'x-rapidapi-host': 'free-api-live-football-data.p.rapidapi.com',
      'x-rapidapi-key': 'YOUR_RAPIDAPI_KEY'  // Replace with your API key
    }

### Running the Application

1. Start the backend server:
    ```bash
    node server.js
2. Open the index.html file in your browser (no server needed for frontend).
3. Select a date and get the soccer matches.

## API Used

[Free Live Football Data API](https://rapidapi.com/free-live-football-data/api/free-api-live-football-data)

## Project Structure

.
├── server.js           # Backend server code
├── index.html          # Frontend HTML file
├── package.json        # Node.js dependencies and scripts
├── package-lock.json   # Locked versions of dependencies for consistent installs
└── README.md           # This file

## Notes

- The backend expects the date query parameter in yyyymmdd format.
- The API key is required and should be kept private.
- Match times are displayed in your local timezone.

## License
This project is licensed under the MIT License.
Developer: Sharada Shetty
