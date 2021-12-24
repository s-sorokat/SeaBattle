import React from 'react'
import GameField from "./GameField/GameField"
import s from './GameView.module.css'
import Ship from "./Ships/Ship"

class GameView extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let unusedShips = this.props.GameViewPage.unusedShips;

        let enemyShips = [
            // {x: 1, y: 5, isHorizontal: false, size: 4},
        ]

        return <div className={s.gameView}>
            <div className={s.menuPanel}>
                {
                    unusedShips.map(ship => {
                        return <Ship
                            key={`ship-${ship.id}`}
                            ship={ship}
                            cellDragNumber={this.props.GameViewPage.cellDragNumber}
                            onSelectShipCell={this.props.onSelectShipCell}
                            selectShip={this.props.selectShip}
                            rotateShip={this.props.rotateShip}

                        />
                    })
                }
            </div>
            <div className={s.gamePanel}>
                <GameField

                    owner={true}
                    field={this.props.GameViewPage.yourField}
                    onDropShip={this.props.onDropShip}
                    // ships={ships}
                />
                <GameField
                    owner={false}
                    field={this.props.GameViewPage.enemyField}
                    // ships={enemyShips}
                />
            </div>
        </div>
    }


}

export default GameView