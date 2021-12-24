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
        // {id: 1,x: 1, y: 1, isHorizontal: true, size: 3},
        // {id: 1,x: 5, y: 5, isHorizontal: false, size: 3},
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
            offsetShip(ship, state.cellDragNumber);
            //TODO
            //TODO
            let stateCopy = {...state, unusedShips: [...state.unusedShips], placedShips: [...state.placedShips, ship]}
            stateCopy.unusedShips.splice(shipIndex, 1);
            stateCopy.yourField = calculateOccupied(stateCopy.placedShips)
            return stateCopy;
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

function offsetShip(ship, offset) {
    if (!ship.isHorizontal) {
        ship.x -= offset;
        ship.x = Math.min(ship.x, 9);
        ship.x = Math.max(ship.x, 0);
    } else {
        ship.y -= offset;
        ship.y = Math.min(ship.y, 9);
        ship.y = Math.max(ship.y, 0);
    }
}

function initField() {
    let coords = Array.from(Array(10).keys());
    return coords.map(x => {
        return coords.map(y => {
            return {x, y, isOccupied: false}
        })
    })
}

function calculateOccupied(ships) {
    let cells = initField()

    ships.map(ship => {
        console.log(ship)

        let x = ship.x;
        let y = ship.y;
        let size = ship.size;
        while (size > 0) {
            cells[x][y] = {...cells[x][y], isOccupied: true}
            size--;
            ship.isHorizontal ? y++ : x++;
        }
    })

    return cells;
}

export default GameViewReducer;