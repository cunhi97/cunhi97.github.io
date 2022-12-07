
'use strict'
//Dữ liệu 1: Dữ liệu của Julia [3, 5, 2, 12, 7], dữ liệu của Kate [4, 1, 15, 8, 3]

var Julia = [3, 5, 2, 12, 7];
var Kate = [4, 1, 15, 8, 3];

var newJulia = Julia.slice(1, 4)
console.log(newJulia);

newJulia.filter(checkDogs)
console.log(newJulia);

function checkDogs(DogJulia, DogKate) {
return DogJulia, DogKate >= 3;
}
var concat = newJulia.concat(Kate);
console.log(concat);
concat.forEach(function(con, i, arr){
if(con >= 3){
    console.log(`Dog number ${i + 1} is an adult, and is ${con} years old`)
}else {
    console.log(`Dog number ${i + 1} is still a puppy`)
}
})

/// Dữ liệu 2: Dữ liệu của Julia [9, 16, 6, 8, 3], dữ liệu của Kate [10, 5, 6, 1, 4]
var Julia = [9, 16, 6, 8, 3];
var Kate = [10, 5, 6, 1, 4];

var newJulia = Julia.slice(1, 4)
console.log(newJulia);

function checkDogs(DogJulia, DogKate) {
    return DogJulia, DogKate >= 3;
    }
    var concat = newJulia.concat(Kate);
    console.log(concat);
    concat.forEach(function(con, i, arr){
    if(con >= 3){
        console.log(`Dog number ${i + 1} is an adult, and is ${con} years old`)
    }else {
        console.log(`Dog number ${i + 1} is still a puppy`)
    }
    })
    
    //////////////////////////////////////////

//// LAB 12.2 
////Dữ liệu 1: [5, 2, 4, 1, 15, 8, 3]
var Dogage = [5, 2, 4, 1, 15, 8, 3, 0.1];
function calcAverageHumanAge(Dogage){
    let humanAge = Dogage.map(function(dog){
        if(dog <= 2)
        return 2 * dog;
        else
        return 16 + 4 * dog;
        });
console.log(humanAge);
var age18 = humanAge.filter(humanAge => humanAge > 18)
console.log(age18)
const sum = humanAge.reduce((partialSum, a) => partialSum + a, 0)
const avg = sum / humanAge.length;
console.log(sum);
console.log(avg);
}
calcAverageHumanAge(Dogage)


////////////////////////////////////////////////////
//Dữ liệu 2: [16, 6, 10, 5, 6, 1, 4]
var Dogage = [16, 6, 10, 5, 6, 1, 4]
function calcAverageHumanAge(Dogage){
    let humanAge = Dogage.map(function(dog){
        if(dog <= 2)
        return 2 * dog;
        else
        return Math.abs(16 + 4 * dog);
        });
console.log(humanAge);
var age18 = humanAge.filter(humanAge => humanAge > 18)
console.log(age18)
const sum = humanAge.reduce((partialSum, a) => partialSum + a, 0)
const avg = sum / humanAge.length;
console.log(sum);
console.log(avg);
}
calcAverageHumanAge(Dogage)

