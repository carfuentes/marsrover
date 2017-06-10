var myRover = {
  position: [0,0],
  direction: 'N'
};

var obstacles = [
[4,5],
[6,2],
[9,7],
];

function gridGenerator () {
  var myGrid=[[]];
    for (var i=0; i<10; i++) {
      myGrid[i]=[0];
      for (var j=0; j<10; j++) {
        myGrid[i][j]=0;
      }
    }
    return myGrid;
}


function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]++;
      break;
    case 'E':
      rover.position[1]++;
      break;
    case 'S':
      rover.position[0]--;
      break;
    case 'W':
      rover.position[1]--;
      break;
  }
}

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[0]--;
      break;
    case 'E':
      rover.position[1]--;
      break;
    case 'S':
      rover.position[0]++;
      break;
    case 'W':
      rover.position[1]++;
      break;
  }

}

function turnRight(rover) {
   switch(rover.direction) {
    case 'N':
      rover.direction='E';
      break;
    case 'E':
      rover.direction='S';
      break;
    case 'S':
      rover.direction='W';
      break;
    case 'W':
      rover.direction='N';
      break;
    }
}

function turnLeft(rover) {
  switch(rover.direction) {
   case 'N':
     rover.direction='W';
     break;
   case 'E':
     rover.direction='N';
     break;
   case 'S':
     rover.direction='E';
     break;
   case 'W':
     rover.direction='S';
     break;
   }

}

function doInstructions (instructions,rover) {
  for (var i=0; i<=instructions.length-1; i++) {
    if (instructions[i] =="f") {
      goForward(rover);
    } else if (instructions[i] =="b") {
      goBackwards(rover);
    } else if (instructions[i] =="r") {
      turnRight(rover);
    } else if (instructions[i] =="l") {
      turnLeft(rover);
    } else {
      console.log("Rover does not understand this movement: "+ instructions[i]);
    }
  }
  return rover;
}


function stopObstacle (rover, obstacles) {
  for (var i in obstacles) {
    if (rover.position.toString() == obstacles[i].toString()) {
      rover.position[0]=rover.position[0]-1;
      console.log("Found an obstacle in position: "+obstacles[i]);
    }
  }
}

function posGrid (rover,obstacles) {
myGrid[rover.position[0]][rover.position[1]]=1;
  for (var i=0; i<=obstacles.length-1; i++) {
    myGrid[obstacles[i][0]][obstacles[i][1]]="*";
    }
  return myGrid;
}

function moveRover (rover,obstacles){
  stopObstacle(rover,obstacles);
  for (var i=0; i<=rover.position.length-1; i++) {
    if (rover.position[i] > 10) {
      rover.position[i] = rover.position[i] % 10;
    }
    else if (rover.position[i] < 0) {
      rover.position[i] = 10 + rover.position[i];
    }
  }
    myGrid= gridGenerator();
    myGrid= posGrid(rover, obstacles);

}


/*moveRover("fffffff",myRover);*/
myRover.position=[4,5];
moveRover(myRover, obstacles);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
console.log(myGrid);
