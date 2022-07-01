var reset = document.getElementById("reset");

document.getElementById("calc").addEventListener("click", function () {
  var a = parseInt(document.getElementById("a").value);
  var b = parseInt(document.getElementById("b").value);
  var c = parseInt(document.getElementById("c").value);
  var s = (a + b + c) / 2;
  var area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

  if (a + b <= c || a + c <= b || b + c <= a) {
    document.getElementById("calc").innerHTML =
      "A &#9651 nem szerkeszthető meg";
    document.getElementById("area").innerHTML = "";
    document.getElementById("calc").style.cursor = "not-allowed";
    document.getElementById("a").style.cursor = "not-allowed";
    document.getElementById("a").disabled = true;
    document.getElementById("b").style.cursor = "not-allowed";
    document.getElementById("b").disabled = true;
    document.getElementById("c").style.cursor = "not-allowed";
    document.getElementById("c").disabled = true;
    reset.style.visibility = "visible";
  } else {
    document.getElementById("area").innerHTML =
      "<b>" + area.toFixed(3) + "</b>";
    reset.style.visibility = "visible";
  }
});

reset.addEventListener("click", function () {
  document.getElementById("a").value = "";
  document.getElementById("b").value = "";
  document.getElementById("c").value = "";
  document.getElementById("calc").style.cursor = "auto";
  document.getElementById("calc").innerHTML = "Kiszámol";
  document.getElementById("a").style.cursor = "auto";
  document.getElementById("a").disabled = false;
  document.getElementById("b").style.cursor = "auto";
  document.getElementById("b").disabled = false;
  document.getElementById("c").style.cursor = "auto";
  document.getElementById("c").disabled = false;
  reset.style.visibility = "hidden";
  document.getElementById("area").innerHTML = "";
});
