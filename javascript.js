let car1 = {
    id: "porsche",
    name: "Porsche",
    color: "white",
    model: "Boxter",
    year: 2015,
    hp: 375,
    price: 70000
}
let car2 = {
    id: "mercedes",
    name: "Mercedes",
    color: "white",
    model: "s550",
    year: 2015,
    hp: 449,
    price: 38000
}
let car3 = {
    id: "tesla",
    name: "Tesla",
    color: "white",
    model: "s60",
    year: 2015,
    hp: 302,
    price: 26000
}
let car4 = {
    id: "bmw",
    name: "BMW",
    color: "red",
    model: "218i",
    year: 2015,
    hp: 390,
    price: 18000
}
let car5 = {
    id: "honda",
    name: "Honda",
    color: "gray",
    model: "c9",
    year: 2015,
    hp: 380,
    price: 2200
}
let car6 = {
    id: "mazda",
    name: "Mazda",
    color: "red",
    model: "6",
    year: 2015,
    hp: 350,
    price: 23000
}

let cars = [car1, car2, car3, car4, car5, car6];

function displayDesc(carId) {
    let foundCar = findCarById(carId);
    let description = getDesc(foundCar);

    alert(description);

}

function findCarById(carId) {
    for (i = 0; i < cars.length; i++) {
        if (cars[i].id === carId) {
            return cars[i];
        }
    }
}

function getDesc(car) {
    return ` მწარმოებელი: ${car.name} \n ფერი: ${car.color} \n მოდელი: ${car.model} \n გამოშვების წელი: ${car.year} \n ცხენის ძალა ${car.hp} \n ფასი: ${car.price}$`
}