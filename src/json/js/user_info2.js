/*
    서버에서 가지고 있는 데이터
*/

let userList = [
    {
        usercode : 20220001,
        username : "junil",
        password : "1234",
        name : "김준일",
        email : "aaaa@gmail.com",
        role : ["ROLE_ADMIN", "ROLE_USER"],
        provider : "naver"
    },
    {
        usercode : 20220002,
        username : "juni2",
        password : "1234",
        name : "김준이",
        email : "bbbb@gmail.com",
        role : ["ROLE_ADMIN", "ROLE_USER"],
        provider : "google"
    },
    {
        usercode : 20220003,
        username : "juni3",
        password : "1234",
        name : "김준삼",
        email : "ccc@gmail.com",
        role : ["ROLE_ADMIN", "ROLE_USER"],
        provider : "kakao"
    }
];

/*
    클라이언트
*/

const userListLoadBtn = document.querySelector(".user-list-load-btn");
const userListremoveBtn = document.querySelector(".user-list-remove-btn");
const userTableList = document.querySelector(".user-table-list");

userListLoadBtn.onclick = () => {
    // AJAX 통신을 통해 데이터를 서버로부터 받음
    let userJSON = JSON.stringify(userList);

    let userListObj = JSON.parse(userJSON);

    userListObj.forEach(user => {
        userTableList.innerHTML += `
            <tr>
                <td>${user.usercode}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role.join(", ")}</td>
                <td>${user.provider}</td>
            </tr>
        `;
    });
}

// remove 한 번 맨들어 볼 것
userListremoveBtn.onclick = () => {

}