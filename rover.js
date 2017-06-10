var myRover = {
  position: [0,0],
  direction: 'N'
};

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

function moveRover (instructions,rover) {
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

function posGrid (rover){
  for (var i=0; i<=rover.position.length-1; i++) {
    if (rover.position[i] > 10) {
      rover.position[i] = rover.position[i] % 10;
    }
  return rover;
  }}

moveRover("fffffffffff",myRover);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
posGrid(myRover);
console.log("New Rover Position: [" + myRover.position[0] + ", " + myRover.position[1] + "]");
