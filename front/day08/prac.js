function apple(){
    let kg = prompt("사과의 무게를 입력해주세요");

    if(kg>=200){
        alert("고급사과");
    }else {
        alert("일반사과");
    }
    
    if(kg%3==0) {
        alert("3의 배수입니다.");
    }else {
        alert("3의 배수가 아닙니다.")
    }
}

function oddeven() {
    let num = prompt("숫자를 입력하세요");

    if(num%2==0) {
        alert("짝수입니다.")
    }else {
        alert("홀수입니다.")
    }
}

function score(){
    let name = prompt("이름을 입력해주세요");
    let kor = prompt("국어점수를 입력해주세요");
    let math = prompt("수학점수를 입력해주세요");

    let avg = (kor+math)/2

    alert(name + "님의 평균 점수는" + avg + "점 입니다.")
}

function maxnum(){
    let num = prompt("숫자를입력해주세요1")
    let num1 = prompt("숫자를입력해주세요2")
    let num2 = prompt("숫자를입력해주세요3")

    if(num>=num1) {
        if(num>=num2) {
            alert("가장 큰 숫자는" + num + "입니다.")
        } else {
            num = num2
            alert("가장 큰 숫자는" + num + "입니다.")
        }
    } else{
        if(num1>=num2) {
            num = num1
            alert("가장 큰 숫자는" + num + "입니다.")
        } else {
            num = num2
            alert("가장 큰 숫자는" + num + "입니다.")
        }
    }
}

function gugu(){
    let num = prompt("몆단을 출력할까요?")

    for(i=1;i<10;i++){
        console.log(num)
    }
}

function hundred(){

    for(i=1;i<=100;i++){
        if(i%3==0){
            
        }else if(i%5==0){

        }else if(i%3==0 && i%5==0){

        }else{

        }
    }
}


function tier() {
    let score = prompt("점수를 입력해주세요");

    if(score>=90){
        alert("A학점입니다.")
    }else if(score>=80){
        alert("B학점입니다")
    }else if(score>=70){
        alert("C학점입니다.")
    }else if(score>=60){
        alert("D학점입니다.")
    }else{
        alert("F학점입니다.")
    }
}


function square(){
    let num = prompt("숫자를 입력해주세요")

    let result = num*num

    alert(num + "의 제곱은" + result + "입니다.")
}

function plus(){
    let num = prompt("숫자를 입력해주세요1")
    let num1 = prompt("숫자를 입력해주세요2")

    let result = num+num1;

    alert(num + "+" + num1 + "=" + result + "입니다.")
}

