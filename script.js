// let ClickAudio = new Audio("click.wav");
// let winnerAudio = new Audio("success-1-6297.mp3");
// let ClickCount=1;
// let win = 0;

// function CheckWin(){
//     let BoxTexts = document.getElementsByClassName('boxtext');
//     let WinCheck = [
//         [1,2,3],
//         [4,5,6],
//         [7,8,9],
//         [1,4,5],
//         [2,5,8],
//         [3,6,9],
//         [1,5,9],
//         [3,5,7]
//     ]
//     WinCheck.forEach(e =>{
//         if(BoxTexts[e[0]].innerText===BoxTexts[[1]].innerText&&BoxTexts[e[2]].innerText===BoxTexts[[1]].innerText&&BoxTexts[e[0]].innerText!==" ")
//         {
//             document.querySelector('.game-score').innerText = BoxTexts[e[0]] + " WON!!!"
//         }
//     })
// }

// for (var i = 0; i < 9; i++) {
//     document.querySelectorAll(".box")[i].addEventListener("click", function () {
//         if(ClickCount%2!==0){
//             this.querySelector(".boxtext").innerText = "X";
//             ClickAudio.play();
//            document.querySelector(".info").innerText = "Turn for O";
//         }
//         else{
//             this.querySelector(".boxtext").innerText = "O";
//             ClickAudio.play();
//             document.querySelector(".info").innerText = "Turn for X";
//         }

//         if(ClickCount>4){
//             CheckWin();
//         }
//         ClickCount++;
//     });
// }


        let ClickAudio = new Audio("click.wav");
        let winnerAudio = new Audio("success-1-6297.mp3");
        let ClickCount = 1;
        let win = 0;
        function CheckWin() {
            let BoxTexts = document.getElementsByClassName('boxtext');
            let Winner = [
                [1, 2, 3],
                [4, 5, 6],
                [7, 8, 9],
                [1, 4, 7],
                [2, 5, 8],
                [3, 6, 9],
                [1, 5, 9],
                [3, 5, 7]
            ];
            Winner.forEach(e => {
                if (BoxTexts[e[0]].innerText === BoxTexts[e[1]].innerText && BoxTexts[e[1]].innerText === BoxTexts[e[2]].innerText && BoxTexts[e[0]].innerText !== " ") {
                    document.querySelector('.game-score').innerText = BoxTexts[e[0]].innerText + " WON!!!";
                    win = 1;
                }
            });
        }
        for (var i = 0; i < 9; i++) {
            document.querySelectorAll(".box")[i].addEventListener("click", function () {
                ClickAudio.play();
                if (ClickCount % 2 !== 0) {
                    this.querySelector(".boxtext").innerText = "X";
                    document.querySelector(".info").innerText = "Turn for O";
                } else {
                    this.querySelector(".boxtext").innerText = "O";
                    document.querySelector(".info").innerText = "Turn for X";
                }
                
                if(win===1){
                    CheckWin();
                    console.log("win");
                }
                ClickCount++;
            });
        }