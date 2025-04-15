// Завдання 1: Сума чисел від 1 до n
function calculateSum(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Завдання 2: Функціональний вираз множення
const multiply = function(a, b) {
    return a * b;
}

// Завдання 3: Стрілкова функція для піднесення до степеня
const power = (a, b) => a ** b;

// Завдання 4: Рекурсивна функція для обчислення гармонічного ряду
function harmonicSeries(n) {
    if (n === 1) return 1;
    return 1 / n + harmonicSeries(n - 1);
}

// Завдання 5: Функція-замикання для створення множника
function createMultiplier(multiplier) {
    return function(value) {
        return value * multiplier;
    }
}

// Завдання 6: Функція, яка застосовує іншу функцію до значення
function applyFunction(value, func) {
    return func(value);
}

// Приклади для завдання 6
const double = x => x * 2;
const square = x => x * x;

// Завдання 7*: Застосування колбека до всіх елементів множини Set
function processSet(set, callback) {
    const result = new Set();
    for (let item of set) {
        result.add(callback(item));
    }
    return result;
}

// --- Тестування ---
console.log("Сума від 1 до 5:", calculateSum(5)); // 15
console.log("Множення 3 * 4:", multiply(3, 4)); // 12
console.log("2 в степені 3:", power(2, 3)); // 8
console.log("Гармонічний ряд для n = 4:", harmonicSeries(4)); // ~2.0833

const triple = createMultiplier(3);
console.log("3 * 5:", triple(5)); // 15

console.log("Подвоїти 6:", applyFunction(6, double)); // 12
console.log("Квадрат 5:", applyFunction(5, square)); // 25

const mySet = new Set([1, 2, 3]);
const processed = processSet(mySet, x => x + 10);
console.log("Оброблений Set:", processed); // Set { 11, 12, 13 }
