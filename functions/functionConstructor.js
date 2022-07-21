





const marques  = new Person("Marques2")


function Person(name2){
    this.name2 = name2
    this.run = function(){
        return name2+" está correndo do ladrão !!"
    }
}

console.log(marques.run())






const tica = new Dog("Tica")

function Dog(name3){
    this.name3 = name3
    this.latir = function(){
        return this.name3 +" está latindo !!(AU! AU!)"

    }
}

console.log(tica.latir())



const motorola = new Smartphone("Motorola")

function Smartphone(name4){
    this.name4 = name4
    this.ligar = function(){
        
        return this.name4 + " está ligando! "
    }
}

console.log(motorola.ligar())