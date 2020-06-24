import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';

import './styles.scss';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export default function App() {

	const [dimensions, setDimensions] = useState(3);
	const [start, setStart] = useState(false);
	const [win, setWin] = useState(false);

	return (
		<div className="bbContainer">
			<h1>⚡️⚡️ BUZZWORD BINGO ⚡️⚡️</h1>
			{(win) && (
				<div className="alert alert-success">Congrats! You Won!</div>
			)}
			<p>Welcome to buzzword bingo, a small react bingo game to play during meetings.</p>
			{(!start) && (
				<div>
					<label htmlFor="boardSize">Size of Board</label><br />
					<select className="form-control" name="boardSize" onChange={(e) => {
						setDimensions(e.target.value)
					}}>
						<option value={3}>3x3 Grid</option>
						<option value={4}>4x4 Grid</option>
						<option value={5}>5x5 Grid</option>
					</select>
					<br />
					<button className="btn btn-primary" onClick={(e) => { setStart(true) }}>Start Game!</button>
				</div>
			)}
			{(start) && (
				<Board setWin={setWin} dimension={dimensions} />
			)}
		</div>
	)
}

ReactDOM.render(<App />, document.querySelector(".react_container"));
