const resetSudoku = 'RESET_SUDOKU';
const createGrid = 'CREATE-GRID';
const changeCell = 'CHANGE_CELL';
const toggleStartButton = 'TOGGLE_START_BUTTON';
const checkAnswers = 'CHECK_ANSWERS';
let initialState = {
    grid: [],
    isLoading: true,
    gameStarted: false,
    gameChecked: false,
    numberOfMistakes: 0,
    gameFinished: false
};

const sudokuReducer = (state = initialState, action) => {
    switch (action.type) {
        case createGrid: {
            let copiedState = {...state};

            function createBasicGrid() {
                let newGrid = [];
                var blockNums = 3;
                var linesNums = 3;
                var maxNumberOfLineElements = 9;
                var initialLine, temp;
                var j, i, y;

                for (j = 0; j < blockNums; j++) {
                    initialLine = [];
                    for (y = 1; y <= maxNumberOfLineElements; y++) {
                        var tempObject = {};
                        tempObject.value = y;
                        initialLine.push(tempObject);
                    }
                    initialLine = initialLine.concat(initialLine.splice(0, j));
                    temp = [...initialLine];
                    for (i = 0; i < linesNums; i++) {
                        newGrid.push(temp);
                        temp = temp.slice(3).concat(temp.slice(0, 3));
                    } 
                }
                return newGrid;
            }


            function getRandomNumber(min, max) {
                var randomNumber = Math.floor(min + Math.random() * (max + 1 - min));
                return randomNumber;
            }
            
            function transposeGrid(grid) {
                var transposedGrid = [];
                var gridLine;
                var i, j;

                for (i = 0; i < grid.length; i++) {
                    gridLine = [];
                    for (j = 0; j < grid.length; j++) {
                        gridLine.push(grid[j][i]);
                    }
                    transposedGrid.push(gridLine);
                }
                return transposedGrid;
            }

            function swapRows(grid) {
                var i;
                for (i = 0; i < grid.length; i += 3) {
                    var randomLine = getRandomNumber(i, i + 2);
                    var temp = grid.splice(randomLine, 1);
                    var randomPosition = getRandomNumber(i, i + 1);
                    grid.splice(randomPosition, 0, ...temp);
                }
                return grid;
            }

            function swapColumns(grid) {
                var transposedGrid = transposeGrid(grid);

                var transposedSwappedGrid = swapRows(transposedGrid);

                var swappedColumnsGrid = transposeGrid(transposedSwappedGrid);

                return swappedColumnsGrid;
            }

            function swapRowAreas(grid) {
                var temp,
                    rand,
                    i;

                for (i = 0; i < grid.length; i = i + 3) {
                    temp = grid.splice(i, i + 3);
                    rand = getRandomNumber(0, 2) * 3;
                    grid.splice(rand, 0, ...temp);
                }
                
                return grid;
            }

            function swapColumnAreas(grid) {
                var transposedGrid = transposeGrid(grid);

                var transposedSwappedGrid = swapRowAreas(transposedGrid);

                var swappedColumnAreasGrid = transposeGrid(transposedSwappedGrid);

                return swappedColumnAreasGrid;

            }

            var sudokuFuncs = [transposeGrid, 
                                swapRows, 
                                swapColumns, 
                                swapRowAreas, 
                                swapColumnAreas];

            function randomiseGrid(grid, functionsArray, minChangesNumber, maxChangesNumber) {
                var timesToChange = getRandomNumber(minChangesNumber, maxChangesNumber);
                var randomFunctionNumber;
                var finalGrid = grid;
                var newGrid,
                    i;

                for (i = 0; i < timesToChange; i++) {
                    randomFunctionNumber = getRandomNumber(0, functionsArray.length - 1);
                    newGrid = functionsArray[randomFunctionNumber](finalGrid);
                    finalGrid = newGrid;
                }  
                
                return finalGrid;
            }

            function makeGaps(grid, gapsNumber) {
                var maxGapsNumber = 80;
                var randLine,
                    randElement,
                    i;

                if(gapsNumber < maxGapsNumber) {
                    for (i = 1; i <= gapsNumber; i++) {
                        randLine = getRandomNumber(0, grid.length - 1);
                        randElement = getRandomNumber(0, grid[0].length - 1);
                        if (grid[randLine][randElement]) {
                            var tempObject = {
                            value: grid[randLine][randElement].value,
                            userGuess: '',
                            changeable: true,
                            guessedCorrectly: false
                            };
                            grid[randLine].splice(randElement, 1, tempObject);
                        } else {
                            i--;
                        }
                    }
                }
                return grid;
            }

            let basicGrid = createBasicGrid();
            let randomGrid = randomiseGrid(basicGrid, sudokuFuncs, 100, 200);
            let gappedGrid = makeGaps(randomGrid, 79);
            copiedState.grid = gappedGrid;
            copiedState.isLoading = false;
            copiedState.gameStarted = true;
                
            return copiedState;
        }
        case resetSudoku: {
            let copiedState = {...state};
            copiedState.grid = [];
            copiedState.isLoading = true;
            copiedState.gameStarted = false;
            copiedState.gameChecked = false;
            copiedState.numberOfMistakes = 0;
            copiedState.gameFinished = false;
            return copiedState;
        }
        case changeCell: {
            let copiedState = {...state};
            copiedState.grid = [...state.grid];
            if (copiedState.grid.length > 0) {
                for (let i = 0; i < copiedState.grid.length; i++) {
                    copiedState.grid[i] = [...state.grid[i]];
                    for (let j = 0; j < copiedState.grid[i].length; j++) {
                        copiedState.grid[i][j] = {...state.grid[i][j]};
                    }
                }
            }

            let row = +action.cellLocation.slice(0, 1);
            let index = +action.cellLocation.slice(1);
            let input = action.userInput;
            let acceptedRange = /[1-9]/;
            if ((acceptedRange.test(input) || !input) && input.length < 2) {
                copiedState.grid[row][index].userGuess = input;
            } else {
                console.log('It must be a number from 1 to 9!');
            }
            return copiedState;
        }
        case toggleStartButton: {
            let copiedState = {...state};
            copiedState.gameStarted = action.boolean;
            return copiedState;
        }
        case checkAnswers: {
            let copiedState = {...state};
            copiedState.numberOfMistakes = 0;
            copiedState.grid = [...state.grid];
            if (copiedState.grid.length > 0) {
                for (let i = 0; i < copiedState.grid.length; i++) {
                    copiedState.grid[i] = [...state.grid[i]];
                    for (let j = 0; j < copiedState.grid[i].length; j++) {
                        copiedState.grid[i][j] = {...state.grid[i][j]};
                    }
                }
            }
            for (let x = 0; x < copiedState.grid.length; x++) {
                for (let y = 0; y < copiedState.grid[x].length; y++) {
                    if (copiedState.grid[x][y].userGuess || copiedState.grid[x][y].userGuess === '') {
                        if (copiedState.grid[x][y].userGuess != copiedState.grid[x][y].value) {
                            copiedState.numberOfMistakes++;
                            copiedState.grid[x][y].guessedCorrectly = false;
                        } else {
                            copiedState.grid[x][y].guessedCorrectly = true;
                        }
                    } 
                }
            }
            if (!copiedState.numberOfMistakes) {
                copiedState.gameFinished = true;
            }
            copiedState.gameChecked = true;
            
            return copiedState;
        }
        default:
            return state;
    }
};

export const createGridAC = () => ({type: createGrid});
export const resetSudokuAC = () => ({type: resetSudoku});
export const changeCellAC = (number, location) => ({
    type: changeCell, userInput: number, cellLocation: location});
export const toggleStartButtonAC = () => ({type: toggleStartButton});
export const checkAnswersAC = () => ({type: checkAnswers});

export default sudokuReducer;