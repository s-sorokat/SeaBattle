import React from 'react'
import Cell from "./ShipCell/ShipCell"
import s from './Ship.module.css'

class Ship extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        let blocks = [];
        for (let i = 0; i < this.props.ship.size; i++) {
            blocks = [...blocks, <Cell
                onSelectShipCell={this.props.onSelectShipCell}
                key={i}
                id={i}
                isOccupied={true}
                onSelect={this.changeSelected}
            />]

        }

        let classes = [s.ship];
        if (!this.props.ship.isHorizontal) classes.push(s.vertical)

        return <div
            className={classes.join(" ")}
            key={this.props.ship.id}
            draggable="true"
            onDragStart={() => {

                this.props.selectShip(this.props.ship.id);
                //this.props.onDrag(this.props.ship)
            }}
            onClick={(event) => {
                if (event.buttons === 0) this.props.rotateShip(this.props.ship.id)
            }}
        >
            {blocks}
        </div>
    }

    changeSelected(id) {

    }
}

export default Ship