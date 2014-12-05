var lastPosition = null;

function attack(me, enemy, game) {
}

// search star!!
function searchStar(me, enemy, game) {
  print(game.star);
  me.go();
}

function isAimed(me, enemy) {
  var myPos = me.tank.position
  var enemyPos = enemy.tank.position
  var myDir = me.tank.direction;

  if (myPos[0] !== enemyPos[0] && myPos[1] !== enemyPos[1]) return false;
  if (myPos[0] === enemyPos[0]) {
    if (myPos[1] > enemyPos[1])
      return myDir === 'down';
    else 
      return myDir === 'up';
  }
  else {
    if (myPos[0] > enemyPos[0])
      return myDir === 'left';
    else
      return myDir === 'right';
  }
}

function isStoped(lastPos, me) { // 坦克没有动，证明遇到障碍物了
  return lastPosition !== null && lastPos[0] === me.tank.position[0] && lastPos[1] === me.tank.position[1]
}

var lastPosition = null
function onIdle(me, enemy, game) {
  if (isStoped(lastPosition, me)) {
    if (enemy.tank) {
      if (!me.bullet) {
        if (isAimed(me, enemy)) {
          me.fire();
        }
      }
    }
    var turn = ['left', 'right'][Math.floor(Math.random() * 2)];
    me.turn(turn);
  }
  else {
    lastPosition = me.tank.position
  }
  searchStar(me, enemy, game);
}
