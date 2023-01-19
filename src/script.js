let screen = document.getElementById("screen");

display = (a) => {
  if (a === "=") {
    screen.value = eval(screen.value);
  } else if (a === "clear") {
    screen.value = "";
  } else if (a === "del") {
    screen.value = screen.value.slice(0, -1);
  } else if (a === "%") {
    screen.value = screen.value / 100;
  } else if (a === "akar") {
    screen.value = Math.sqrt(screen.value);
  } else if (a === "plus-minus") {
    screen.value = screen.value * -1;
  } else {
    screen.value += a;
  }
  console.log(a);
};
