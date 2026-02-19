const writeFrm = document.querySelector("#writeFrm");

class Board {
    constructor(indexNum, subjectStr, writerStr, contentStr) {
        this.index = indexNum;
        this.Subject = subjectStr;
        this.Writer = writerStr;
        this.Content = contentStr;
        this.date = recordDate();
        this.time = recordTime();
        this.views = 0;
    }

    set Subject(value) {
        if (value.length === 0) throw new Error("제목을 입력해주세요"); 
        this.subject = value;
    }

    set Writer(value) {
        if (value.length === 0) throw new Error("작성자를 입력해주세요");
        this.writer = value;
    }
    
    set Content(value) {
        if (value.length === 0) throw new Error("내용을 입력해주세요");
        this.content = value;
    }

    set Views(value) {
        this.views = value;
    }

    set Date(value) {
        this.date = value;
    }
    set Time(value) {
        this.time = value;
    }
}

const recordDate = () => {
    const date = new Date();
    const yyyy = date.getFullYear();
    let mm = date.getMonth() + 1;
    let dd = date.getDate();

    mm = (mm > 9 ? "" : 0) + mm;
    dd = (dd > 9 ? "" : 0) + dd;

    const arr = [yyyy, mm, dd];
    return arr.join("-");
}

const recordTime = () => {
    const time = new Date();
    let hh = time.getHours();
    let mm = time.getMinutes();
    let ss = time.getSeconds();
    hh = (hh > 9 ? "" : 0) + hh;
    mm = (mm > 9 ? "" : 0) + mm;
    ss = (ss > 9 ? "" : 0) + ss;
    const arr = [hh, mm, ss];
    console.log(arr);
    return arr.join(":");
}

const submitHandler = (e) => {
    e.preventDefault();
    const subject = e.target.subject.value;
    const writer = e.target.writer.value;
    const content = e.target.content.value;

    try {
        const boardObj = JSON.parse(localStorage.getItem("board"));
        const index = boardObj.length;
        const instance = new Board(index, subject, writer, content);
        boardObj.push(instance);

        const boardStr = JSON.stringify(boardObj);
        localStorage.setItem("board", boardStr);
        location.href = "/board/list.html?index=" + index;
    } catch (e) {
        alert(e.message);
        console.error(e);
    }
};

writeFrm.addEventListener("submit", submitHandler);