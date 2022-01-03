export function initField() {
    let coords = Array.from(Array(10).keys());
    return coords.map(x => {
        return coords.map(y => {
            return {x, y, isOccupied: false}
        })
    })
}

export function calculateOccupied(ships) {
    let cells = initField()
    ships.map(ship => {
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

export function checkPlace(ship, offset,field) {
    let cords = [];
    let min ={minX:'',minY:'',maxX:'',maxY:''};
    for (let i =0;i<ship.size;i++){
        if(!ship.isHorizontal){ 
            if(ship.x+i>9||offset>0&&ship.x==0)
          return false
        cords.push({x:ship.x+i,y:ship.y})
        }else{
            if(ship.y+i>9||offset>0&&ship.y==0)
          return false
        cords.push({x:ship.x,y:ship.y+i})}
    }

    if (!ship.isHorizontal) {
        ship.x -= offset;
    } else {
        ship.y -= offset;
    }
    if( ship.x-1>=0){
        min.minX=ship.x-1;
    }else
    min.minX=0;
    if( ship.y-1>=0){
        min.minY=ship.y-1;
    }else
    min.minY=0;

if(!ship.isHorizontal){

    if(ship.x+ship.size<=9){
        min.maxX=ship.x+ship.size;
    }else
    min.maxX=9;

    if( ship.y+1<=9){
        min.maxY=ship.y+1;
    }else
    min.maxY=9;
}else{

    if( ship.y+ship.size<=9){
        min.maxY=ship.y+ship.size;
    }else
    min.maxY=9;

    if(ship.x+1<=9){
        min.maxX=ship.x+1;
    }else
    min.maxX=9;
}

    for(let i = min.minX;i<=min.maxX;i++)
     for(let j = min.minY;j<=min.maxY;j++)
     if(field[i][j].isOccupied==true)
      return false
    
    return true
    
}