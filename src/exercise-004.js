/**
 * Задание №4. Дан массив действий вида:
 *
 * [
 *   ["move-right", 10], // move 10 steps to the right
 *   ["move-up", 3],
 *   ["move-left", 2],
 *   ["move-down", 4],
 *   ["wait", 10], // wait for 10 seconds
 *   // …
 * ]
 *
 * Каждый шаг занимает 1 секунду. Игрок начинает в точке
 * с координатами [0, 0]. Необходимо вернуть массив,
 * представляющий собой журнал перемещения игрока с
 * указанием времени и его координат в данный момент времени.
 *
 * Пример:
 * [
 *   [0, [0, 0]], // time is zero, x:y is 0:0
 *   [10, [10, 0]],
 *   [13, [10, -3]],
 *   [15, [8, -3]],
 *   [19, [8, 1]],
 *   [29, [8, 1]],
 * ]
 *
 * Оси координат направлены вправо и вниз.
 *
 * В качестве бонусного задания — необходимо рассчитать путь
 * и перемещение игрока.
 */

exercise4([
  ["move-right", 10],
  ["move-up", 3],
  ["move-left", 2],
  ["move-down", 4],
  ["wait", 10],
]);


/**
 * @param {[string, number][]} actions
 * @returns void
 */
function exercise4(actions) {

  let startX = 0;
  let startY = 0;
  let time = 0;
  let totalSteps = 0;
  let stepDuration = 1;

  let x = startX;
  let y = startY;

  const log = [];

  writeLog();

  for (const [action, value] of actions) {

    if (action === 'wait') {
      // Value is a number of seconds here
      time += value;
      continue;
    }

    // Value is a number of steps here
    time += (value * stepDuration);

    totalSteps += value;

    switch (action) {
      case 'move-up': {
        y -= value;
        break;
      }
      case 'move-down': {
        y += value;
        break;
      }
      case 'move-left': {
        x -= value;
        break;
      }
      case 'move-right': {
        x += value;
        break;
      }
      default: {
        throw new Error(`Unknown action: ${action}`);
      }
    }

    writeLog();

  }

  const displacement = Math.sqrt(
    (x - startX) ** 2 +
    (y - startY) ** 2
  );

  console.log('');
  console.log(`Travel time: ${time} seconds.`);
  console.log(`Distance traveled: ${totalSteps} steps.`);
  console.log(
    `Displacement: ` +
    `${displacement.toFixed(3)} steps.`
  );
  console.log('');
  console.log(log);


  function writeLog() {
    log.push([time, [x, y]]);
  }

}
