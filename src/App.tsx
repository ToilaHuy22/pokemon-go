import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const App: React.FC = () => {
	const [pokemon, setPokemon] = useState<string[]>([]);

	useEffect(() => {
		const getPokemon = async () => {
			const res = await axios.get(
				'https://pokeapi.co/api/v2/pokemon?limit=20&offset=20'
			);
			console.log(res.data);
		};
		getPokemon();
	}, []);

	return (
		<div className="App">
			<div className="container">
				<header className="pokemon-header">Pokemon</header>
			</div>
		</div>
	);
};

export default App;
