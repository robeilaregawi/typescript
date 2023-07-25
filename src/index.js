// let firstName: string = 'Robeil';
// let lastName = 'Aregawi';
//
//
// const json = JSON.parse("55");
//
// console.log(json);
//
// console.log(typeof json);
//
//
// let u:any  =true;
// u = 'string';
// Math.round(u);
//
// let w: unknown = 1;
// w = "string";
// w = {
//     runANonExistentMethod: () => {
//         console.log('I think therefore I am');
//     }
// } as { runANonExistentMethod: () => void}
//
// // w.runANonExistentMethod();
//
// if(typeof w === 'object' && w !== null){
//     (w as {runANonExistentMethod: Function }).runANonExistentMethod();
// }
//
// // let x: never = true;
// // x = 1;
// // x = 'Robeil';
//
// let y: undefined = undefined;
// let z: null = null;
//
// // const names: string[] = [];
// // names.push("Dylan");
// // console.log(names)
//
// const names: readonly string[] = ['Robeil'];
// //names.remove('Soliana');
// console.log(names)
// const numbers: number[] = [];
// numbers.push(1);
// numbers.push(2);
//
// console.log(numbers)
//
// let head : number = numbers[0];
// console.log(head)
// // let ourTuple : [number, boolean, string];
// // ourTuple = [5, false, "Coding is here"]
//
// // define our tuple
// let ourTuple: [number, boolean, string];
// // initialize correctly
// ourTuple = [5, false, 'Coding God was here'];
// // We have no type safety in our tuple for indexes 3+
// ourTuple.push('Something new and wrong');
// console.log(ourTuple);
//
// const graph: [number, number] = [55.2,41.3];
// const [x,a] = graph;
// console.log(x)
// console.log(a);
// const Car : { type: string, model: string, year: number } = {
//     type: 'Nissan',
//     model: 'Rogue',
//     year: 2021
// }
// console.log(Car)
//
// interface Cars {
//     type: string
//     model: string
//     year: number
// }
// const ford: Cars  = {
//     type : 'Ford',
//     model : 'Focus',
//     year : 2000
// }
// const mekina = {
//     type: 'Ford'
// };
//
// mekina.type = 'Nissan';
//
// const app: {type: string, mileage?: number} = {
//     type: 'Toyota',
// };
// app.mileage = 2000;
// const nameAgeMap : {[index: string]: number} = {};
// nameAgeMap.Jack = 25;
// nameAgeMap.Mark = "Fifty";
// interface Point {
//     x: number;
//     y: number;
// }
//
// let pointPart : Partial<Point> = {};
// pointPart.x = 10;
// interface Car {
//     make: string;
//     model: string;
//     mileage?: number;
// }
//
// let myCar : Required<Car> = {
//     make: 'Ford',
//     model: 'Focus',
//     mileage: 12000
// }
// const nameAgeMap : Record<string, number> = {
//     'Alice': 21,
//     'Bob': 25
// }
// interface Person {
//     name: string;
//     age: string;
//     location?: string;
// }
//
// const bob: Omit<Person, 'age'> = {
//     name: 'Bob'
// }
// console.log(bob)
// const rob: Pick<Person, 'name'> = {
//     name: 'Bob'
// }
// console.log(rob)
//
// type Primitive = string | number | boolean
// const value: Exclude<Primitive, string> = true;
// console.log(value)
// type PointGenerator = () => { x: number; y: number;}
//
// const point: ReturnType<PointGenerator> = {
//         x: 10,
//         y: 20
// };
// console.log(typeof point)
// type PointPrinter = (p: {
//     x: number;
//     y: number;
// }) => void;
//
// const point : Parameters<PointPrinter>[0] = {
//     x: 10,
//     y: 20
// }
// console.log(point);
// const person: Readonly = {
//     name: 'Robeil',
//     age: 35
// };
//
// person.name = 'Israel';
// interface Person {
//     name: string;
//     age: number;
// }
//
// function printPersonProperty(person: Person, property: keyof Person){
//     console.log(`Printing person property ${property}: "${person[property]}"`)
// }
//
// let person = {
//     name: 'Max',
//     age: 27
// }
// printPersonProperty(person, 'name')
//
// type StringMap = {[key: string]: unknown};
// function createStringPair(property: keyof StringMap, value: string): StringMap{
//     return { [property]: value};
// }
// createStringPair()
//
// let value: string | undefined | null = null;
// value = 'hello';
// value = undefined;
// interface House {
//     sqft: number;
//     yard?: {
//         sqft: number;
//     };
// }
//
// function printYardSize(house: House){
//     const yardSize = house.yard?.sqft;
//     if(yardSize === undefined){
//         console.log('No yard');
//     } else {
//         console.log(`Yard is ${yardSize} sqft`);
//     }
// }
// let home : House = {
//     sqft: 500
// };
//printYardSize(home);
// function getValue() : string | undefined {
//     return 'Robeil';
// }
//
// console.log('value length ' + getValue()!.length)
//
// let array : number[] = [1,2,3];
// let value = array[0];
// console.log(value)
// type Color = 'red' | 'green' | 'blue';
// type HexColor<T extends  Color> =`#${string}`;
// let myColor: HexColor<'blue'> = '#000FF';
// console.log(myColor)
// let firstName:string = 'Robeil';
// console.log(firstName)
// let intro : string = `Hello my name is :- ${firstName}`;
// console.log(intro);
var age = 35;
console.log(age);


if(age < 18){
    age+=10;
}