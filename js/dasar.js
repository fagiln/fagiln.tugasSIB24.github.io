function changeInput() {
  let input = document.getElementById("input").value;
  document.getElementById("output").innerText = input;
}
document.addEventListener("DOMContentLoaded", function () {
  let btn = document.getElementById("btn-click");

  btn.addEventListener("click", () => {
    alert("Ini Alert");
    console.log("Console Alert");
  });

  let btnConfirm = document.getElementById("btn-confirm");

  btnConfirm.addEventListener("click", () => {
    let love = document.getElementById("love").value;
    if (love == "iya" || love == "ya" || love == "y") {
      alert(
        "Dia menjawab " + love + ", yey selamat kamu telah menjadi pacar nya"
      );
    } else if (love == "") {
      alert("Tidak boleh kosong, harus kamu putuskan sekarang jawabanmu");
    } else {
      alert(":(");
    }
  });

  let btnOprtn = document.getElementById("btn-operate");
  btnOprtn.addEventListener("click", () => {
    let first = document.getElementById("fstNum").value;
    let secnd = document.getElementById("secNum").value;
    let operation = document.getElementById("operation").value;
    let num1 = Number(first);
    let num2 = Number(secnd);
    if (secnd != "" && first != "" && operation != "") {
      if (operation == "+") {
        let result = num1 + num2;
        document.getElementById("result").innerText = result;
      } else if (operation == "-") {
        let result = num1 - num2;
        document.getElementById("result").innerText = result;
      } else if (operation == "x") {
        let result = num1 * num2;
        document.getElementById("result").innerText = result;
      } else if (operation == ":") {
        let result = num1 / num2;
        document.getElementById("result").innerText = result;
      } else {
        alert("operasi tidak berhasil di esksekusi, cek inputan anda");
      }
    } else {
      alert("field tidak boleh kosong");
    }
  });

  let btnSymbol = document.getElementById("btn-symbol");
  btnSymbol.addEventListener("click", () => {
    let symbol = document.getElementById("symbol").value;
    let triangle = "";
    let triangleM = "";
    const size = 10;
    if (symbol != "") {
      for (let i = 1; i <= size; i++) {
        let line = "";
        for (let j = 1; j <= i; j++) {
          line += symbol;
        }
        triangle += line + "\n";
        document.getElementById("show-symbol").innerText = triangle;
      }
      // Mirror
      for (let i = size; i >= 1; i--) {
        let line = "";
        for (let k = 1; k <= size - i; k++) {
          line += " ";
        }
        for (let j = 1; j <= i; j++) {
          line += symbol;
        }
        triangleM += line + "\n";
      }
      document.getElementById("show-symbolM").innerText = triangleM;
    }
  });
});
