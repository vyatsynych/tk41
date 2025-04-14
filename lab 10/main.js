console.log("Завдання 1: Аналіз hoisting");

// Передбачення:
// console.log(a); // undefined (змінна існує, але не має значення через hoisting)
// console.log(b); // Помилка (b ще не ініціалізовано)
// console.log(c); // Помилка (c ще не ініціалізовано)

console.log(a); // undefined
var a = 10;

try {
    console.log(b);
} catch (e) {
    console.log("Помилка:", e.message);
}
let b = 20;

try {
    console.log(c);
} catch (e) {
    console.log("Помилка:", e.message);
}
const c = 30;

// Пояснення:
// `var a` піднімається (hoisting), але значення отримує пізніше, тому `undefined`.
// `let` і `const` не піднімаються так, як `var`, вони знаходяться в "темпоральній зоні" (TDZ).
console.log("Завдання 2: Робота з областю видимості (scope)");

function testScope() {
    if (true) {
        var x = 5;
        let y = 10;
        const z = 15;
    }
    console.log(x); // 5 (var має функціональну область видимості)
    
    try {
        console.log(y);
    } catch (e) {
        console.log("Помилка:", e.message);
    }
    
    try {
        console.log(z);
    } catch (e) {
        console.log("Помилка:", e.message);
    }
}

testScope();

// Пояснення:
// `var x` доступний за межами `if`, бо має функціональну область видимості.
// `let y` та `const z` доступні тільки всередині `if`, тому викидають помилку.
console.log("Завдання 3: Робота з типами даних");

console.log(5 + "5");  // "55" (конкатенація, бо є рядок)
console.log("5" - 2);  // 3 (рядок перетворюється в число)
console.log(true + false);  // 1 (true -> 1, false -> 0)
console.log(null + 1);  // 1 (null приводиться до 0)
console.log(undefined + 1);  // NaN (undefined не конвертується в число)
console.log(0 == false);  // true (JS приводить false до 0)
console.log(0 === false); // false (строге порівняння, різні типи)

// Пояснення:
// JavaScript автоматично перетворює типи даних у виразах.
// Наприклад, `"5" - 2` працює, бо рядок "5" конвертується в число, а `"5" + 5` — ні, бо є `+` (конкатенація).
console.log("Завдання 4: const та об'єкти");

const person = {
    name: "Юра",
    age: 30
};

person.age = 18; // Спрацює
person.city = "Лисиничі"; // Спрацює
console.log(person); // { name: "Юра", age: 18, city: "Лисиничі" }

try {
    person = { name: "Ярко", age: 12 }; // Помилка
} catch (e) {
    console.log("Помилка:", e.message);
}

// Робимо об'єкт незмінним
Object.freeze(person);

try {
    person.age = 40; // Не зміниться
} catch (e) {
    console.log("Помилка:", e.message);
}

console.log(person);

// Пояснення:
// `const` блокує зміну змінної, але не зміну внутрішніх властивостей об'єкта.
// `Object.freeze()` робить сам об'єкт незмінним.
console.log("Завдання 5: Визначення типу даних");

function checkType(value) {
    return typeof value;
}

console.log(checkType(10));  // "number"
console.log(checkType("Hello"));  // "string"
console.log(checkType(null));  // "object" (особливість JavaScript)
console.log(checkType(undefined));  // "undefined"
console.log(checkType(true));  // "boolean"
console.log(checkType({}));  // "object"
console.log(checkType([]));  // "object"
console.log(checkType(function() {}));  // "function"

// Пояснення:
// `typeof null === "object"` — це помилка в JS, яка залишилася історично.
// `typeof [] === "object"`, хоча масиви відрізняються від об'єктів.
