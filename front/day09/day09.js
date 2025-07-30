function even(){
    let total = 0;

    for(i=1; i<=10; i++){
        if(i%2==0){
            total += i;
            document.writeln(i+"------"+ total +"<br>");
        }
    }
}


function lotto(){
    let num = 0;
    let lotto = new Array(6)

    for(i=0;i<6;i++){
        num = Math.floor(Math.random()*45+1);
        lotto[i] = num;
    }

    let text = document.getElementById("result");
    text.innerHTML = "이번주 로또 번호는" + lotto + "입니다"
}