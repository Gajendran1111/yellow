class car {
    constructor(brand,price,color) {
        this.brand=brand
        this.price=price
        this.color=color
        
    }
    output(){console.log(`I need ${this.brand} car\nThe minimum of car price is ${this.price} \nThe car fully colored by ${this.color} color`)}
}
const finaloutput = new car("KIA","40lakhs","black");
finaloutput.output()