import { GamePlugin } from "../core/gameplugin"


// the basic game from rec07:

enum Player {
    PlayerX = 0,
    PlayerO = 1
}
type PlayerOrEmpty = Player | null


interface Game {
    readonly board: Board
    getNextPlayer(): Player
    getWinner(): PlayerOrEmpty
    play(x: number, y: number): Game
}

interface Board {
    updateCell(x: number, y: number, player: Player): Board
    getCell(x: number, y: number): PlayerOrEmpty
}


function initializeGame(): Game {
    return newGame(newEmptyBoard(), Player.PlayerX, [])
}
function newGame(board: Board, nextPlayer: Player, history: Game[]): Game {
    return {
        board: board,
        play: function (x: number, y: number): Game {
            if (board.getCell(x,y)!==null) return this
            if (this.getWinner()!==null) return this
            const newHistory = history.slice()
            newHistory.push(this)
            return newGame(
                board.updateCell(x, y, nextPlayer),
                1 - nextPlayer,
                newHistory)
        },
        getWinner: function (): PlayerOrEmpty {
            for (let row = 0; row < 3; row++)
                if (board.getCell(row, 0) !== null && board.getCell(row, 0) === board.getCell(row, 1) && board.getCell(row, 1) === board.getCell(row, 2)) return board.getCell(row, 0)
            for (let col = 0; col < 3; col++)
                if (board.getCell(0, col) !== null && board.getCell(0, col) === board.getCell(1, col) && board.getCell(0, col) === board.getCell(2, col)) return board.getCell(0, col)
            if (board.getCell(1, 1) !== null && board.getCell(0, 0) === board.getCell(1, 1) && board.getCell(1, 1) === board.getCell(2, 2)) return board.getCell(1, 1)
            if (board.getCell(1, 1) !== null && board.getCell(0, 2) === board.getCell(1, 1) && board.getCell(1, 1) === board.getCell(2, 0)) return board.getCell(1, 1)
            return null
        },
        getNextPlayer: function () {
            return nextPlayer
        }
    }
}

function newEmptyBoard(): Board {
    return newBoard(new Array(9).fill(null, 0, 9))
}




function newBoard(cells: PlayerOrEmpty[]): Board {
    return {
        updateCell: function (x: number, y: number, player: Player): Board {
            const newCells = cells.slice()
            newCells[y * 3 + x] = player
            return newBoard(newCells)
        },
        getCell: function (x, y) {
            return cells[y * 3 + x]
        }
    }
}



// TODO: Implement the plugin
//
// function init (): GamePlugin {
//     throw new Error("not yet implemented")
// }
//Last login: Wed Nov 10 14:39:57 on ttys000
➜  ~ git:(master) ✗ cd/Users/inhokang/Desktop/2021_FALL/17-214/recitation/17214-21fall-rec10/typescript/src
zsh: no such file or directory: cd/Users/inhokang/Desktop/2021_FALL/17-214/recitation/17214-21fall-rec10/typescript/src
➜  ~ git:(master) ✗ cd /Users/inhokang/Desktop/2021_FALL/17-214/recitation/17214-21fall-rec10/typescript/src
➜  src git:(master) ✗ ls
core            index.ts        pluginloader.ts plugins         ui.ts
➜  src git:(master) ✗ cd plugins
➜  plugins git:(master) ✗ ls
memory.ts            rockpaperscissors.ts tictactoe.ts
➜  plugins git:(master) ✗ vim tictactoe.ts











            return nextPlayer
        }
    }
}

function newEmptyBoard(): Board {
    return newBoard(new Array(9).fill(null, 0, 9))
}




