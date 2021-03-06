const args = process.argv.slice(2);

const timer = () => {
  for (let i = 0; i < args.length; i++) {
    if (args[i] <= 0 && typeof args !== 'number') {
      return false;
    }
    setTimeout(() => {
      process.stdout.write(`beep! @ ${args[i]} seconds\n`);
    }, args[i] * 1000);
  }
};

timer();