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

---
## 스타일 속성

### 글꼴 관련 스타일
> - font-family : "<글꼴1>" | [<글꼴2>, <글꼴3>]
> - font-size : <절대 크기> | <상대 크기> | <크기> | <백분율>
> - font-syle : normal | italic (== oblique)
> - font-weight : normal | bold | bolder ..

### 웹 폰트 사용하기
> ```css
> @import url("URL~~");
>
> @font-face {
>     font-family: <글꼴 이름>;
>     src: <글꼴 파일>;
> }
>```

### 텍스트 관련 스타일
> - color : <색상> // 16진수, hsl, 영문명 등으로 표현
> - text-align : start | end | left | right | center | justify(양쪽 문단에 맞춰 정렬) | match-parent
> - line-height : <크기> // 줄 간격
> - text-decoration : none | underline | overline | line-through
> - text-shadow : none | <가로 거리> <세로 거리> <번짐 정도> <색상>
> - text-transform : none | capitalize | uppercase | lowercase | full--width
> - letter-spacing : <글자 간격 크기>
> - word-spacing : <단어 간격 크기>

### 목록 스타일
>- list-style
> - list-style-type : disc | circle | square ...
>- list-style-image : <이미지 파일 경로>
>- list-style-position : inside | outside

### 표 스타일
>- caption-side : top | bottom 
>- border: <테두리 두께> <줄 모양>
>- border-spacing : <수평 거리> <수직 거리>
>- border-collapse : collapse | separate // 표와 셀 테두리를 합칠 것인지 따로 표시할 것인지
---
## Box Model 
: 콘텐츠 영역 Content -> 패딩 Padding -> 테두리 Border -> 마진 Margin
 ### 박스 스타일
>- box-sizing : border-bos(테두리까지의 너빗값) | content-box(기본값)
>- width // 박스의 고정 너비
>- height // 박스의 고정 높이
>- box-shadow : <수평 거리> <수직 거리> <흐림 정도> <번짐 정도> <색상> inset(안쪽 그림자)

### 테두리 스타일 
>- border-style : none, hidden, solid, dotted, dashed, double, groove, inset, outset, ridge
>- border-width : <크기> | thin | medium | thick
>- border-color
>- border-radius : <반지름 크기> | <백분율> // 둥근 모서리\
>  border-top-left-radius / border-bottom-right-radius 처럼 따로 설정할 수 있음

### 여백 스타일
> - margin : <크기> | <백분율> | auto

### 레이아웃
>- display : block | inline | inline-block | none
>- float : left | right | none 
>- clear : left | right | both (float속성 해제)

### 웹 요소의 위치 지정하기
>- position : static(고정) | relative(고정, 위치 지정 가능) | absolute(기준이 상위 요소) | fixed(브라우저 창이 기준 위치)
>- left | right | top | bottom : <떨어질 거리 크기>

