# 일기장 게시판

로컬 스토리지를 활용한 간단한 일기장 웹 애플리케이션입니다.

## 주요 기능

- ✅ 일기 작성
- ✅ 일기 목록 조회
- ✅ 일기 검색
- ✅ 일기 상세 보기
- ✅ 일기 수정
- ✅ 일기 삭제
- ✅ 전체 삭제
- ✅ 조회수 기능
- ✅ 작성일/작성시간 기록

## 기술 스택

- HTML
- JavaScript (Vanilla JS)
- LocalStorage

## 프로젝트 구조

```
board/
├── index.html          # 메인 페이지
├── board/
│   ├── list.html      # 목록 페이지
│   ├── write.html     # 작성 페이지
│   ├── view.html      # 상세 보기 페이지
│   └── modify.html    # 수정 페이지
├── public/
│   ├── list.js        # 목록 로직
│   ├── write.js       # 작성 로직
│   ├── view.js        # 상세 보기 로직
│   └── modify.js      # 수정 로직
└── img/               # 이미지 파일
```

## 사용 방법

1. `index.html` 파일을 브라우저에서 열기
2. python -m http.server 8000
3. "일기장 작성" 버튼 클릭
4. 제목, 작성자, 내용을 입력하여 일기 작성
5. 목록에서 일기를 클릭하여 상세 보기
6. 수정/삭제 기능 활용

## 데이터 저장

모든 데이터는 브라우저의 LocalStorage에 저장됩니다.
