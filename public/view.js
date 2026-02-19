const boardStr = localStorage.getItem("board");
const boardObj = JSON.parse(boardStr);

const idx = location.search;
const index = idx.split("=")[1];
const board = boardObj[index];

const referrer = document.referrer;

//조회수
const viewCount = (referrer) => {
    if (referrer.split('/').pop() === 'list.html') {
        board.views++;
        const viewCountStr = JSON.stringify(boardObj);
        localStorage.setItem("board", viewCountStr);
    }
};

viewCount(referrer);

const viewFrm = document.querySelectorAll("#viewFrm > div");

for (let i = 0; i < viewFrm.length; i++) {
    const id = viewFrm[i].id;
    viewFrm[i].innerHTML += " " + board[id];
}

//수정
const modifyBtn = document.querySelector("#modify");

const modifyBtnHandler = () => {
    location.href = '/board/modify.html?index=' + index;
};

modifyBtn.addEventListener('click', modifyBtnHandler);

//삭제
const deleteBtn = document.querySelector("#delete");

const deleteBtnHandler = (e) => {
    if (confirm("삭제하시겠습니까?")) {
    boardObj.splice(index, 1);
    for (let i = 0; i < boardObj.length; i++) {
        boardObj[i].index = i;
    }
    const setBoardStr = JSON.stringify(boardObj);
    localStorage.setItem("board", setBoardStr);
    location.href = '/board/list.html';
    }
};

deleteBtn.addEventListener('click', deleteBtnHandler);


