const codes = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a"
];

function init() {
  const body = document.querySelector('body');
  const code_string = [];
  body.addEventListener('keydown', function (e) {
    code_string.push(e.key);
    console.log(e.key);
    console.log(code_string);
    if (code_string.toString() === codes.toString()) {
      alert("nice");
    }
    if (code_string.length > 9) {
      code_string.shift();
    }
  })
}

init();