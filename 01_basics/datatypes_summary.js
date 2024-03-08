//Primitive
// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt
// Reference (Non primitive)
// Array, Objects, Functions


//symbol
const id = Symbol("123")
const anotherId = Symbol("123")
console.log(id);
console.log(anotherId);
console.log(id === anotherId);

//arrays
const cs = ["oops", "js", "dsa"]

//objects
const a = {
    name: "yash",
    age: 21
}

//functions
const xs = function(){
    console.log("Hello");
}