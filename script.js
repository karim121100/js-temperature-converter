function convert() {
  const value = Number(document.getElementById("temp").value);
  const type = document.getElementById("type").value;
  let result;

  if (type === "c") {
    result = (value * 9/5) + 32;
  } else {
    result = (value - 32) * 5/9;
  }

  document.getElementById("result").textContent =
    "Result: " + result.toFixed(2);
}
