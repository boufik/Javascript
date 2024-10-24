let obj = {
    name:"Chair",
    age:5,
    material:"wood",
    stats(){
        console.log(`Name = ${this.name}, age = ${this.age}, material = ${this.material}`);
    },
    value_of_this(){
        console.log(`Value of this keyword = ${this}\nType of this keyword = ${typeof this}`);
    },
    _country:"Italy",
    get country(){
        return "I come from " + this._country;
    },
    set country(c){
        this._country = c + c;
    }
}

// Call the object with some methods
obj.stats();
obj.value_of_this();

// Getters and setters share the same name as a key
console.log(obj.country);
obj.country = "Uruguay";
console.log(obj.country);
