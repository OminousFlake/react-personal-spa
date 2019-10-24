import React from "react";
import SudokuCells from "./SudokuCells.js";
import s from "./SudokuRows.module.css";

const SudokuRows = (props) => {
	let rows = props.grid.map((el, index) => {
		return <SudokuCells row={el} 
							key={index} 
							id={index}
							changeCell={props.changeCell}
							gameChecked={props.gameChecked}/> 
	});

	return (
		<div className={s.grid}>
			{rows}
		</div>
	)
}

export default SudokuRows;