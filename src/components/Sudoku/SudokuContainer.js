import React from 'react';
import {
    resetSudokuAC,
    createGridAC,
    changeCellAC,
    toggleStartButtonAC,
    checkAnswersAC
} from "../../redux/sudoku-reducer.js";
import Sudoku from "./Sudoku.js";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        grid: state.sudokuPage.grid,
        isLoading: state.sudokuPage.isLoading,
        isSpinning: state.sudokuPage.isSpinning,
        gameStarted: state.sudokuPage.gameStarted
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        resetSudoku: () => {
            dispatch(resetSudokuAC());
        },
        createGrid: () => {
            dispatch(createGridAC());
        },
        changeCell: (number, location) => {
            dispatch(changeCellAC(number, location));
        },
        toggleStartButton: () => {
            dispatch(toggleStartButtonAC());
        },
        checkAnswers: () => {
            dispatch(checkAnswersAC());
        }
    }
};

const SudokuContainer = connect(mapStateToProps, mapDispatchToProps)(Sudoku);


export default SudokuContainer;