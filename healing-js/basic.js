var number // 모든 변수, 자료형 선언 시 사용

// var, let, const 차이

var myName // 거의 전역변수, 함수 레벨 스코프, 중복 선언 가능
let myAge; // 블록 레벨 스코프, 중복 선언 불가능, 재할당 가능
const myAddress="Seoul"; // 블록 레벨 스코프, 선언과 동시에 초기화해야 함,중복 선언 불가능, 재할당 불가능
/* 
Hoisting: 인터프리터가 변수와 함수의 메모리 공간을 선언 전에 미리 할당하는 것
var - 호이스팅O, 초기화 전 접근 시 undefined 반환
let, const - 호이스팅X, 사용 권장

자료형
숫자형, 문자열, 논리형 / 배열, 객체 / undefined, null
*/

document.write("3 == \"3\"       ", 3=="3", "<br>");
document.write("3 === \"3\"      ", 3==="3", "<br>");
document.write("3 != \"3\"       ", 3!="3", "<br>"); 
document.write("3 !== \"3\"      ", 3!=="3", "<br>");
/*
연결 연산자
== : 피연산자가 서로 같으면 true
=== : 피연산자도 같고 자료형도 같으면 true

그외 if, switch, for, while, do-while 동일
*/

function printHello(){
    document.write("함수로 프린트한 문장입니다.");
}
/*
 함수
 function 함수명() {} 

 익명 함수
 (function(parameter) {
    명령
 }(argument));

 parameter => { 함수 내용 }
 */

