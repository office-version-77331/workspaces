console.log('hello Typescript ')
let num = 5;


// fnction define in type script 
//@ts-ignore 
function sum(a,b) { // throgh an error 
    return a+b; 
}
console.log(sum(5,'void')); 

// @ts-ignore
function sumOfTwoNum(a: number, b:number):number{
    return a+b
}

console.log('Total Of Two Num : ', sumOfTwoNum(6, 8));

//  with arrrow function :
const abc = (a:number, b:number):number => {
    return a+b
}

let MyName:String = 'XYZ'

const string: String = 'Hello, How are you'; 
const UpperCaseString: String = string.toUpperCase();
console.log('Upper case String : ', UpperCaseString);

const LowerCaseString: String = string.toLowerCase();
console.log("Lower  case : ", LowerCaseString); 

const isEven = (a:number): boolean => {
    return a % 2 === 0

}

console.log(isEven(5)); 

const isDivisibleByFourAndEight = (a:number, b:number): boolean => {
     return a % 4 === 0 && b % 4 === 0  && a % 8 === 0 && b % 8 === 0; 
}
console.log('Result of  two numbers in form of booleans : ',  isDivisibleByFourAndEight(8,6));

console.log(2^4);

const bigNumber: bigint = 9007199254740992n; 
console.log(bigNumber); 

let  anyType:any = 5;
anyType = 'kuch bhi'
anyType = true;

let anyType1 = {
    a: 0,
    b: 'hello'
}
 
let array = [];
 // unknown type  // 

let num1 : unknown;
 num1 = 9; 
 num1 =true; 
 num1 = 'Hello';
  // usecases  we can  check the  type during  some  opreations like :
 const fetchData = async  () : Promise<unknown>  => {
    const response = await fetch('http://localhost/3000/api'); 
    const result = await response.json(); 
    return result; 

 }
 const processData = async  () => {
    const result = await  fetchData(); 
    if ( typeof result === 'object') {
    return ;// Perform  operations on the  response  object; 
   }
 }
   

 let message = 'Hello, TypeScript! '; 
 console.log(typeof message); 

 //Function declaration in type script and returning :

 const greetYou = (name:string , id: number ):string => {
     console.log(`Hello , Welcome  ${name} in Hope station with id :${id} `);
     return 'String'
 }
   
 greetYou('Tushar', 10);


 const isPalindrome = (string: string ): boolean => {
    const getSring = string ; 
    const reverseString = getSring.split('').reverse().join('');
    console.log(reverseString);
    return getSring === reverseString ;
}
console.log(`Checking Palindrome : ${isPalindrome('Hello')}`)



// Optional and Default parameters  
// 1 Optional parameters : 

 const greet1  = (name:string , id?: number):string => {
    if (id) {
       return `Hello , Welcome  ${name} in Hope station with id :${id} `
    }else {
        return `Hello, Boy ${name}`
    }
}

 console.log('with id : ');
 console.log(greet1( 'Tushar', 10 ));
 
 console.log('Without Id: ');
 console.log(greet1( 'Tushar' )); 

 // 2 Default parameters  : 

  const greet2 = (name:string , id: number = 2 ):string => {
     console.log(`Hello , Welcome  ${name} in Hope station with id :${id} `);
     return 'String'
 }

 console.log(greet2('Preet'))

 // Arrays in Type Script  
 // using Square brackets : 
 const number: number[] = [2,3,3,3,4,4,55,5]; 
  // Using array constructor :
   const  newArray  = new Array(2,34,6,7,5,46); 
   const fruits: string[] = ['Apple', 'Banana', 'Mango', 'Orange'];

   const newUpadtedArray = fruits.push('Grapes');
    console.log(newUpadtedArray);
    console.log(fruits);

 const newUpdatedArray = fruits.pop();
    console.log(newUpdatedArray);
    console.log(fruits);
// arary iteration :
for(let i = 0; i< fruits.length; i++) {
    console.log(fruits[i]);
}

// forEach loop :
fruits.forEach((fruit) => {
    console.log(fruit);
})
// for of loop :..
for (const fruit of fruits) {
    console.log(fruit);
}
//map method :
const newFruits = fruits.map((item: string, index:number):string => {
    return `${item} - ${index}`
    })
console.log(newFruits); 

// filter method :
const filterFruits = fruits.filter((item: string, index:number):boolean => {
    return item.length > 5
})
console.log(filterFruits);

// reduce method :
const reduceFruits = fruits.reduce((acc:string, item:string):string => {
    return `${acc} ${item}`
})
console.log(reduceFruits);

