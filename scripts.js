
    let display = document.getElementById("display");

    function press(value) {
      display.value += value;
    }

    function calculate() {
      try {
        display.value = eval(display.value);
      } catch (e) {
        display.value = "Error";
      }
    }

    function clearDisplay() {
      display.value = "";
    }
  
