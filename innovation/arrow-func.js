//creating an arrow function
            //this is where we set inputs for a function, currently it's
            //expecting x to be passed
var square = (x) => {
    var result = x * x;
    return result;
};
// can also create arrow function like this, same but simple
var square1 = (x)=> x * x ;
console.log(square(9));
console.log(square1(2));

var user = {
    name: 'Hima',
    // sayYo: () => {
    //     console.log(`Hi yo. this is ${this.name}`);
    // },
    sayAltYo () {
        console.log(arguments);
        console.log(`Hi yo. this is ${this.name}`);
    }
};

user.sayAltYo('random01','random02');