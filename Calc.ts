import { Calculator } from "./Calculator";

let calculate = new Calculator();

    console.log(`    Sum = ${calculate.add(24, 6)}
    Quotient = ${calculate.divide(400, 2)}
    Product = ${calculate.multiply(4, 16)}
    Difference = ${calculate.subtract(46, 6)}`);
    
let array : number [] = [2,64,4,100,5,57,6,7,9,10,3,87,1]
let sortArray = (param:number[]) : number []=>{
    let newArray : number [] = param.sort((first:number, second:number) => first - second)
    return newArray
}
console.log(sortArray(array));
