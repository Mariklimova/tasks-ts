// 9. Создайте класс CircleC, который содержит свойство radius (радиус круга) и метод
// getCircumference() (вычисление длины окружности). Создайте экземпляр класса
// CircleC и выведите длину окружности. Длина окружности: 2 * π * r
// 1
// class CircleC{
//     getCircumference = (r:number) => 2 * 3.14 * r
// }
// const circleC = new CircleC();
// console.log(circleC.getCircumference(7));
// 2
// class CircleC {
//     radius: number = 7
//     getCircumference = () => 2 * 3.14 * this.radius
// }
// const circleC = new CircleC();
// console.log(circleC.getCircumference());
// 3
// class CircleC {
//     radius: number;
//     getCircumference = () => 2 * 3.14 * this.radius
// }
// const circleC = new CircleC();
// circleC.radius = 8;
// console.log(circleC.getCircumference());
// 4
// class CircleC {
//     radius: number;
//     constructor(r: number) {
//         this.radius = r;
//     }
//     getCircumference = () => 2 * 3.14 * this.radius;
// }
// const circleC = new CircleC(7);
// console.log(circleC.getCircumference());
// 5
class CircleC {
    radius;
    setRadius(r) {
        this.radius = r;
    }
    getCircumference = () => 2 * 3.14 * this.radius;
}
const circleC = new CircleC();
circleC.setRadius(8);
console.log(circleC.getCircumference());
