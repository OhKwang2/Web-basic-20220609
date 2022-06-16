function add(x, y){
    return x + y;
}

let result = add(10, 20);

console.log(result);

let result2 = function(x, y){
    return x + y;
}

console.log(result2(10, 20));

/*즉시 실행 함수.*/
console.log(function (x, y) {
    return x+y;
}(10, 20));

/*화살표 함수*/
let result3 = (x,y) => {
    return x + y;
}

let result4 = (x,y) => x + y;

console.log(result3(20, 30));
console.log(result4(10, 20));