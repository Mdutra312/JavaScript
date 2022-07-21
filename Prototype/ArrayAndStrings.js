//Manipulando Arrays and Strings

let pharse = "Eu quero ser mais intenso!"
let myArray = pharse.split(" ")
let myFinalPharse = myArray.join("_")


console.log(myFinalPharse)

// Array com constrututor

let mySecondArray = new Array('a', 'b', 'c')
console.log(mySecondArray)

// elementos do Array

console.log(["a",{type:"array"}, function(){

    return "alo"
},][2]())


let vixi = "SuaFiaDaMae"
console.log(Array.from(vixi))


let lesson = ['numb1', 'numb2', 'numb3']

//console.log(lesson.push("nodejs")) // adicionou o nodejs no ultimo Array of the my position
//console.log(lesson.unshift("sql"))

//console.log(lesson)

// pop -> remove a ultima posição do meu Array
//unshitfit -> adiciona elementos no comecinho do meu Array
//shift -> remove do começo


console.log(lesson.slice(1,3)) //modifica ao meu array de forma que subtrai uma posição do meu array

console.log(lesson.splice(1, 2))//modifica o meu array de forma que subtrai uma posição do meu array

let position = lesson.indexOf("numb2")

console.log(position)