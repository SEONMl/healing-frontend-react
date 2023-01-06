# CSS 스타일 규칙
- 선택자 { 속성1: 속성 }
- 같은 스타일을 사용하는 요소들은 컴마로 나열해 정의할 수 있다.
- 주석 : /* 내용 */

### 전체 선택자
```css
* {
    background-color: black;
}
```

### 타입 선택자
```css
TagName {
    text-align: center; /* 텍스트 정렬 속성 */
    font-syle: italic ;
    color: blue; 
}
```
\<head\> 태크 안 
 내부 스타일 시트 적용 : \<style\> 태크 사이에 코드 작성하여 사용
 외부 스타일 시트 적용 : \<link rel="sylesheet" href="파일 경로"\> 


### 클래스 선택자
```css
 .ClassName {
    text-align: center;
}
```
태그 안 속성으로 class="클래스명"으로 적용


### 아이디 선택자
```css
 #IdName {
    width: 500px; /* 너비 */
    margin: 10px auto; /* 중앙 배치 */
    padding: 10px; /* 테두리와 내용 사이 여백 */
    border: 1px; /* 테두리 굵기와 색깔 */
}
```
태그 안 id 속성 값을 이용하여 사용

---

CSS에서 C는 Cascading을 의미한다. 

둘 이상의 스타일을 적용할 때 우선순위에 따라 적용할 스타일을 결정할 수 있다.
> 스타일 우선순위
>1. !important: 어떤 스타일 보다 우선 적용하는 스타일
>2. 인라인 스타일: 태그 안에 style 속성에 적용한 스타일
>3. id 스타일
>4. 타입 스타일