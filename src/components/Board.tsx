import { useState, useEffect } from "react";
import Cell from "./Cell";

function Board() {
    const [cells, setCells] = useState(Array(9).fill(null));
    const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">(
        Math.round(Math.random() * 1) === 1 ? "X" : "O"
    ); 

    function setCellValue(index: number) {

    };

    function reset() {

    };

    function getWinner() {

    };

    return (
        <div>
            <div className="grid">
                  
            </div>
        </div>
    )
}

export default Board;