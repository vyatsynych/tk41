// Клас Product
class Product {
    constructor(name, price, category) {
      this.name = name;
      this.price = price;
      this.category = category;
    }
  
    getInfo() {
      return `${this.name} (${this.category}) - ${this.price} грн`;
    }
  }
  
  // Клас User
  class User {
    constructor(name) {
      this.name = name;
    }
  
    getUserInfo() {
      return `Користувач: ${this.name}`;
    }
  }
  
  // Клас Customer (наслідує User)
  class Customer extends User {
    constructor(name) {
      super(name);
      this.orders = [];
    }
  
    addOrder(order) {
      this.orders.push(order);
    }
  
    viewOrders() {
      if (this.orders.length === 0) {
        console.log(`${this.name} не має замовлень.`);
        return;
      }
  
      console.log(`Замовлення для ${this.name}:`);
      this.orders.forEach((order, index) => {
        console.log(`Замовлення #${index + 1}:`);
        order.viewOrder();
      });
    }
  }
  
  // Клас Order
  class Order {
    constructor(products = []) {
      this.products = products;
      this.total = this.calculateTotal();
    }
  
    calculateTotal() {
      return this.products.reduce((sum, product) => sum + product.price, 0);
    }
  
    viewOrder() {
      this.products.forEach(product => {
        console.log(`- ${product.getInfo()}`);
      });
      console.log(`Загальна сума: ${this.total} грн`);
    }
  }
  
  // ====== Тестування ======
  
  // Створення продуктів
  const prod1 = new Product("Ноутбук", 25000, "Електроніка");
  const prod2 = new Product("Навушники", 1500, "Аксесуари");
  const prod3 = new Product("Книга", 300, "Література");
  
  // Створення покупця
  const customer1 = new Customer("Олена");
  
  // Створення замовлення
  const order1 = new Order([prod1, prod2]);
  const order2 = new Order([prod3]);
  
  // Додавання замовлень
  customer1.addOrder(order1);
  customer1.addOrder(order2);
  
  // Перегляд замовлень
  console.log(customer1.getUserInfo());
  customer1.viewOrders();
