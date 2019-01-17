//

function TreeAsterisks2(max) {
  let stars = "";
  for (let i = 1; i < max; i++) {
    for (let j = 1; j <= i; j++) {
      stars += "*";
    }
    stars += "<br>";
  }
  return stars;
}
document.getElementById("asterisks").innerHTML = TreeAsterisks2(20);
