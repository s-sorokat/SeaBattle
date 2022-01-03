import React, { useState } from 'react'
import s from './GameField.module.css'
import Cell from "./Cell/Cell"

function GameField (props){
        const ships = props.ships ?? [];
        const [state, setState] = useState({
            ships,
            owner: props.owner,
        })

        let occupied = props.field;
        let coords = Array.from(Array(10).keys());
        let cells = coords.map(x => {
            return <div key={`row-${x}`} className={s.row}>
                {
                    coords.map(y => {
                        return <div key={`cell-${x}-${y}`}  className={s.col}>
                            <Cell
                                x={x}
                                y={y}
                                isOccupied={occupied[x][y].isOccupied}
                                onDropShip={props.onDropShip}
                            />
                        </div>
                    })
                }
            </div>

        })

        return (<div className={state.owner ? s.field : s.field}>
            <div className={s.table}>
                {cells}
            </div>
        </div>)
}




export default GameField;

