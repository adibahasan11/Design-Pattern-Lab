// Product
abstract class Pizza {
  dough: string = '';
  sauce: string = '';
  toppings: string = '';
  
  abstract getPizza(): string; // return the flavor of pizza
  
  prepare(): void{
    console.log('Preparing ' + this.getPizza());
    console.log('Tossing ' + this.dough + '...');
    console.log('Adding ' + this.sauce + '...');
    console.log('Adding toppings: ' + this.toppings);
  }

  bake(): void{
    console.log('Baking ' + this.getPizza());
  }
  cut(): void{
    console.log('Cutting ' + this.getPizza());
  }
  box(): void{
    console.log('Boxing ' + this.getPizza());
    console.log(this.getPizza() + ' Ready');
  }
}

// Concrete Product class
class DhakaStyleFarmHousePizza extends Pizza {
  public getPizza() {
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'
    this.toppings = 'Mushroom, Tomato, Chicken'  
  
    return "Dhaka Style FarmHouse Pizza";
  }
}

class ChittagongStyleFarmHousePizza extends Pizza {
  public getPizza() {
    this.dough = 'Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'
    this.toppings = 'Mushroom, Tomato, Beef'
      
    return  "Chittagong Style FarmHouse Pizza"
  }
}

class DhakaStyleCheesePizza extends Pizza {
  public getPizza() {  
    this.dough = 'Thin Crust Dough'
    this.sauce = 'Marinara Sauce'
    this.toppings = 'Grated Reggiano Cheese'
    
    return "Dhaka Style Cheese Pizza";
  }
}

class ChittagongStyleCheesePizza extends Pizza {
  public getPizza() {
    this.dough = 'Thick Crust Dough'
    this.sauce = 'Plum Tomato Sauce'
    this.toppings = 'Shredded Mozzarella Cheese'

    return "Chittagong Style Cheese Pizza"
  }
}

// Factory
abstract class PizzaStore {
  public abstract makePizza(Type: string): Pizza // Factory Method

  public orderPizza(Type: string) {
    const pizza: Pizza = this.makePizza(Type);
      
    pizza.prepare()
    pizza.bake()
    pizza.cut()
    pizza.box()

    return pizza.getPizza();
  }
}

class DhakaPizzaStore extends PizzaStore {
  public makePizza(Type): Pizza {
    if (Type == 'FarmHouse') {
      return new DhakaStyleFarmHousePizza();
    } 
    else if (Type == 'Cheese') {
      return new DhakaStyleCheesePizza();
    }
    else
      return null;
    }
}

class ChittagongPizzaStore extends PizzaStore {
  public makePizza(Type): Pizza {
    if (Type == 'FarmHouse') {
      return new ChittagongStyleFarmHousePizza();
    } 
    else if (Type == 'Cheese') {
      return new ChittagongStyleCheesePizza;
    }
    else
      return null;
  }
}

const DhPizzaStore: PizzaStore = new DhakaPizzaStore() 
DhPizzaStore.orderPizza('cheese');