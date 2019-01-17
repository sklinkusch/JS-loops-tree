function TreeAsterisks(max) {
  let row = "";
  for (let x = 1; x <= max; x++) {
    row = row + "*";
    console.log(row);
  }
}
TreeAsterisks(20);
