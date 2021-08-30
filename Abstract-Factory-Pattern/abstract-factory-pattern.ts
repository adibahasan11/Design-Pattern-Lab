// Product
abstract class Car {
    model: String = '';
    location: String = '';

    constructor(model: string, location: string){
        this.model = model;
        this.location = location;
    }

    abstract construct(): void;

    getModel(): void{
        console.log('Model: ' + this.model);
    }
}

class LuxaryCar extends Car {
    constructor(location: string){
        super('Luxary Car', location);
    }

    construct(): void {
        console.log('Luxary Car');
    }
}

class MicroCar extends Car {
    constructor(location: string){
        super('Micro Car', location);
    }

    construct(): void {
        console.log('Micro Car');
        console.log(this.location);
    }
}

class MiniCar extends Car {
    constructor(location: string){
        super('Macro Car', location);
    }

    construct(): void {
        console.log('Macro Car');
    }
}

// Factory 
abstract class CarFacotry {
    car!: Car;
    abstract buildCar(model: string): Car;
    
    public constructCar(model: string): void {
        this.car = this.buildCar(model);
        this.car.getModel();
    }
}

class BdCarFactory extends CarFacotry {
    public buildCar(model: string){
         
        if (model == 'Luxury') {
            this.car = new LuxaryCar('Bangladesh');
        } else if (model == 'Mini' ){
            this.car = new MiniCar('Bangladesh');
        } else if (model == 'Micro' ){
            this.car = new MicroCar('Bangladesh');
        }
        
        return this.car; 
    }
}

class USACarFactory extends CarFacotry {
    public buildCar(model: string){
         
        if (model == 'Luxury') {
            this.car = new LuxaryCar('USA');
        } else if (model == 'Mini' ){
            this.car = new MiniCar('USA');
        } else if (model == 'Micro' ){
            this.car = new MicroCar('USA');
        }
        
        return this.car; 
    }
}

const carFactory: CarFacotry = new BdCarFactory();
console.log(carFactory.buildCar('Micro'));
