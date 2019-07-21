import React from "react";
import SudokuRows from "./SudokuRows/SudokuRows.js";
import s from "./Sudoku.module.css";
import loader from "./../../components/Sudoku/yinAndYang.png";

const Sudoku = (props) => {
    let showGrid = () => {
        props.createGrid();  
    };
    
    let resetSudoku = () => {
        props.resetSudoku(); 
    };

    let checkSudoku = () => {
        props.checkAnswers();
    };
    
    let changeCell = props.changeCell;
    let isSpinning = props.isSpinning;

    let spinningBlock = React.createRef();
    let toggleSpinning = (event) => {
        let button = event.target;
        if (isSpinning) {
            isSpinning = false;
            button.style.backgroundColor = '#FF9090';
        } else {
            isSpinning = true;
            button.style.backgroundColor = '#90FFC8';
        }
    }


    return (
    	<div className={s.sudokuContainer}>
    		<div className={s.heading}>Sudoku</div>
            {props.isLoading ? 
                <div className={s.loader}>
                    <img src={loader} className={s.spinning} ref={spinningBlock} alt="Yin and Yang"/>
                </div> : 
                <SudokuRows grid={props.grid} changeCell={props.changeCell}/>}
            <button onClick={toggleSpinning} className={s.showLoading}>Изменить цвет кнопки</button>
    		<div className={s.buttonsBlock}>
            {props.gameStarted ? <>
                    <button onClick={showGrid} className={s.disabled} disabled>Start</button>
                    <button onClick={checkSudoku}>Check</button>
                    <button onClick={resetSudoku}>Reset</button>
                </> :
                <>
                <button onClick={showGrid}>Start</button>
                <button onClick={checkSudoku} className={s.disabled} disabled>Check</button>
                <button onClick={resetSudoku} className={s.disabled} disabled>Reset</button>
                </>
            }
    		</div>
    	</div>
    )
};

export default Sudoku;