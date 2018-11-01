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
  let body = document.querySelector('body')
  let index = 0
  const konami = (e) => {
    let key = e.key
    console.log(key)
    if (key === codes[index]) {
      index++;
      if (index === codes.length) {
        alert("Hurray!");
        index = 0;
      }
    } else {
      index = 0;
    }
  }
  body.addEventListener('keydown', konami)
}
