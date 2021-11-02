const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

const timer = () => {
  console.log("---------Welcome to timer v2-----------");
  console.log("---------Ctrl-c [^c] to quit-----------");
  console.log('-----[press b] To here the *beep*------');
  console.log("[enter 1 - 9] to set timer for X secounds");
  console.log("");
  stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log("-------Thanks for using me, ciao!------");
    process.exit();
  } else if (key === 'b') {
    process.stdout.write('\x07');
    console.log("-----------------BEEP-------------------");
  } else if (key > 0 && key < 10) {
    console.log(`-----setting timer for ${key} seconds...-----`);
    setTimeout(() => {
      process.stdout.write('\x07');
    }, Number(key) * 1000);
  }
  });
};
timer();
