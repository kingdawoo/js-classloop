class Car {
    constructor(car, img, price, model, year) {
        this.car = car;
        this.img = img;
        this.price = price;
        this.model = model;
        this.year = year;
    }
}

var car1 = new Car("Fiat", "./img/fiat500.png", 5000000, 500, 2000);
var car2 = new Car("Volkswagen", "./img/tiguan.webp", 335000, "Tiguan", 2007);
// var car3 = new Car(...)

var cars = [];
cars.push(car1, car2);

for (let i = 0; i < cars.length; i++) {
    h1Car = document.createElement("h1");
    img = document.createElement("img");
    pPrice = document.createElement("p");
    pModel = document.createElement("p");
    pYear = document.createElement("p");

    h1Car.innerText = cars[i].car;
    img.setAttribute('Src', cars[i].img)    
    img.setAttribute('Width', '500px')
    pPrice.innerText = "Price: "  + cars[i].price;
    pModel.innerText = "Model: " + cars[i].model;
    pYear.innerText = "Year: " + cars[i].year;
    
    document.body.appendChild(h1Car);
    document.body.appendChild(img);
    document.body.appendChild(pPrice);
    document.body.appendChild(pModel);
    document.body.appendChild(pYear);
}