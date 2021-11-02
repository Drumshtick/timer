const times = process.argv.slice(2);

const createTimer = (times) => {
  for (let duration of times) {
    if(isNaN(parseInt(duration, 10)) || Number(duration) < 0 || Number(duration) === 0) {
      continue;
    } else {
      duration = Number(duration);
      setTimeout(() => {
        process.stdout.write('\x07');
      }, duration * 1000);
    }
  }
};

createTimer(times);