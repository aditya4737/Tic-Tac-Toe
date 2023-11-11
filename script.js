let ClickCount=1;
for (var i = 0; i < 9; i++) {
    document.querySelectorAll(".box")[i].addEventListener("click", function () {
        if(ClickCount%2!==0){
            this.querySelector(".boxtext").innerHTML = "X";
        }
        else{
            this.querySelector(".boxtext").innerHTML = "O";
        }
        ClickCount++;
    });
}
