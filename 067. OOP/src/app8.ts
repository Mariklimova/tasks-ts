// 8. Создайте класс CircleR, который содержит свойство radius (радиус круга) и метод
// getArea() (вычисление площади круга). Создайте экземпляр класса CircleR и
// выведите площадь окружности. Площадь круга: π * r^2


// 1
// class CircleR {
//     radius: number = 5;
//     getArea = () => 3.14 * this.radius ** 2
// }
// const circleR = new CircleR()
// console.log(circleR.getArea());



// 2
// class CircleR {

//     getArea = (radius: number)=> 3.14 * radius ** 2
// }
// const circleR = new CircleR()
// console.log(circleR.getArea(5));



// 3
// class CircleR {
//     radius: number;
//     getArea = () => 3.14 * this.radius ** 2
// }
// const circleR = new CircleR();
// circleR.radius = 5;

// console.log(circleR.getArea());



// 4
// class CircleR {
//     radius: number;
//     constructor(r: number) {
//         this.radius = r;
//     }
//     getArea = () => 3.14 * this.radius ** 2
// }
// const circleR = new CircleR(5);
// console.log(circleR.getArea());



// 5
class CircleR {
    radius: number;

    setRadius(r: number) {
        this.radius = r
    }

    getArea = () => 3.14 * this.radius ** 2
}
const circleR = new CircleR();
circleR.setRadius(5)
console.log(circleR.getArea());



