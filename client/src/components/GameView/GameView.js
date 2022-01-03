import React from 'react'
import GameField from "./GameField/GameField"
import s from './GameView.module.css'
import Ship from "./Ships/Ship"

function GameView(props){
        let unusedShips = props.GameViewPage.unusedShips;

        return (<div className={s.gameView}>
            <div className={s.menuPanel}>
                {
                    unusedShips.map(ship => {
                        return <Ship
                            key={`ship-${ship.id}`}
                            ship={ship}
                            cellDragNumber={props.GameViewPage.cellDragNumber}
                            onSelectShipCell={props.onSelectShipCell}
                            selectShip={props.selectShip}
                            rotateShip={props.rotateShip}

                        />
                    })
                }
            </div>
            <div className={s.gamePanel}>
                <GameField

                    owner={true}
                    field={props.GameViewPage.yourField}
                    onDropShip={props.onDropShip}
                    // ships={ships}
                />
                <GameField
                    owner={false}
                    field={props.GameViewPage.enemyField}
                    // ships={enemyShips}
                />
            </div>
        </div>
    )


}

export default GameView