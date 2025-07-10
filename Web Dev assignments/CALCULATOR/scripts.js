function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.value === "" && display.placeholder) {
        display.value = "";
    }
    display.value += value;
}

function clearDisplay() {
    const display = document.getElementById('display');
    display.value = "";
}

function deleteChar() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        if (display.value.trim() === "") return;
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}   