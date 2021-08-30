import { Dough, Sauce, Cheese, PepperoniToppings, 
        PizzaIngredientFactory, NYPizzaIngredientFactory, ChicagoPizzaIngredientFactory
    } from "./Ingredient-Factory";

    // Product
abstract class Pizzza {
    dough: Dough;
    sauce: Sauce;
    cheese: Cheese;
    pepperini: PepperoniToppings;
    name: string;
    
    abstract setPizza(name: string): void; // return the flavor of pizza
    
    abstract prepare(): void;
  
    bake(): void{
      console.log('Baking ' + this.name);
    }
    cut(): void{
      console.log('Cutting ' + this.name);
    }
    box(): void{
      console.log('Boxing ' + this.name);
      console.log(this.name + ' Ready');
    }
  }
  
// Concrete Product class
class CheesePizza extends Pizzza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory){
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public setPizza(name: string) {
      return this.name = name;
    }

    prepare(): void{
        console.log('Preparing ' + this.name);
        
        this.dough = this.ingredientFactory.createDough()
        this.sauce = this.ingredientFactory.createSauce()
        this.cheese = this.ingredientFactory.createCheese()
        
        console.log('Tossing ' + this.dough.getDough() + '...');
        console.log('Adding ' + this.sauce.getSauce() + '...');
        console.log('Adding toppings: ' + this.cheese.getToppings());
      }
}
  
class PepperiniPizza extends Pizzza {
    ingredientFactory: PizzaIngredientFactory;

    constructor(ingredientFactory: PizzaIngredientFactory){
        super();
        this.ingredientFactory = ingredientFactory;
    }

    public setPizza(name: string) {
      return this.name = name;
    }

    prepare(): void{
        console.log('Preparing ' + this.name);
        
        this.dough = this.ingredientFactory.createDough()
        this.sauce = this.ingredientFactory.createSauce()
        this.pepperini = this.ingredientFactory.createPepperoni()

        console.log('Tossing ' + this.dough.getDough() + '...');
        console.log('Adding ' + this.sauce.getSauce() + '...');
        console.log('Adding toppings: ' + this.cheese.getToppings());
      }
}
  
// Factory
abstract class PizzzaStore {
    public abstract makePizza(item: String): Pizzza // Factory Method

    public orderPizza(Type: string) {
      const pizza: Pizzza = this.makePizza(Type);
        
      pizza.prepare()
      pizza.bake()
      pizza.cut()
      pizza.box()
    }
}
  
class NYPizzaStore extends PizzzaStore {
    pizza: Pizzza;
    ingredientFactory: PizzaIngredientFactory = new NYPizzaIngredientFactory();
    
    public makePizza(item: String): Pizzza {
      if (item == 'Cheese') {
        this.pizza.setPizza('New York Style Cheese Pizza');
        this.pizza = new CheesePizza(this.ingredientFactory);
      } 
      else if (item == 'Pepperini') {
        this.pizza.setPizza('New York Style Pepperini Pizza');
        this.pizza = new PepperiniPizza(this.ingredientFactory);
      }
      
      return this.pizza;
  }
}
  
class ChicagoPizzaStore extends PizzzaStore {
    pizza: Pizzza;
    ingredientFactory: PizzaIngredientFactory = new ChicagoPizzaIngredientFactory();
    
    public makePizza(item: String): Pizzza {
      if (item == 'Cheese') {
        this.pizza = new CheesePizza(this.ingredientFactory);
        this.pizza.setPizza('Chicago Style Cheese Pizza');
      } 
      else if (item == 'Pepperini') {
        this.pizza = new PepperiniPizza(this.ingredientFactory);
        this.pizza.setPizza('Chicago Style Pepperini Pizza');
      }
      
      return this.pizza;
  }
}
  
const nyPizzaStore: PizzzaStore = new NYPizzaStore();
nyPizzaStore.orderPizza('cheese');