import { calculateOccupied, checkPlace, initField } from "./common/checkFunc";

let initialState = {
    unusedShips: [
        {id: 0, size: 4, isHorizontal: false},
        {id: 1, size: 3, isHorizontal: true},
        {id: 2, size: 3, isHorizontal: false},
        {id: 3, size: 2, isHorizontal: true},
        {id: 4, size: 2, isHorizontal: true},
        {id: 5, size: 2, isHorizontal: false},
        {id: 6, size: 1, isHorizontal: true},
        {id: 7, size: 1, isHorizontal: false},
        {id: 8, size: 1, isHorizontal: true},
        {id: 9, size: 1, isHorizontal: true},
    ],
    placedShips: [
    ],
    cellDragNumber: 0,
    selectedShip: 0,
    yourField: initField(),
    enemyField: initField(),
  
}


const GameViewReducer = (state = initialState, action) => {

    switch (action.type) {

        case 'PLACE-SHIP': {
            const shipIndex = state.unusedShips.findIndex(value => value.id === state.selectedShip)
            const ship = state.unusedShips[shipIndex]
            ship.x = action.date.x;
            ship.y = action.date.y;
            let res = checkPlace(ship, state.cellDragNumber,state.yourField);
           if(res==true){
            let stateCopy = {...state, unusedShips: [...state.unusedShips], placedShips: [...state.placedShips, ship]}
            stateCopy.unusedShips.splice(shipIndex, 1);
            stateCopy.yourField = calculateOccupied(stateCopy.placedShips)
            return stateCopy;
        }
        return state

            
        }
        case 'ROTATE-SHIP': {
            let stateCopy = {...state}
            const shipIndex = stateCopy.unusedShips.findIndex(value => value.id === action.id)
            const ship = stateCopy.unusedShips[shipIndex]
            ship.isHorizontal = !ship.isHorizontal;
            return stateCopy;
        }
        case 'DRAG-SHIP': {
            let stateCopy = {...state}
            stateCopy.cellDragNumber = action.number;
            return stateCopy;
        }
        case 'DROP-SHIP': {
            let stateCopy = {...state}
            stateCopy.cellDragNumber = 0;
            return stateCopy;
        }
        case 'SELECT-SHIP': {
            let stateCopy = {...state}
            stateCopy.selectedShip = action.number;
            return stateCopy;
        }
    }
    return state;
}

export default GameViewReducer;