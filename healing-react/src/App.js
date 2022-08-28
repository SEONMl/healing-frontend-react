import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; // JSX 변수 let, var, const
  let [arr, setArr] = useState(['여자 코트 추천','맛집 추천', '자바 독학']) // array도 가능
  let [like, setLike]= useState(0);
  // Destructuring 문법

  function myfunc(){ // 람다 ()=>{ ~~~ }
    console.log("따봉");
    setLike(like+1);
  }


  return ( // return() 안에는 병렬로 2개 이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow', fontSize: '16px'}}>ReactBlog</h4>
      </div>

      <Button onClick={ ()=> {
          // arr[0]="남자 코트 추천"; 원본데이터는 냄겨두기
          let copy = [...arr]; // 독립적인 arr 사본 생성
          copy[0] = "남자 코트 추천";
          setArr(copy);
        }}>글 수정</Button>

      <Button onClick = {()=>{
        let copy = [...arr.sort];
        setArr(copy);
      }}>가나다 순 정렬</Button>

      <div className="list">
        <h4>{ arr[0] } <span onClick={myfunc}>👍</span> { like }</h4>
        <p>8월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{ arr[1] }</h4>
        <p>8월 25일 발행</p>
      </div>
      <div className="list">
        <h4>{ arr[2] }</h4>
        <p>8월 25일 발행</p>
      </div>

      <h4>{ post }</h4>
    </div>
  );
}

export default App;
