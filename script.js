const layar = document.getElementById("layar");

function tambah(x) {
  layar.value = layar.value + x;
}

function hapus() {
  layar.value = "";
}

function hitung() {
  try {
    layar.value = eval(layar.value);
  } catch (e) {
    layar.value = "Error";
  }
}