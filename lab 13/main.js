// --- Онлайн-магазин --- //

// Прототип методів для спільного використання
const CommonMethods = {
    showInfo() {
        console.log(this);
    }
};

// Клас Product
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}
Product.prototype = Object.create(CommonMethods);

// Клас Order
function Order() {
    this.products = [];
    this.total = 0;
}
Order.prototype = Object.create(CommonMethods);
Order.prototype.addProduct = function(product) {
    this.products.push(product);
    this.total += product.price;
};

// Клас Customer
function Customer(name) {
    this.name = name;
    this.orders = [];
}
Customer.prototype = Object.create(CommonMethods);
Customer.prototype.viewOrders = function() {
    console.log(`Замовлення клієнта ${this.name}:`);
    this.orders.forEach((order, index) => {
        console.log(`\nЗамовлення ${index + 1} - Загальна сума: ${order.total} грн`);
        order.products.forEach((product, i) => {
            console.log(`${i + 1}. ${product.name} (${product.category}) - ${product.price} грн`);
        });
    });
};

// --- Тестування --- //

// Створення товарів
let p1 = new Product("Ноутбук", 25000, "Електроніка");
let p2 = new Product("Футболка", 500, "Одяг");
let p3 = new Product("Навушники", 1500, "Електроніка");

// Створення замовлення
let order1 = new Order();
order1.addProduct(p1);
order1.addProduct(p3);

let order2 = new Order();
order2.addProduct(p2);

// Створення клієнта та додавання замовлень
let customer = new Customer("Юра Стосик");
customer.orders.push(order1);
customer.orders.push(order2);

// Демонстрація роботи
customer.viewOrders();

