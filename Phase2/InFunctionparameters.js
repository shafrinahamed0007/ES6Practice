function sumAll(...numbers){
    return numbers.reduce((total,n)=> total + n, 0);
}

console.log(sumAll(3,9,54,6));