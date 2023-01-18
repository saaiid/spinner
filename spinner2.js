let animation = ["|", "/", "-", "\\"];
let delay = 100;

for (let i = 0; i < animation.length; i++) {
  setTimeout(() => {
    process.stdout.write(`\r${animation[i]}   `);
  }, delay * (i + 1));
}