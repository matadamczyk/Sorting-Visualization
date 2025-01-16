# Sorting Visualizer

A web-based application to visualize and learn sorting algorithms with interactive animations. This project demonstrates the implementation of algorithms like Bubble Sort, Quick Sort, Merge Sort, Insertion Sort, and Selection Sort with real-time graphical representations using HTML5 Canvas and JavaScript. The app includes user authentication and data persistence using MongoDB.

---

## Features

### Core Features
- Visualization of popular sorting algorithms:
  - Bubble Sort
  - Quick Sort
  - Merge Sort
  - Insertion Sort
  - Selection Sort
- Interactive interface to start and pause animations.
- Adjustable parameters (e.g., array size and sorting speed).
- Real-time animations rendered on an HTML5 `<canvas>`.

### Additional Features
- **User Authentication:**
  - User registration and login.
  - User profile with saved preferences (e.g., algorithm choice and animation settings).
- **Backend API:**
  - Secure user data storage using MongoDB.
  - RESTful API for communication between the client and the server.
- **Responsive Design:**
  - Works seamlessly on desktop and mobile browsers.
- **Deployed Online:**
  - Deployed in the cloud for public access.

---

## Tech Stack

### Frontend
- **HTML5** (with semantic elements: `<header>`, `<nav>`, `<article>`, etc.)
- **CSS3** (custom styles and animations)
- **JavaScript (ES6+)** (Canvas rendering, sorting logic, and event handling)

### Backend
- **Node.js** with **Express.js**
- **MongoDB** for database storage
- **JWT** for user authentication
- **Helmet** for security headers
- **dotenv** for environment variable management

---

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/matadamczyk/Sorting-Visualization.git
   cd Sorting-Visualization
2. Install dependencies:
   npm install
3. Set up environment variables: Create a .env file in the root directory and add<vscode_annotation details='%5B%7B%22title%22%3A%22hardcoded-credentials%22%2C%22description%22%3A%22Embedding%20credentials%20in%20source%20code%20risks%20unauthorized%20access%22%7D%5D'> the</vscode_annotation> following:
   JWT_SECRET=your_jwt_secret
   MONGODB_URI=your_mongodb_uri
4. Start the development server:
   npm start
5. Open your browser and navigate to http://localhost:3000

## Usage
1. Register or log in to access the application.
2. Choose a sorting algorithm from the available options.
3. Adjust the array size and sorting speed using the provided controls.
4. Click "Show Starting Array" to generate a random array.
5. Click "Start Visualization" to begin the sorting animation.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request for any improvements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.

## Contact
For any questions or feedback, please contact matadamczyk.