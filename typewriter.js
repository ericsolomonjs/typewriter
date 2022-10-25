const sentence = "hello there from lighthouse labs";

let timeoutDelay = 0;
for (const char of sentence) {
  setTimeout( () => {
    process.stdout.write(char);
  }, timeoutDelay);
  timeoutDelay += 50;
}

setTimeout( () => {
  process.stdout.write('\n');
}, timeoutDelay++);
