// Write your code here
class Breakfast {
    constructor(food, drink){
        this.food = food;
        this.drink = drink;
    }
}

let brunch = new Breakfast("eggs", "juice");
brunch;

class Lunch {
    constructor(salad,soup,drink){
        this.salad = salad;
        this.soup = soup;
        this.drink = drink;
    }
}

let midlunch = new Lunch("side salad","broccoli cheddar soup","iced tea");
midlunch;

class Dinner {
    #dessert;
    constructor(salad,soup,entree,dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.#dessert = dessert;
    }
}

let evening = new Dinner("balsamic salad","consomme","filet mignon","cheesecake");
evening;