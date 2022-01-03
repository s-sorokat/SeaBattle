import React from 'react'
import Cell from "./ShipCell/ShipCell"
import s from './Ship.module.css'

function Ship(props){

        let blocks = [];
        for (let i = 0; i < props.ship.size; i++) {
            blocks = [...blocks, <Cell
                onSelectShipCell={props.onSelectShipCell}
                key={i}
                id={i}
                isOccupied={true}
            />]

        }

        let classes = [s.ship];
        if (!props.ship.isHorizontal) classes.push(s.vertical)

        return (<div
            className={classes.join(" ")}
            key={props.ship.id}
            draggable="true"
            onDragStart={() => {
                props.selectShip(props.ship.id);
            }}
            onDoubleClick={(event) => {
                if (event.buttons === 0) props.rotateShip(props.ship.id)
            }}
        >
            {blocks}
        </div>)

}

export default Ship