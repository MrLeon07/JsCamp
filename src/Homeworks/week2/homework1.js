function isPrime(number) {
    var bolünenler = [];
    let prime = true;
    if (number !=2) {
        if(number == 1){prime = false}
        else{
        for (let index = 2; index < number; index++) {
         
        if (number % index == 0) {
           prime = false;
          
        }}}
    }
    
        return prime;
        }
function findPrime(...numbers) {
    for (let index = 0; index < numbers.length; index++) {
        let number = numbers[index];
        if(isPrime(number)){
            console.log(number +" bir asal sayıdır.");
        }
        else{
            console.log(number+" bir asal sayı değildir.")
        }
        
    }}

function bolenler(number) {
    let bolenler = [];
    for (let sayi = 1; sayi < number; sayi++){
        if(number % sayi == 0){
            bolenler.push(sayi)
        }
    
    }
    return bolenler
    
}
function toplam(...numbers) {
    let result = 0;
    for (let index = 0; index < numbers.length; index++) {
        result= result + numbers[index];
        
    }
    return result;
}


function isFriend(number1,number2) {
    let toplam1 = toplam(...bolenler(number1))
    let toplam2 = toplam(...bolenler(number2))
    if (toplam1 == number2 && toplam2 == number1) {
        return true;
        
    }
    else{
        return false;
    }}

function findFriend(number1,number2) {
    if(isFriend(number1,number2)){
        console.log(number1+" ve "+number2+" arkadaş sayılardır.");
    }
    else{
        console.log(number1+ " ve "+number2+" arkadaş sayılar değillerdir.");
    }
    
}
function isPerfect(number) {
    if(toplam(...bolenler(number)) == number){
        
        return true;
    }
    else{
        return false;
    }
}
function findPerfect(number) {
    console.log(bolenler(number))
    if(isPerfect(number)){
        console.log(number+" sayısı mükemmel sayıdır.")
    }
    else{
        console.log(number+" sayısı mükemmel sayı değildir.")
    } 
}

//findPrime(...numbers), findPerfect(number) ve findFriend(number1,number2) fonksiyonları kullanılacaktır.
let primeList = [];
let perfectList = [];
for (let sayi = 1; sayi < 1000; sayi++) {
    if(isPerfect(sayi)){
        perfectList.push(sayi)
    }
    if(isPrime(sayi)){
        primeList.push(sayi)
    }
}
console.log(primeList.length+" adet asal sayı tespit edildi. Bunlar: ")
console.log(primeList)
console.log(perfectList.length+" adet mükemmel sayı tespit edildi. Bunlar: ")
console.log(perfectList)









