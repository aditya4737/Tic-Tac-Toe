let ClickAudio = new Audio("click.wav");
let winnerAudio = new Audio("success-1-6297.mp3");
let ClickCount=1;


for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        if(ClickCount%2!==0){
            this.querySelector(".boxtext").innerHTML = "X";
            ClickAudio.play();
        }
        else{
            this.querySelector(".boxtext").innerHTML = "O";
            ClickAudio.play();
        }
        ClickCount++;
    });
}

