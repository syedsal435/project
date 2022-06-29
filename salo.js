function switchOff() {
  document.getElementById("bulbImage").src =
    "img/Zoop1.png";
  document.getElementById("sss").style.backgroundColor  = "black";
  document.getElementById("switchStatus").textContent = "LESS INFORMATION";
}

function switchOn() {
  document.getElementById("bulbImage").src =
    "img/Zoop.png";
  document.getElementById("sss").style.backgroundColor = "white"; 
  document.getElementById("switchStatus").textContent = "MORE INFORMATION";
}

