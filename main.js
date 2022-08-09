const d = document;
const txtarea = d.querySelector(".e__textarea");

function encryptText() {
  let key = txtarea.value.toLowerCase();
  if (key.length === 0) {
    txtarea.classList.add("animate__animated", "animate__shakeX");
    setTimeout(resetTxtarea, 1000);
    return false;
  }
  let output = "";
  for (let i = 0; i < key.length; i++) {
    if (key[i] === "a") output += "ai";
    if (key[i] === "e") output += "enter";
    if (key[i] === "i") output += "imes";
    if (key[i] === "o") output += "ober";
    if (key[i] === "u") output += "ufat";
    if (
      key[i] != "a" &&
      key[i] != "e" &&
      key[i] != "i" &&
      key[i] != "o" &&
      key[i] != "u"
    )
      output += key[i];
  }
  console.log(output); // CONSOLE LOG

  return resetOutput(output);
}

function resetOutput(output) {
  const parent = d.querySelector(".output");
  const img = d.querySelector(".doodle");
  const ntf1 = d.querySelector(".ntf__1");
  const ntf2 = d.querySelector(".ntf__2");
  if (img != null) {
    img.style.display = "none";
    ntf1.style.display = "none";
    ntf2.style.display = "none";
    parent.style.display = "block";
  }
  parent.innerHTML = `
  <textarea class="d__textarea" id="output__text">${output}</textarea>
  <p>
  <div class="tooltip">
  <button id="btn__copy" class="btn__copy" data-clipboard-action="copy" onclick="clickTooltip()" onmouseout="outTooltip()" data-clipboard-target="#output__text">
      <span class="tooltiptext" id="myTooltip">Copiar texto</span>
      <i class="bi bi-clipboard copyico"></i>
    </button>
  </div>
  </p>
  `;
  let clipBoard = new ClipboardJS("#btn__copy");
}

function decryptText() {
  let key = txtarea.value.toLowerCase();
  if (key.length === 0) {
    txtarea.classList.add("animate__animated", "animate__shakeX");
    setTimeout(resetTxtarea, 1000);
    return false;
  }
  let a = (key) => key.replaceAll("ai", "a");
  let e = (key) => key.replaceAll("enter", "e");
  let i = (key) => key.replaceAll("imes", "i");
  let o = (key) => key.replaceAll("ober", "o");
  let u = (key) => key.replaceAll("ufat", "u");
  console.log(a(e(i(o(u(key)))))); // CONSOLE LOG

  return resetOutput(a(e(i(o(u(key))))));
}

function clickTooltip() {
  let tooltip = d.querySelector("#myTooltip");
  tooltip.innerHTML = "Copiado!";
}

function outTooltip() {
  let tooltip = d.querySelector("#myTooltip");
  tooltip.innerHTML = "Copiar texto";
}

function resetTxtarea() {
  txtarea.classList.remove("animate__animated", "animate__shakeX");
}
