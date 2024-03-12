// ******** Arrays part-2 *********

const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)

let hero = marvel_heros.concat(dc_heros)

const all_heros = [...marvel_heros, ...dc_heros]

const arr1 = [1,2,3,[4,5],6,7,[8,9,[10,11,12]]]

const real_arr = arr1.flat(Infinity)

// console.log(real_arr);

console.log(Array.isArray("yash"))
console.log(Array.from("yash"))


let score1 = 100
let score2 = 200
let score3  =300
console.log(Array.of(score1,score2,score3));