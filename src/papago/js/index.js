const brandLogo = document.querySelector(".brand-logo-border");
const convertButton = document.querySelector(".article-footer button");
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");
const inputUrl = document.querySelector(".input-url input");
const linkButton = document.querySelector(".button-url img");


brandLogo.onclick = () => {
    // alert("로고가 클릭되었습니다.");
    // href 사용시 히스토리가 남아 뒤로가기 됨.
    // location.href = "https://papago.naver.com/"
    // replace 사용시 히스토리가 남지 않아 뒤로가기 안 됨.
    // location.replace("https://papago.naver.com/");
    location.href = "http://127.0.0.1:5500/papago/historyback.html"
}

convertButton.onclick = () => {
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

linkButton.onclick = () => {
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++) {
        if(inputUrl.value.includes(protocols[i])) {
            location.href = inputUrl.value;
            return;
        }
    }
    location.href = "https://" + inputUrl.value;
}

// 키 눌렀을 때 이벤트 발생하게 하는 것
inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13){
        // linkButton을 클릭하는 것과 동일한 역할 수행
        linkButton.click();
    }
}