function newBoard(cells: PlayerOrEmpty[]): Board {
    return {
        updateCell: function (x: number, y: number, player: Player): Board {
            const newCells = cells.slice()
            newCells[y * 3 + x] = player
            return newBoard(newCells)
        },
        getCell: function (x, y) {
            return cells[y * 3 + x]
        }
    }
"tictactoe.ts" 128L, 4329B written

// exportimport { GameFramework } from '../core/framework'
import { GamePlugin } from '../core/gameplugin'

// the basic game from rec07:

enum Player {
    PlayerX = 0,
    PlayerO = 1
}
type PlayerOrEmpty = Player | null
enum Result { WIN, LOSE, TIE }

interface Game {
    readonly board: Board
    getNextPlayer(): Player
    getWinner(): PlayerOrEmpty
    play(x: number, y: number): Game
}

interface Board {
    updateCell(x: number, y: number, player: Player): Board
    getCell(x: number, y: number): PlayerOrEmpty
}


function initializeGame(): Game {
    return newGame(newEmptyBoard(), Player.PlayerX, [])
}
function newGame(board: Board, nextPlayer: Player, history: Game[]): Game {
    return {
        board: board,
        play: function (x: number, y: number): Game {
            if (board.getCell(x,y)!==null) return this
            if (this.getWinner()!==null) return this
            const newHistory = history.slice()
            newHistory.push(this)
            return newGame(
                board.updateCell(x, y, nextPlayer),
                1 - nextPlayer,
                newHistory)
        },
        getWinner: function (): PlayerOrEmpty {
            for (let row = 0; row < 3; row++)
                if (board.getCell(row, 0) !== null && board.getCell(row, 0) === board.getCell(row, 1) && board.getCell(row, 1) === board.getCell(row, 2)) return board.getCell(row, 0)
            for (let col = 0; col < 3; col++)
                if (board.getCell(0, col) !== null && board.getCell(0, col) === board.getCell(1, col) && board.getCell(0, col) === board.getCell(2, col)) return board.getCell(0, col)
            if (board.getCell(1, 1) !== null && board.getCell(0, 0) === board.getCell(1, 1) && board.getCell(1, 1) === board.getCell(2, 2)) return board.getCell(1, 1)
            if (board.getCell(1, 1) !== null && board.getCell(0, 2) === board.getCell(1, 1) && board.getCell(1, 1) === board.getCell(2, 0)) return board.getCell(1, 1)
            return null
        },
        getNextPlayer: function () {
            return nextPlayer
        }
    }
}

function newEmptyBoard(): Board {
    return newBoard(new Array(9).fill(null, 0, 9))
}




function newBoard(cells: PlayerOrEmpty[]): Board {
    return {
        updateCell: function (x: number, y: number, player: Player): Board {
            const newCells = cells.slice()
            newCells[y * 3 + x] = player
            return newBoard(newCells)
        },
        getCell: function (x, y) {
            return cells[y * 3 + x]
        }
    }
}

const GAME_START_FOOTER = 'You are playing tic tac toe!'
const PLAYER1_WON_MSG = 'P1 won!'
const PLAYER2_WON_MSG = 'P2 won!'
const GAME_TIED_MSG = 'The game ended in a tie.'

// TODO: Implement the plugin
//
function init (): GamePlugin {
    let framework: GameFramework | null = null
    let gameResult: Result | null = null
    return {
        getGameName () { return 'tic tac toe' },
    
        getGridWidth (): number { return 3 },
    
        getGridHeight (): number { return 3 },
        onRegister (f: GameFramework): void { framework = f },
        onNewGame (): void {
          if (framework === null) return
          framework.setFooterText(GAME_START_FOOTER)
          framework.setSquare(State.ROCK, 0, 'Rock')
          framework.setSquare(State.PAPER, 0, 'Paper')
          framework.setSquare(State.SCISSORS, 0, 'Scissors')
          gameResult = null
        },
        onNewMove (): void { }, // Nothing to do here.
        isMoveValid (x: number, y: number): boolean {
          return true // Impossible to make an invalid move.
        },
        isMoveOver (): boolean {
          return gameResult !== null
        },
        onMovePlayed (x: number, y: number): void {
          gameResult = play(x)
        },
        isGameOver (): boolean {
          return gameResult !== null
        },
        getGameOverMessage (): string {
          switch (gameResult) {
            case Result.TIE: return GAME_TIED_MSG
            case Result.WIN: return PLAYER_WON_MSG
            case Result.LOSE: return COMPUTER_WON_MSG
            default: throw new Error('Called getGameOverMessage with incomplete game')
          }
        },
        onGameClosed (): void { }, // Nothing to do here.
        currentPlayer (): string { return 'Human' }
      }
}

export { init } 
