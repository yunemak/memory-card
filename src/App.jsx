import { useEffect } from "react";
import { getCharacters } from "rickmortyapi";

async function fetchCharacters() {
	try {
		const response = await getCharacters();
		console.log(response.data.results);
	} catch (error) {
		console.log(`Error: ${error}`);
	}
}

function App() {
	useEffect(() => {
		fetchCharacters();
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
