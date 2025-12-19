function sumAll(...number){
    return number.reduce((total, n)=> total + n, 0);
}

console.log(sumAll(12,3,6,9));