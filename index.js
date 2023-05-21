//document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");

console.log(countEl);

let saveEl = document.getElementById("save-el");

console.log(saveEl);

let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count + " - ";
  saveEl.textContent += countStr;

  countEl.textContent = 0;
  count = 0;
}
