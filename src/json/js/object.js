let year = 1;

let studentObj = {
    name : "김준일",
    schoolName : "코리아아이티아카데미",
    hobby : ["축구", "농구", "골프"],
    info : {
        "year" : year,
        group : 2,
        number : 3
    }
};

console.log(studentObj.name);

for(let i = 0; i < studentObj.hobby.length; i++) {
    console.log(studentObj.hobby[i]);
}

console.log(studentObj.info.year);

console.log("학생객체 : " + studentObj);

/*
JSON 형변환
1. Object -> JSON => JSON.stringify(객체);  오브젝트(객체)를 JSON 문자열로 변환해줌.
2. JSON -> Object => JSON.parse(JSON);  JSON문자열을 오브젝트(객체)로 변환해줌.

*/

let jsonData = JSON.stringify(studentObj);

console.log("JSON으로 변환 : " + JSON.stringify(studentObj));

//JSON은 그냥 문자열이기 때문에 초기화되어 있지 않아 그냥 불러오면 undefined로 나타남
console.log(jsonData.name);

let jsonObj = JSON.parse(jsonData);
console.log("Object로 변환 : " + jsonObj);