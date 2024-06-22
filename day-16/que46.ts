/*                        Question 46:
 Enhanced Laptop Object: Construct an object for a laptop including properties
 make, model, year, and a method describe() that logs a sentence about the laptop.*/



let HPLaptop= {
    make: "HP",
    model: "Pavilion",
    year: 2021,
    describe: function() {
        console.log(`This laptop is a ${this.year} ${this.make} ${this.model}.`);
    }
};
HPLaptop.describe();      // Output: This laptop is a 2021 HP Pavilion.
    