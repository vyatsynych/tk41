// Завдання 1: Виведення ромба з цифр
function drawDiamond() {
    let n = parseInt(prompt("Введіть розмір ромба (n):"));
    if (isNaN(n) || n < 1) {
        console.log("Некоректне значення!");
        return;
    }
    let output = "";
    for (let i = 1; i <= n; i++) {
        output += " ".repeat(n - i) + (" " + i).repeat(i).trim() + "\n";
    }
    for (let i = n - 1; i >= 1; i--) {
        output += " ".repeat(n - i) + (" " + i).repeat(i).trim() + "\n";
    }
    console.log(output);
}

drawDiamond();

// Завдання 2: Виведення числового ряду та обчислення суми
function sumSeries() {
    let n = parseInt(prompt("Введіть значення n:"));
    if (isNaN(n) || n < 1) {
        console.log("Некоректне значення!");
        return;
    }
    let sum = 0;
    let series = "";
    for (let i = 1; i <= n; i++) {
        series += i + (i !== n ? " + " : "");
        sum += i;
    }
    console.log(series + " = " + sum);
}

sumSeries();

// Завдання 3: Гра "Вгадай число"
function guessNumber() {
    let secretNumber = Math.floor(Math.random() * 100) + 1;
    let guess;
    while (guess !== secretNumber) {
        guess = parseInt(prompt("Вгадайте число від 1 до 100:"));
        if (isNaN(guess)) {
            alert("Введіть число!");
        } else if (guess > secretNumber) {
            alert("Менше!");
        } else if (guess < secretNumber) {
            alert("Більше!");
        } else {
            alert("Вітаю! Ви вгадали число " + secretNumber);
        }
    }
}

guessNumber();
