// 1. Создайте абстрактный класс Shape (Фигура) с абстрактным методом calculateArea()
// (вычислитьПлощадь). Затем создайте дочерний класс Rectangle (Прямоугольник), который
// наследует Shape и реализует метод calculateArea() для расчета площади прямоугольника. Формула
// для вычисления площади прямоугольника: S = длина * ширина
// Входные: Rectangle(5, 4) → Результат: 20
// Входные: Rectangle(10, 3) → Результат: 30
// Входные: Rectangle(7, 7) → Результат: 49


abstract class Shape_18{
    abstract calculateArea(height:number, wigth:number):number
}

class Rectangle_18 extends Shape_18{
    calculateArea = (height:number, wigth:number):number=>height*wigth
}

const rectangle_18 = new Rectangle_18();
console.log(rectangle_18.calculateArea(7, 7));
