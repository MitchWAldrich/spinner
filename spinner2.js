const lines = ["|", "/", "-", "\\", "|", "/", "-", "\\", "|"];
let delay = 100;
for (const elem of lines) {
  setTimeout(() => {
    process.stdout.write(`\r${elem}   `);
  }, delay);
  delay += 200;
}
setTimeout(() => {
  process.stdout.write("\n");
}, delay);
