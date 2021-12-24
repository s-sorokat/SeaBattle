import React from 'react'
import s from './ShipCell.module.css'

export default function ShipCell(props) {
    let classes = `${s.cell} ${props.isOccupied ? s.busy : s.free}`
    return <div
        className={classes}
        onMouseDown={() => {
            console.log(`Selected ${props.id}`)
            props.onSelectShipCell(props.id)
            if (props.onSelect) props.onSelect(props.id);
        }}
         
    >

    </div>
}