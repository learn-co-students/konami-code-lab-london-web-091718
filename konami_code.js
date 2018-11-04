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
  let index = 0

   document.body.addEventListener('keydown', (event) => {

    const key = event.key

     index = (codes[index] === key) ? ++index : 0

     if (index === codes.length) {
      window.alert("hi there you fool")
      index = 0
    }
  })
}
