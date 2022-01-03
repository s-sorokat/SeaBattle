import {connect} from 'react-redux';
import GameView from "./GameView"

let selectCeil = (number) => {
    return {type: 'DRAG-SHIP', number: number}
}
let placeShip = (date) => {
    return {type: 'PLACE-SHIP', date: date}
}
let selectShip = (number) => {
    return {type: 'SELECT-SHIP', number: number}
}
let rotateShip = (id) => {
    return {type: 'ROTATE-SHIP', id: id}
}

let mapStateToProps = (state) => {
    return {
        GameViewPage: state.GameViewPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSelectShipCell: (number) => {
            dispatch(selectCeil(number))
        },
        onDropShip: (date) => {
            dispatch(placeShip(date))
        },
        selectShip: (id) => {
            dispatch(selectShip(id))
        },
        rotateShip: (id) => {
            dispatch(rotateShip(id))
        },
    }
}

let GameViewContainer = connect(mapStateToProps, mapDispatchToProps)(GameView)
export default GameViewContainer;