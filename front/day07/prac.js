function RSP(){
    let input, cominput;

    while(true){
        input = prompt("입력해주세요: 1.가위, 2.바위, 3.보자기");
        cominput = Math.floor(Math.random()*2 + 1);

        if(input == null){
            alert("취소");
            break;
        } else if(input > 3 || input <= 0){
            alert("잘못된 입력")
            alert("다시 입력해주세요")
        } else {
            if(input!=cominput) {
                if(input==1){
                    if(cominput == 2){ alert("패배") }
                    else{ alert("승리") }
                } else if(input==2){
                    if(cominput == 3){ alert("패배") }
                    else{ alert("승리") }
                } else if(input==3){
                    if(cominput == 1){ alert("패배") }
                    else{ alert("승리") }
                }
                break;
            } else {
                alert("무승부")
                break;
            }
        }
    }
}