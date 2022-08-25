import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집'; // JSX 변수 let, var, const
  let [title1, setTitle1] = useState('남자 코트 추천') // a: 문자열, b: state 변경을 도와주는 함수
  let [title2, setTitle2] = useState('강남 우동 맛집')
  let [title3, setTitle3] = useState('파이썬 독학')

  let [arr, setArr] = useState(['여자 코트 추천','맛집 추천', '자바 독학']) // array도 가능
  // Destructuring 문법


  return ( // return() 안에는 병렬로 2개 이상 기입금지
    <div className="App">
      <div className="black-nav">
        <h4 style={{color:'yellow', fontSize: '16px'}}>ReactBlog</h4>
      </div>

      <div className="list">
        <h4>title1</h4>
        <p>8월 25일 발행</p>
      </div>
      <div className="list">
        <h4>title2</h4>
        <p>8월 25일 발행</p>
      </div>
      <div className="list">
        <h4>title3<</h4>
        <p>8월 25일 발행</p>
      </div>

      <h4>{ post }</h4>
    </div>
  );
}

export default App;
