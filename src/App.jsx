import { useEffect, useState } from "react";
import Card from "./components/Card";

const API_URL = "https://rickandmortyapi.com/api/character";

function shuffleArray(array) {
	const shuffled = [...array];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}

function App() {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		async function fetchCharacters() {
			try {
				const response = await fetch(API_URL);

				if (!response.ok) {
					throw new Error("Response was not ok!");
				}

				const data = await response.json();
				console.log(data.results);
				setCharacters(data.results.slice(0, 12));
			} catch (error) {
				console.log(`Error: ${error}`);
			}
		}

		fetchCharacters();
	}, []);

	const handleCardClick = (id) => {
		setCharacters(shuffleArray(characters));
		console.log(`Tıklanan kart ID: ${id}`);
	};

	return (
		<div className="app">
			<h1>Rick and Morty Memory Game</h1>
			<p>
				Get points by clicking on an image that you did not click
				before! Up to 12 points.
			</p>
			<div className="card-container">
				{characters.map((char) => (
					<Card key={char.id} char={char} handleCardClick={handleCardClick}/>
				))}
			</div>
		</div>
	);
}

export default App;
