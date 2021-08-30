export interface PizzaIngredientFactory {
    createDough(): Dough;
    createSauce(): Sauce;
    createCheese(): Cheese;
    createPepperoni(): PepperoniToppings; 
}

export class NYPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThinCrustDough();
    }
    public createSauce(): Sauce {
        return new MarinaraSauce();
    }
    public createCheese(): Cheese {
        return new ReggianoCheese();
    }
    public createPepperoni(): PepperoniToppings {
        return new PepperoniToppings();
    }
}

export class ChicagoPizzaIngredientFactory implements PizzaIngredientFactory {
    public createDough(): Dough {
        return new ThickCrustDough();
    }
    public createSauce(): Sauce {
        return new PlumTomatoSauce();
    }
    public createCheese(): Cheese {
        return new MozzarellaCheese();
    }
    public createPepperoni(): PepperoniToppings {
        return new PepperoniToppings();
    }
}

export interface Dough {
    getDough(): string;
}

class ThinCrustDough implements Dough {
    getDough(): string {
        return 'Thin Crust Dough'
    }
}

class ThickCrustDough implements Dough {
    getDough(): string {
        return 'Thick Crust Dough'
    }
}

export interface Sauce {
    getSauce(): string;
}

class MarinaraSauce implements Sauce {
    getSauce(): string {
        return 'Marinara Sauce'
    }
}

class PlumTomatoSauce implements Sauce {
    getSauce(): string {
        return 'Plum Tomato Sauce'
    }
}

export interface Cheese{
    getToppings(): string;
}

class ReggianoCheese implements Cheese{
    getToppings(): string {
        return 'Reggiano Cheese'
    }
}

class MozzarellaCheese implements Cheese{
    getToppings(): string {
        return 'Mozzarella Cheese'
    }
}

export class PepperoniToppings {
    getPepperini(): string {
        return 'Pepperoni'
    }
}