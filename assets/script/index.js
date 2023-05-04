function bisection(func, a, b, tolerance) {
  let x;
  let table = [];

  for (let i = 0; i < 100; i++) {
    x = (a + b) / 2;
    let fx = func(x);
    table.push([i + 1, a.toFixed(6), x.toFixed(6), b.toFixed(6), fx.toFixed(6)]);
    if (Math.abs(fx) < tolerance) {
      break;
    } else if (func(a) * fx < 0) {
      b = x;
    } else {
      a = x;
    }
  }
  return { root: x.toFixed(6), table: table };
}

function calculate() {
  let output = document.getElementById("tableOutput");
  output.scrollIntoView(
    {
      behavior: "smooth",
    },
    true
  );

  const func = document.getElementById("func").value;
  const a = parseFloat(document.getElementById("a").value);
  const b = parseFloat(document.getElementById("b").value);
  const tolerance = parseFloat(document.getElementById("tolerance").value);

  const result = bisection(eval(`(x) => ${func}`), a, b, tolerance);

  let outputDiv = document.getElementById("output");
  outputDiv.innerHTML = `
  <p>Root: ${result.root}</p>
  <table>
    <thead>
      <tr>
        <th>Iteration</th>
        <th>a</th>
        <th>c</th>
        <th>b</th>
        <th>f(x)</th>
      </tr>
    </thead>
    <tbody>
      ${result.table.map((row) => `<tr>${row.map((col) => `<td>${col}</td>`).join("")}</tr>`).join("")}
    </tbody>
  </table>
`;
  document.getElementById("btn-reset").style.display = "block";
  document.getElementById("btn-calculate").style.display = "none";
  // document.getElementById("tableOutput").style.display = "block";
}
function clearData() {
  let output = document.getElementById("output");
  output.innerHTML = "";
  document.getElementById("result").reset();
  document.getElementById("btn-calculate").style.display = "block";
  let reset = document.getElementById("btn-reset");
  let result = document.getElementById("result");

  reset.style.display = "none";
  result.scrollIntoView(
    {
      behavior: "smooth",
    },
    true
  );
}
