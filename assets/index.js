/* Patterns from https://github.com/jazz-soft/char-lcd */
const patterns = {
  "!": [4, 4, 4, 4, 0, 0, 4],
  '"': [10, 10, 10],
  "#": [10, 10, 31, 10, 31, 10, 10],
  $: [4, 15, 20, 14, 5, 30, 4],
  "%": [24, 25, 2, 4, 8, 19, 3],
  "&": [12, 18, 20, 8, 21, 18, 13],
  "'": [12, 4, 8],
  "(": [2, 4, 8, 8, 8, 4, 2],
  ")": [8, 4, 2, 2, 2, 4, 8],
  "*": [0, 4, 21, 14, 21, 4],
  "+": [0, 4, 4, 31, 4, 4],
  ",": [0, 0, 0, 0, 12, 4, 8],
  "-": [0, 0, 0, 31],
  ".": [0, 0, 0, 0, 0, 12, 12],
  "/": [0, 1, 2, 4, 8, 16],
  0: [14, 17, 19, 21, 25, 17, 14],
  1: [4, 12, 4, 4, 4, 4, 14],
  2: [14, 17, 1, 2, 4, 8, 31],
  3: [31, 2, 4, 2, 1, 17, 14],
  4: [2, 6, 10, 18, 31, 2, 2],
  5: [31, 16, 30, 1, 1, 17, 14],
  6: [6, 8, 16, 30, 17, 17, 14],
  7: [31, 1, 2, 4, 8, 8, 8],
  8: [14, 17, 17, 14, 17, 17, 14],
  9: [14, 17, 17, 15, 1, 2, 12],
  ":": [0, 12, 12, 0, 12, 12],
  ";": [0, 12, 12, 0, 12, 4, 8],
  "<": [2, 4, 8, 16, 8, 4, 2],
  "=": [0, 0, 31, 0, 31],
  ">": [8, 4, 2, 1, 2, 4, 8],
  "?": [14, 17, 1, 2, 4, 0, 4],
  "@": [14, 17, 1, 13, 21, 21, 14],
  A: [14, 17, 17, 31, 17, 17, 17],
  B: [30, 17, 17, 30, 17, 17, 30],
  C: [14, 17, 16, 16, 16, 17, 14],
  D: [28, 18, 17, 17, 17, 18, 28],
  E: [31, 16, 16, 30, 16, 16, 31],
  F: [31, 16, 16, 30, 16, 16, 16],
  G: [14, 17, 16, 23, 17, 17, 15],
  H: [17, 17, 17, 31, 17, 17, 17],
  I: [14, 4, 4, 4, 4, 4, 14],
  J: [14, 2, 2, 2, 2, 18, 12],
  K: [17, 18, 20, 24, 20, 18, 17],
  L: [16, 16, 16, 16, 16, 16, 31],
  M: [17, 27, 21, 21, 17, 17, 17],
  N: [17, 17, 25, 21, 19, 17, 17],
  O: [14, 17, 17, 17, 17, 17, 14],
  P: [30, 17, 17, 30, 16, 16, 16],
  Q: [14, 17, 17, 17, 21, 18, 13],
  R: [30, 17, 17, 30, 20, 18, 17],
  S: [15, 16, 16, 14, 1, 1, 30],
  T: [31, 4, 4, 4, 4, 4, 4],
  U: [17, 17, 17, 17, 17, 17, 14],
  V: [17, 17, 17, 17, 17, 10, 4],
  W: [17, 17, 17, 21, 21, 21, 10],
  X: [17, 17, 10, 4, 10, 17, 17],
  Y: [17, 17, 17, 10, 4, 4, 4],
  Z: [31, 1, 2, 4, 8, 16, 31],
  "[": [14, 8, 8, 8, 8, 8, 14],
  "¥": [17, 10, 31, 4, 31, 4, 4],
  "]": [14, 2, 2, 2, 2, 2, 14],
  "^": [4, 10, 17],
  _: [0, 0, 0, 0, 0, 0, 31],
  "`": [8, 4, 2],
  a: [0, 0, 14, 1, 15, 17, 15],
  b: [16, 16, 22, 25, 17, 17, 30],
  c: [0, 0, 14, 16, 16, 17, 14],
  d: [1, 1, 13, 19, 17, 17, 15],
  e: [0, 0, 14, 17, 31, 16, 14],
  f: [6, 9, 8, 28, 8, 8, 8],
  g: [0, 15, 17, 17, 15, 1, 14],
  h: [16, 16, 22, 25, 17, 17, 17],
  i: [4, 0, 12, 4, 4, 4, 14],
  j: [2, 0, 6, 2, 2, 18, 12],
  k: [16, 16, 18, 20, 24, 20, 18],
  l: [12, 4, 4, 4, 4, 4, 31],
  m: [0, 0, 26, 21, 21, 17, 17],
  n: [0, 0, 22, 25, 17, 17, 17],
  o: [0, 0, 14, 17, 17, 17, 14],
  p: [0, 0, 30, 17, 30, 16, 16],
  q: [0, 0, 13, 19, 15, 1, 1],
  r: [0, 0, 22, 25, 16, 16, 16],
  s: [0, 0, 14, 16, 14, 1, 30],
  t: [8, 8, 28, 8, 8, 9, 6],
  u: [0, 0, 17, 17, 17, 19, 13],
  v: [0, 0, 17, 17, 17, 10, 4],
  w: [0, 0, 17, 17, 21, 21, 10],
  x: [0, 0, 17, 10, 4, 10, 17],
  y: [0, 0, 17, 17, 15, 1, 14],
  z: [0, 0, 31, 2, 4, 8, 31],
  "{": [2, 4, 4, 8, 4, 4, 2],
  "|": [4, 4, 4, 4, 4, 4, 4],
  "}": [8, 4, 4, 2, 4, 4, 8],
  "→": [0, 4, 2, 31, 2, 4],
  "←": [0, 4, 8, 31, 8, 4],
};

const checkboxTable = document.createElement("table");
const outputText = document.createElement("p");

function initializeOutputText() {
  outputText.textContent = "";

  const inputBitArray = [...checkboxTable.children].map((row) =>
    [...row.children].map((cell) => cell.firstChild.checked).reduce((total, current) => (total << 1) + current)
  );

  for (const [label, bitArray] of Object.entries(patterns)) {
    let bad = false;

    for (let i = 0; i < 7; i++) {
      if (inputBitArray[i] & bitArray[i]) {
        bad = true;
        break;
      }
    }

    const labelSpan = document.createElement("span");
    labelSpan.className = bad ? "bad" : "good";
    labelSpan.textContent = `${label} `;

    outputText.appendChild(labelSpan);
  }
}

function initializeTable() {
  for (let rowId = 0; rowId < 7; rowId++) {
    const row = document.createElement("tr");

    for (let cellId = 0; cellId < 5; cellId++) {
      const cellCheckbox = document.createElement("input");
      cellCheckbox.type = "checkbox";
      cellCheckbox.onchange = initializeOutputText;

      const cell = document.createElement("td");
      cell.appendChild(cellCheckbox);

      row.appendChild(cell);
    }

    checkboxTable.appendChild(row);
  }
}

const main = document.getElementsByTagName("main")[0];
main.appendChild(checkboxTable);
main.appendChild(outputText);

initializeTable();
initializeOutputText();
