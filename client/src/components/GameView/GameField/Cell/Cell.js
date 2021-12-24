import React from 'react'
import s from './Cell.module.css'

export default function Cell(props) {
    let classes = `${s.cell} ${props.isOccupied ? s.busy : s.free}`
    return <div
        className={classes}
        onDragOver={(event) => {
            event.dataTransfer.dropEffect = "move"
            event.preventDefault()
        }}
        onDrop={() => {
            let x = props.x
            let y = props.y
            props.onDropShip({x, y})
        }}
    >
    </div>
}
