let slovnik = new Set();

fetch("data/slovnik.txt")
  .then(r => r.text())
  .then(text => {
    text.split("\n").forEach(slovo => {
      if (slovo.trim().length > 0) {
        slovnik.add(slovo.trim().toLowerCase());
      }
    });
  });

function skontroluj() {
  const slovo = document.getElementById("input").value.trim().toLowerCase();
  const vysledok = document.getElementById("vysledok");

  if (slovnik.has(slovo)) {
    vysledok.textContent = "PLATNÉ";
    vysledok.style.color = "green";
  } else {
    vysledok.textContent = "NEPLATNÉ";
    vysledok.style.color = "red";
  }
}
