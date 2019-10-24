import React from "react";
import s from "./SudokuRows.module.css";

const SudokuCells = (props) => {

	let changeCell = (event) => {
		let number = event.target.value;
		let position = event.target.id;
		props.changeCell(number, position);
	}


	let cells = props.row.map((el, index) => {
		if (!props.gameChecked) {
			if (el.changeable) {
				return <input id={props.id.toString() + index.toString()}
					key={index} 
					type="text" 
					value={el.userGuess} 
					className={s.cell} 
					autoComplete="off"
					onChange={changeCell} />
			} else {
				return <input id={props.id.toString() + index.toString()}
					key={index} 
					type="text" 
					value={el.value} 
					className={s.cell} 
					autoComplete="off"
					onChange={changeCell} 
					disabled />
			}		
		} else {
			if (el.changeable) {
				if (el.guessedCorrectly) {
					return <input id={props.id.toString() + index.toString()}
					key={index} 
					type="text" 
					value={el.userGuess} 
					className={`${s.cell} ${s.guessedCorrectly}`} 
					autoComplete="off"
					onChange={changeCell} />
				} else {
					return <input id={props.id.toString() + index.toString()}
					key={index} 
					type="text" 
					value={el.userGuess} 
					className={`${s.cell} ${s.guessedWrong}`} 
					autoComplete="off"
					onChange={changeCell} />
				}
				
			} else {
				return <input id={props.id.toString() + index.toString()}
					key={index} 
					type="text" 
					value={el.value} 
					className={`${s.cell} ${s.given}`} 
					autoComplete="off"
					onChange={changeCell} 
					disabled />
			}		
		}
			
	});

	return (
		<div className={s.row}>
			{cells}
		</div>
	)
}

export default SudokuCells;