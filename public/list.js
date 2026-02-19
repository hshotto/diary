const boardStr = localStorage.getItem("board");
const allDeleteBtn = document.querySelector("#allDelete");

if (boardStr === null) {
    const listSrt = JSON.stringify([]);
    localStorage.setItem("board", listSrt);
    boardStr = listSrt;
}

const boardObj = JSON.parse(boardStr);

const template = (index, objValue) => {
    return `
    <tr>
        <td>${index + 1}</td>
        <td><a href="/board/view.html?index=${objValue.index}">${objValue.subject}</a></td>
        <td>${objValue.writer}</td>
        <td>${objValue.date}</td>
        <td>${objValue.time}</td>
        <td>${objValue.views}</td>
    </tr>
    `;
};

const tbody = document.querySelector("tbody")

for (let i = 0; i < boardObj.length; i++) {
    tbody.innerHTML += template(i, boardObj[i]);
}

const allDeleteBtnHandler = (e) => {
    if (confirm("전체 삭제하시겠습니까?")) {
    boardObj.splice(0, boardObj.length);
    const setBoardStr = JSON.stringify(boardObj);
    localStorage.setItem("board", setBoardStr);
    location.href = '/board/list.html';
    }
}

allDeleteBtn.addEventListener('click', allDeleteBtnHandler );