const modifyFrm = document.querySelector("#modifyFrm");
const modifyFrmList = document.querySelectorAll("#modifyFrm > div");
const backBtn = document.querySelector("#back");
const idx = location.search;
const index = idx.split("=")[1];

const boardObj = JSON.parse(localStorage.getItem("board"));
const board = boardObj[index];

for (let i = 0; i < modifyFrmList.length; i++) {
    const element = modifyFrmList[i].childNodes[1];
    const id = element.name
    element.value = board[id];
}

const isEmpty = (subject, writer, content) => {
    if (subject.length === 0 || writer.length === 0 || content.length === 0) {
        throw new Error('모든 필드를 입력해주세요.');
    }
};

const modifyHandler = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;
    
    try {
        isEmpty(subject, writer, content);
        board.subject = subject;
        board.writer = writer;
        board.content = content;

        const boardStr = JSON.stringify(boardObj);
        localStorage.setItem("board", boardStr);
        location.href = '/board/view.html?index=' + index;
    } catch (e) {
        alert(e.message);
        console.log(e);
    }
};

modifyFrm.addEventListener('submit', modifyHandler);

const backBtnHandler = (e) => {
    e.preventDefault();
    location.href = '/board/list.html';
};

backBtn.addEventListener('click', backBtnHandler);