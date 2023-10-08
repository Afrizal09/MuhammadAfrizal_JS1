// Contoh program JavaScript dengan if-else dan nested if
let nilai = 75;

if (nilai >= 80) {
  console.log("Nilai Anda A");
} else if (nilai >= 70) {
  console.log("Nilai Anda B");
} else if (nilai >= 60) {
  console.log("Nilai Anda C");
} else {
  console.log("Nilai Anda D");
}

// Contoh program JavaScript dengan switch case
let hari = "Rabu";

switch (hari) {
  case "Rabu":
    console.log("Hari ini adalah Rabu");
    break;
  case "Kamis":
    console.log("Hari ini adalah Kamis");
    break;
  default:
    console.log("Hari ini adalah hari lain");
}

// Contoh program JavaScript dengan for statement
for (let i = 1; i <= 5; i++) {
  console.log("Perulangan ke-" + i);
}

// Contoh program JavaScript dengan while
let angka = 1;
while (angka <= 5) {
  console.log("Angka: " + angka);
  angka++;
}

// Contoh program JavaScript dengan do while
let bilangan = 1;
do {
  console.log("Bilangan: " + bilangan);
  bilangan++;
} while (bilangan <= 5);

// Contoh program JavaScript dengan function
function tambah(a, b) {
  return a + b;
}

let hasil = tambah(5, 3);
console.log("Hasil penjumlahan: " + hasil);
