const characters = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

let delay = 100;

for (const char of characters) {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, delay);
  delay += 200;
}
