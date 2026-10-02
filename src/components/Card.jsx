export default function Card({ char }) {
	return (
		<div className="card">
			<img src={char.image} />
			<p>{char.name}</p>
		</div>
	);
}
