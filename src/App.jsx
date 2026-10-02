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
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);
	const [clickedCardIds, setClickedCardIds] = useState([]);

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

		if (clickedCardIds.includes(id)) {
			alert("Game Over! You clicked this card before.");

			if (score > bestScore) {
				setBestScore(score);
			}
			setScore(0);
			setClickedCardIds([]);
		} else {
			const newScore = score + 1;
			setScore(newScore);
			setClickedCardIds([...clickedCardIds, id]);

			if (newScore === 12) {
				alert("Congratulations! You won the game!");
				if (newScore > bestScore) {
					setBestScore(newScore);
				}
				setScore(0);
				setClickedCardIds([]);
			}
		}
	};

	return (
		<div className="app">
			<header>
				<h1>Rick and Morty Memory Game</h1>
				<p className="scores">
					Score: {score}
					<br />
					Best Score: {bestScore}
				</p>
				<p>
					Get points by clicking on an image that you did not click
					before! Up to 12 points.
				</p>
				<div></div>
			</header>
			<div className="card-container">
				{characters.map((char) => (
					<Card
						key={char.id}
						char={char}
						handleCardClick={handleCardClick}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
