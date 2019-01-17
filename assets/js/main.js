function TreeAsterisks(max) {
  let row = "";
  let total = "";
  for (let x = 1; x <= max; x++) {
    row = row + "*";
    total = total + row + "<br>";
    console.log(row);
  }
  document.getElementById("asterisks").innerHTML = total;
}
TreeAsterisks(20);
