import { useEffect } from "react";

const API_URL = "https://rickandmortyapi.com/api/character";

async function fetchCharacters() {
	try {
		const response = await fetch(API_URL);

		if (!response.ok) {
			throw new Error("Response was not ok!");
		}

		const data = await response.json();

		return data.results.slice(0, 12);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
}

function App() {
	let characters;
	useEffect(() => {
		characters = fetchCharacters();
	}, []);
	return (
		<div className="app">
			<h1>Rick and Morty Memory Game</h1>
			<p>
				Get points by clicking on an image that you did not click
				before! Up to 12 points.
			</p>
		</div>
	);
}

export default App;
