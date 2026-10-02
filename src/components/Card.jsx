export default function Card({ char, handleCardClick }) {
	return (
		<div className="card" onClick={() => handleCardClick(char.id)}>
			<img src={char.image} alt={char.name} />
			<p>{char.name}</p>
		</div>
	);
}
