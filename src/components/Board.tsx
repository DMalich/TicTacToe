import { useEffect, useState } from "react";
import Cell from "./Cell";

type Player = "X" | "O" | "Tie" | null;
const PLAYER_X = "X";
const PLAYER_O = "O";

function Board() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState(
        Math.round(Math.random() * 1) === 1 ? PLAYER_X : PLAYER_O
    );
    const [winner, setWinner] = useState<Player | null>(null);

    function setCellValue(index: number) {
        const newData = cells.map((value, idx) => {
            if (idx === index) {
                return currentPlayer;
            }
            return value;
        });

        setCells(newData);
        setCurrentPlayer(currentPlayer === PLAYER_O ? PLAYER_X : PLAYER_O);
    }

    function reset() {
        setCells(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? PLAYER_X : PLAYER_O);
    }

    function getWinner(cells: Player[]) {
        const LINES = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] 
        ];

        for (let i = 0; i < LINES.length; i++) {
            const [a, b, c] = LINES[i];

            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                return cells[a];
            }
        }
        return null;
    }

    useEffect(() => {
        const winner = getWinner(cells);

        if (winner) {
            setWinner(winner);
        }

        if (!winner && !cells.filter((cell) => !cell).length) {
            setWinner("Tie");
        }
    });

    return (
        <div>
            <p>{currentPlayer}, it is your turn!</p>
            {winner && winner !== "Tie" && <p>Congratulations, {winner}!</p>}
            {winner && winner === "Tie" && <p>TIE!</p>}

            <div className="grid">
                {Array(9)
                    .fill(null)
                    .map((_, i) => {
                        return (
                            <Cell
                                key={i}
                                onClick={() => {
                                    setCellValue(i);
                                }}
                                winner={winner}
                                value={cells[i]}
                            />
                        );
                    })}
            </div>
            <div className="btn-container">
                <button className="btn-reset" onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    );
}

export default Board;