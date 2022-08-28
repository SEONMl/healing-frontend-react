/*
컴포넌트 만드는 법
1. function 만들기
2. return () 안에 html 담기
3. <함수명></함수명> 쓰기

의미없는 <div> 대신
<></> 사용 가능
*/

const Modal2 = () => {} // 람다식 컴포넌트도 가능

function Modal(){
    return (
        <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    )
}