import React from 'react'
import s from './GameField.module.css'
import Cell from "./Cell/Cell"

class GameField extends React.Component {
    constructor(props) {
        super(props);
        let ships = props.ships ?? [];

        this.state = {
            ships,
            owner: props.owner,
        }
    }

    render() {
        let occupied = this.props.field;
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
                                onDropShip={this.props.onDropShip}
                            />
                        </div>
                    })
                }
            </div>

        })

        return <div className={this.state.owner ? s.field : s.field}>
            <div className={s.table}>
                {cells}
            </div>
        </div>
    }
}



export default GameField;

