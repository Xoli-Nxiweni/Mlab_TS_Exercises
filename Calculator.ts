import { ICalculator } from "./Exercise2";

export class Calculator extends Error implements ICalculator{
    add = (num1: number, num2: number): number =>{
        if(typeof num1 === 'number' || typeof num2 === 'number'){
            return num1 + num2
        }
        throw new Error();
    }

    subtract = (num1: number, num2: number): number =>{
        if(typeof num1 === 'number' || typeof num2 === 'number'){
            return num1 - num2
        }
        throw new Error();
    }

    multiply = (num1: number, num2: number): number =>{
        if(typeof num1 === 'number' || typeof num2 === 'number'){
            return num1 * num2
        }
        throw new Error();
    }
    
    divide = (num1: number, num2: number): number | string =>{
        if(num2 === 0){
            return `Oops. thats an error, cannot divide by 2`;
        }
        if(typeof num1 === 'number' || typeof num2 === 'number'){
            return num1 / num2
        }
        throw new Error();
    }
}

