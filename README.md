# Sorting Visualizer

A web-based application to visualize and learn sorting algorithms with interactive animations. This project demonstrates the implementation of algorithms like Bubble Sort, Quick Sort, and Merge Sort with real-time graphical representations using HTML5 Canvas and JavaScript. The app includes user authentication and data persistence using MongoDB.

---

## Features

### Core Features
- Visualization of popular sorting algorithms:
  - Bubble Sort
  - Quick Sort
  - Merge Sort
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
- **Deployed Online (Optional):**
  - Optionally deployed in the cloud for public access.

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
