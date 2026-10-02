# Rick and Morty Memory Game 🧠🎮

A memory card game built with React as part of [The Odin Project](https://www.theodinproject.com/) curriculum. Test your memory by clicking on unique Rick and Morty characters without repeating any of them!

## Live Demo 🚀

link -> https://memory-card-gbrb454ux-yunemak.vercel.app/

## Features ✨

- **Dynamic Data Fetching:** Characters and images are fetched in real-time from the official [Rick and Morty API](https://rickandmortyapi.com/).
- **Score Tracking:** Keeps track of your current score and updates your best score (`Best Score`) dynamically.
- **Shuffle Mechanism:** Cards are automatically shuffled after every click using a custom shuffle algorithm to keep the game challenging.
- **Win/Loss Logic:** Detects if you've clicked a duplicate card (Game Over) or successfully clicked all 12 unique cards (Victory).

---

## Built With 🛠️

- **React** (Functional Components, Hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **CSS3** (Grid Layout, Flexbox)
- **Rick and Morty API**

---

## Getting Started ⚙️

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/YOUR_USERNAME/memory-card.git
    ```

2. Navigate to the project directory:

    ```bash
    cd memory-card
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Run the development server:

    ```bash
    npm run dev
    ```

5. Open your browser and visit `http://localhost:5173` (or the port provided by Vite).

---

## What I Learned 💡

- Managing complex state and keeping track of user interactions in React.
- Fetching and handling asynchronous data from external REST APIs using `useEffect`.
- Implementing game logic (duplicate checking, score resets, and win conditions).
- Reusing components effectively with props and callback functions.

---

## Acknowledgements 🙏

- [The Odin Project](https://www.theodinproject.com/) for the project guidelines and curriculum.
- [The Rick and Morty API](https://rickandmortyapi.com/) for providing the free character data and images.
