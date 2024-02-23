// 10. Создайте класс Product, который содержит объект product (продукт) с полями и
// price (цена продукта), title (название продукта). Реализуйте метод
// displayProductInfo(), который выводит массив продуктов, где цена > 20. Создайте
// экземпляр класса Product и вызовите метод displayProductInfo()


// 1
// interface Products {
//     price: number;
//     title: string
// }

// class Product {
//     product: Products[] = [
//         { price: 10, title: 'title1' },
//         { price: 20, title: 'title2' },
//         { price: 30, title: 'title3' },
//         { price: 40, title: 'title4' }
//     ]

//     displayProductInfo = (): Products[] => this.product.filter((el) => el.price > 20)
// }
// const product = new Product();
// console.log(product.displayProductInfo());


// 2
// interface Products {
//     price: number;
//     title: string
// }

// class Product {
//     product: Products[];

//     displayProductInfo = (): Products[] => this.product.filter((el) => el.price > 20)
// }
// const product = new Product();
// product.product =  [
//     { price: 10, title: 'title1' },
//     { price: 20, title: 'title2' },
//     { price: 30, title: 'title3' },
//     { price: 40, title: 'title4' }
// ]
// console.log(product.displayProductInfo());



// 3
// interface Products {
//     price: number;
//     title: string
// }

// class Product {

//     displayProductInfo = ( productArr: Products[]): Products[] => productArr.filter((el) => el.price > 20)
// }
// const product = new Product();
// const productArr =  [
//     { price: 10, title: 'title1' },
//     { price: 20, title: 'title2' },
//     { price: 30, title: 'title3' },
//     { price: 40, title: 'title4' }
// ]
// console.log(product.displayProductInfo(productArr));


// 4
// interface Products {
//     price: number;
//     title: string
// }

// class Product {
//     product: Products[];

//     constructor(arr: Products[]) {
//         this.product = arr
//     }

//     displayProductInfo = (): Products[] => this.product.filter((el) => el.price > 20)
// }

// const product = new Product([
//     { price: 10, title: 'title1' },
//     { price: 20, title: 'title2' },
//     { price: 30, title: 'title3' },
//     { price: 40, title: 'title4' }
// ]);
// console.log(product.displayProductInfo());


// 5
interface Products {
    price: number;
    title: string
}

class Product {
    product: Products[];

    setProduct(arr: Products[]) {
        this.product = arr
    }

    displayProductInfo = (): Products[] => this.product.filter((el) => el.price > 20)
}

const product = new Product();
const arr = [
        { price: 10, title: 'title1' },
        { price: 20, title: 'title2' },
        { price: 30, title: 'title3' },
        { price: 40, title: 'title4' }
    ]
product.setProduct(arr)
console.log(product.displayProductInfo());
