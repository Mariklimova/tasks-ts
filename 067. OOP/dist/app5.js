// 5. Создайте класс Rectangle, который содержит свойства width (ширина) и height
// (высота), а также метод getArea(), который возвращает площадь прямоугольника
// (ширина * высота). Создайте экземпляр класса Rectangle и выведите его площадь.
// 1
// class Rectangle {
//     getArea=(width: number, height: number)=> width * height;
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea(100, 200));
// 2
// class Rectangle {
//     width: number;
//     height: number;
//     setWidth(width:number){
//         this.width = width
//     }
//     setHeight(height:number){
//         this.height = height
//     }
//     getArea = () => this.width * this.height;
// }
// const rectangle = new Rectangle();
// rectangle.setHeight(100);
// rectangle.setWidth(200)
// console.log(rectangle.getArea());
// 3
// class Rectangle {
//     width: number;
//     height: number;
//     constructor(a:number,b:number){
//         this.width = a;
//         this.height = b;
//     }
//     getArea = () => this.width * this.height
// }
// const rectangle = new Rectangle(100,200);
// console.log(rectangle.getArea());
// 4
// class Rectangle {
//     width: number = 100;
//     height: number = 200;
//     getArea = () => this.width * this.height
// }
// const rectangle = new Rectangle();
// console.log(rectangle.getArea());
// 5
class Rectangle {
    width;
    height;
    getArea = () => this.width * this.height;
}
const rectangle = new Rectangle();
rectangle.width = 100;
rectangle.height = 200;
console.log(rectangle.getArea());
