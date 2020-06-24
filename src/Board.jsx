import React, { useEffect, useState } from 'react'
import BingoTile from './BingoTile.jsx';
import terms from './terms.json';
terms.sort(() => Math.random() - 0.5);


export default function Board(props) {

	let rows = [];
	let matrix = [];
	let indexOfTerm = 0;

	const checkComplete = () => {

		let win = false;
		let ltrdiagonalWin = true;
		let rtldiagonalWin = true;
		let pottentialColWins = [];

		for (let i = 0; i < matrix.length; i++) {
			pottentialColWins[i] = 0;
		}

		for (let i = 0; i < matrix.length; i++) {

			for (let a = 0; a < matrix[i].length; a++) {
				if (matrix[i][a] == 1) {
					pottentialColWins[a] += 1;
				}
			}


			if (matrix[i].filter((item) => (item == 0)).length == 0) {
				win = true;
			}

			if (matrix[i][i] != 1) {
				ltrdiagonalWin = false;
			}

			if (matrix[matrix.length - i - 1][i] != 1) {
				rtldiagonalWin = false;
			}



		}
		if (!win && ltrdiagonalWin) {
			win = true;
		}
		if (!win && rtldiagonalWin) {
			win = true;
		}

		if (pottentialColWins.filter((col) => (col == matrix.length)).length) {
			win = true;
		}
		props.setWin(win);
	}

	const updateCompleteMatrix = (x, y) => {
		console.log(matrix);
		console.log(x, y)
		if (typeof matrix[x] != "undefined") {
			if (typeof matrix[x][y] != "undefined") {
				matrix[x][y] = 1;
				checkComplete();
			}
		}
	}

	for (let i = 0; i < props.dimension; i++) {
		let row = [];
		let matrixRow = [];
		for (let a = 0; a < props.dimension; a++) {
			matrixRow.push(0);
			row.push(<BingoTile
				key={i + a}
				x={i}
				y={a}
				dimension={props.dimension}
				name={terms[indexOfTerm]}
				clickEvent={updateCompleteMatrix}
			/>)
			indexOfTerm++;
		}

		matrix.push(matrixRow);
		rows.push(row);
	}




	return (
		<div className="bingoBoard">
			{rows}
		</div>
	)
}
