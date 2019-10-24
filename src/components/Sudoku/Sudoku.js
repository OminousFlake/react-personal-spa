import React from "react";
import SudokuRows from "./SudokuRows/SudokuRows.js";
import s from "./Sudoku.module.css";
import loader from "./yinAndYang.png";
import endGamePicture from "./winner.gif";

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

    return (
    	<div className={s.sudokuContainer}>
    		<div className={s.heading}>Sudoku</div>
            {props.gameFinished ?
            <> 
            <div className={s.loader}>
                <img src={endGamePicture} className={s.gameWon} alt="You are the boss"/>
            </div> 
            <span type="text" className={s.showLoading}>Прекрасная игра!</span>
            <div className={s.buttonsBlock}>
                <button onClick={showGrid} className={s.disabled} disabled>Начать</button>
                <button onClick={checkSudoku} className={s.disabled} disabled>Проверить</button>
                <button onClick={resetSudoku}>Выход</button>
            </div>
            </>
            :
            <>
            <>
            {props.isLoading ? 
            <div className={s.loader}>
                <img src={loader} className={s.spinning} alt="Yin and Yang"/>
            </div> : 
            <SudokuRows grid={props.grid} 
                        changeCell={props.changeCell} 
                        gameChecked={props.gameChecked} />}
            </>
            <span type="text" className={s.showLoading}>
                {props.numberOfMistakes ? `Количество ошибок: ` + props.numberOfMistakes : `Введите число от 1 до 9`}
            </span>
            <div className={s.buttonsBlock}>
                {props.gameStarted ? <>
                    <button onClick={showGrid} className={s.disabled} disabled>Начать</button>
                    <button onClick={checkSudoku}>Проверить</button>
                    <button onClick={resetSudoku}>Выход</button>
                    </> :
                    <>
                    <button onClick={showGrid}>Начать</button>
                    <button onClick={checkSudoku} className={s.disabled} disabled>Проверить</button>
                    <button onClick={resetSudoku} className={s.disabled} disabled>Выход</button>
                    </>
                }
            </div>
            </>
        }
    	</div>
    )
};

export default Sudoku;