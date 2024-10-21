menu = {
    _meal: '',
    _price:0,
    set meal(mealToCheck){
        if(typeof mealToCheck === 'string'){
            this._meal = mealToCheck;
        }
        else{
            console.log('Tried to create a meal that is not of string data type');
        }
    },
    set price(priceToCheck){
        if(typeof priceToCheck === 'number'){
            this._price = priceToCheck;
        }
        else{
            console.log('Tried to create a price that is not of number data type');
        }
    },
    get todaysSpecial(){
        // Default values (without setters) are falsy
        if(this._meal && this._price){
            return `Today’s Special is ${this._meal} for $${this._price}!`;
        }
        else{
            return 'Meal or price was not set correctly!';
        }
    },
    clear(){
        this._meal = '';
        this._price = 0;
    }
}

menu.meal ='Pasta';
menu.price = 10;
console.log(menu.todaysSpecial);
menu.clear();

console.log();
menu.meal ='Fish';
menu.price = 'Expensive';
console.log(menu.todaysSpecial);



