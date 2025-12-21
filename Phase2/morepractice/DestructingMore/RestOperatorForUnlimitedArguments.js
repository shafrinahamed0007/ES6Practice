function sumAll(...numbers){
    return numbers.reduce((total, n)=>total + n, 0);
}

console.log(sumAll(10,20,30,40,50));