// Object in Type Script :
// Normal Object :
const object = {
    name: 'Tushar',
    age: 23,
    id: 1,
    address: {
        city: 'Pune',
        state: 'MH'
    }
};

console.log(object.name); 
// Object with type :
const object1: {name: string, age: number, id: number, address:{city : string, state: string} } = {
    name: 'Tushar',
    age: 23,
    id: 1,
    address: {
        city: 'Pune',
        state: 'MH'
    }
}
console.log(object1.name);


// Object with type :
type Person = {
    name: string;
    age: number;
    id: number;
    address: {
        city: string;
        state: string;
    };
}
const object2: Person = {
    name: 'Tushar',
    age: 23,
    id: 1,
    address: {
        city: 'Pune',
        state: 'MH'
    }
}
console.log(object2.name);

const object3: Person = {
    name: 'Preet',
    age: 23,
    id: 1,
    address: {
        city: 'Pune',
        state: 'MH'
    }
}
console.log(object3.name);

type Product = {
    name: string;
    price: number;
    quantity: number;
}
const product: Product = {
    name: 'Mobile',
    price: 20000,
    quantity: 5
}
console.log(product.name);
 const calculateTotalPrice = (product: Product): number => {
    
    return product.price * product.quantity

 }
    console.log(calculateTotalPrice(product));

    // function call Signature :
    type Student = {
        name: string;
        age: number;
        id: number;
        address: {
            city: string;
            state: string;
        };
        greet: (country: string) => string; // function call signature which takes string as an argument and return string as an output
    }
    const student: Student = {
        name: 'Tushar',
        age: 23,
        id: 1,
        address: {
            city: 'Pune',
            state: 'MH'
        },
        greet: (country : string ) => `welcome My name is ${student.name} and I am from ${country}`
    }
   const introduce = (student: Student): string => {
       return `Hello, My name is ${student.name} and I am ${student.age} years old`
   }
    console.log(introduce(student));
    console.log(student.greet('India'));

 // enum in type script : .
 enum Role {
    user = 'user',
    admin = 'admin',
 }

 type LoginDetails = {
    name: string;
    email: string;
    password: string;
    role: Role;
    }

    const user1 = {
        name: 'Tushar',
        email: 'user@gmail.com', 
        password: '12345',
        role: Role.user
    }

    const user2 = {
        name: 'Preet',
        email: 'user2@gmail.com',
        password: '12345',
        role: Role.admin
    }

    const isAdmine = (parameter:any ) : boolean  => { 
        return parameter === Role.admin 
    }
     console.log('User Adimin : ', isAdmine(user1.role));
        console.log('User Adimin : ', isAdmine(user2.role));

        // Union Type :
        type NumberOrString = number | string;


        const add = (a: NumberOrString): NumberOrString => {
            return  typeof a === 'number' ? a * 2 : typeof a === 'string' ? 'Hello  ' + a  :  ' the value is not a number or string' ; 
        }
 console.log(add(5));
    console.log(add('Tushar'));

 // Intersection Type :
 
 type Human = { 
    name: string;
    age : number;
 } 
 type  Employee = {
        id: number;
        role: string;
 } 
 type EmployeeDetails = Human | Employee;   // The EmployeeDetails type is used to take multiple types for one variable .
 type EmployeeDetails1 = Human & Employee;  // The intersection type is used to  combine the multiple types in one type.   

    const employee : EmployeeDetails = { // The EmployeeDetails type is used to take multiple types for one variable .
        name: 'Tushar',
        age: 23,
        id: 1,
        role: 'Developer'
    }
    const personalInfo : EmployeeDetails = { // The EmployeeDetails type is used to take multiple types for one variable .
        name: 'Tushar',
        age: 23,
    }

    const employee1: EmployeeDetails1 =  { // The intersection type is used to  combine the multiple types in one type.
        name: 'Tushar',
        age: 23,
         id: 1,
        role: 'Developer'
    }

    // Generics in Type Script :
     const genericFunction = <T>(value: T): T => {
        return value
    }
   
    console.log(genericFunction<string>('Hello'));
    console.log(genericFunction<number>(5));
    console.log(genericFunction<boolean>(true));
    console.log(genericFunction<string[]>(['Hello', 'World']));
  
    console.log(genericFunction([1,2,3,4,6])); // if you dont provide an  generic type then it will take the type of the first element in the array.

    const fruits1: object[] = [{Apple:'Apple', Banana: 'Banana', Mango:'Mango', Orange:'Orange'}];
        console.log(fruits1);

        console.log(typeof fruits1);