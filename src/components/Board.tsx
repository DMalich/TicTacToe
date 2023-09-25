import { useState, useEffect } from "react";
import Cell from "./Cell";

type Player = "X" | "O" | "Tie" | null;

function Board() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState<Player>(null); 
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X" : "O"
    );

    function setCellValue(index: number) {

    };

    function reset() {
        setCells(Array(9).fill(null));
        setWinner(null);
        setCurrentPlayer(Math.round(Math.random() * 1) === 1 ? "X" : "O");
    };

    function getWinner(cells: Player[]) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6] 
        ];

        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];

            
        }
    };

    useEffect(() => {
        const winner = getWinner(cells);

        if (winner) {
            setWinner(winner);
        }

        if (!winner && ) {
            setWinner("Tie");
        }
    });

    return (
        <div>
            <p>{currentPlayer}, it is you turn now!</p>
            {winner && winner !== "Tie" && <p>Congratulations, {winner}!</p>}
            {winner && winner === 'Tie' && <p>TIE!</p>}
            <div className="grid">
                  
            </div>
        </div>
    )
}

export default Board;