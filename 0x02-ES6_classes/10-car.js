export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    cloneCar() {
        const symbolKey = Symbol('Car');
        const newCar = Object.assign(
            Object.create(Object.getPrototypeOf(this)), 
            this
        );
        Object.defineProperty(newCar, symbolKey, { value: true });
        return newCar;
    }

    get brand() {
        return this._brand;
    }

    set brand(value) {
        this._brand = value;
    }

    get motor() {
        return this._motor;
    }

    set motor(value) {
        this._motor = value;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
    }
}
