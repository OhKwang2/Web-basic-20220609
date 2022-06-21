let userData = {
    "code" : "1",
    "msg" : "유저정보 로드 성공",
    "data" : {
        "usercode" : 20220621,
        "username" : "junil",
        "password" : "1234",
        "name" : "김준일",
        "email" : "123123@naver.com",
        "role" : ["ROLE_ADMIN", "ROLE_USER"],
        "provider" : "naver"
    }
}

let jsonData = JSON.stringify(userData);

console.log(jsonData);


main();

function main() {
    const jsonObj = loadJsonFile();
    console.log(jsonObj);

}

function loadJsonFile() {
    const jsonData = new Request("../json/user.json");
    return jsonData;
}
