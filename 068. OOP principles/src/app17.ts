// 17. Создайте абстрактный класс MusicalInstrument, представляющий музыкальный
// инструмент. У класса MusicalInstrument должен быть метод play, который будет
// воспроизводить звук инструмента. Создайте классы-наследники Guitar, Piano и
// Drums, которые будут представлять гитару, пианино и ударные соответственно.
// Реализуйте метод play для каждого класса, воспроизводя соответствующий звук
// инструмента. Создайте несколько объектов классов Guitar, Piano и Drums и
// вызовите метод play для каждого инструмента.


// 1
// abstract class MusicalInstrument {
//     play(): void{
//         console.log('play');
//     }

// }

// class Guitar extends MusicalInstrument {
//     override play(): void {
//         super.play();
//         console.log('guitar');

//     }
// }

// class Piano extends MusicalInstrument {
//     override play(): void {
//         super.play();
//         console.log('piano');

//     }
// }

// class Drums extends MusicalInstrument {
//     override play(): void {
//         super.play();
//         console.log('drums');

//     }
// }
// const guitar = new Guitar();
// const piano = new Piano();
// const drums = new Drums();

// guitar.play();
// piano.play();
// drums.play();



// 2
abstract class MusicalInstrument {
        play(): void{
            console.log('play');
        }
    
    }
    
    class Guitar extends MusicalInstrument {
        override play(): void {
            super.play();
            console.log('guitar');
    
        }
    }
    
    class Piano extends MusicalInstrument {
        override play(): void {
            super.play();
            console.log('piano');
    
        }
    }
    
    class Drums extends MusicalInstrument {
        override play(): void {
            super.play();
            console.log('drums');
    
        }
    }
    const guitar = new Guitar();
    const piano = new Piano();
    const drums = new Drums();
    
    guitar.play();
    piano.play();
    drums.play();