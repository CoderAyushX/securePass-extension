//*random password generator

//? geting markup
let medium = document.getElementById("medium");
let secure = document.getElementById("secure");
let strong = document.getElementById("strong");
let next = document.getElementById("next");
let copy = document.getElementById("copy");
let body = document.getElementById("content");
let copyNotice = document.getElementById("copy-notice");

//?defaults
let active = false;
let chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let passwordLength;
let password = "";

//? generator
function genPassword(inputLength) {
  active = true;
  passwordLength = inputLength;
  for (let i = 0; i <= passwordLength; i++) {
    let randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  document.getElementById("password").innerHTML = password;
  password = "";
}

//? copy password
const clearPopUp = () => {
  copyNotice.style.transform = " translate(-50%,-40%)";
  copyNotice.style.opacity = "0";
  body.style.filter = "none";
};
const copyContent = async () => {
  let text = document.getElementById("password").innerHTML;
  copyNotice.style.opacity = "1";
  copyNotice.style.transform = " translate(-50%,-50%)";
  body.style.filter = "blur(2px) brightness(0.2)";
  try {
    await navigator.clipboard.writeText(text);
    setTimeout(clearPopUp, 1000);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
};

//? calls
medium.addEventListener("click", () => {
  genPassword(12);
});

secure.addEventListener("click", () => {
  genPassword(20);
});

strong.addEventListener("click", () => {
  genPassword(30);
});

next.addEventListener("click", () => {
  if (active === true) {
    genPassword(passwordLength);
  }
});

copy.addEventListener("click", () => {
  if (active === true) {
    copyContent();
  }
});
