console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");
for(let i = 0; i<=100; i++){
    if(i % 2 != 0){
        console.log(i);
    }
    else{
        continue;
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");
for(let i = 0; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log("Fizz")
    }
    else if(i % 5 == 0){
        console.log("Buzz")
    }
}

// Exercise 3 Section
console.log("EXERCISE 3 pt.1:\n==========\n");
let i = 0;
while(i <= 100){
if(i % 2 != 0){
    console.log(i)
}
i++;
}


i = 0;
do{
    
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i, "FizzBuzz")
    }
    else if(i % 3 == 0){
        console.log(i, "Fizz")
    }
    else if(i % 5 == 0){
        console.log(i, "Buzz")
    }
    i++;
    console.log(i)
}
while(i < 100)

//Exercise 4
console.log("EXERCISE 4:\n==========\n");

let value = Math.round((Math.random() * 500)); // creates a random number between 0 and 500
let n = Math.round(Math.random() * (500 - 100) + 100); // creates a random number between 100 and 500
let foundValue = false;
for(let i = 0; i < n; i++){
    if(i == value){
        foundValue = true;
        console.log(i, "Found Value!");
        break;
    }
}
if(!foundValue){
    console.log("Could Not Find Value", value);
}

//Bonus Exercise 5
console.log("EXERCISE 5:\n==========\n");

let fizzDivisor = Math.round(Math.random() * (10 - 1) + 1);
let buzzDivisor = Math.round(Math.random() * (10 - 1) + 1);
n = Math.round(Math.random() * (1000 - 1) + 1);
let start = Math.round(Math.random() * (10 - 1) + 1);
let startValue = start;


for(start; start <= n; start++){
    if(start % fizzDivisor == 0 && start % buzzDivisor == 0){
        console.log(start, "FizzBuzz")
    }
    else if(start % fizzDivisor == 0){
        console.log(start, "Fizz")
    }
    else if(start % buzzDivisor == 0){
        console.log(start, "Buzz")
    }
    
}

console.log(`start: ${startValue}, n: ${n}, fizzDivisor: ${fizzDivisor}, buzzDivisor: ${buzzDivisor}`)
