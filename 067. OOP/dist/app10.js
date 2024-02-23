// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo()
class Product {
    product;
    setProduct(arr) {
        this.product = arr;
    }
    displayProductInfo = () => this.product.filter((el) => el.price > 20);
}
const product = new Product();
const arr = [
    { price: 10, title: 'title1' },
    { price: 20, title: 'title2' },
    { price: 30, title: 'title3' },
    { price: 40, title: 'title4' }
];
product.setProduct(arr);
console.log(product.displayProductInfo());
