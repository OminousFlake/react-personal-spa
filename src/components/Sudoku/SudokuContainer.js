import {
    resetSudoku,
    createGrid,
    changeCell,
    toggleStartButton,
    checkAnswers
} from "../../redux/sudoku-reducer.js";
import Sudoku from "./Sudoku.js";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        grid: state.sudokuPage.grid,
        isLoading: state.sudokuPage.isLoading,
        gameStarted: state.sudokuPage.gameStarted,
        gameChecked: state.sudokuPage.gameChecked,
        numberOfMistakes: state.sudokuPage.numberOfMistakes,
        gameFinished: state.sudokuPage.gameFinished
    }
};

const SudokuContainer = connect(mapStateToProps, {
    createGrid, resetSudoku, changeCell, toggleStartButton, checkAnswers
})(Sudoku);


export default SudokuContainer;