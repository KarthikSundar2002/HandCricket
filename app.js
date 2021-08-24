let UserScore = 0;
if(sessionStorage.getItem("UserScore") != null){
    UserScore = sessionStorage.getItem("UserScore");
}
let CompScore = 0;
if(sessionStorage.getItem("CompScore") != null){
    CompScore = sessionStorage.getItem("CompScore");
}

let UserChoice = sessionStorage.getItem("choice");
let ScoreCard = document.getElementById("ScoreCard");
let Result = document.getElementById("Result");

console.log(UserChoice);
if(UserChoice == null){
    document.getElementById("bat").addEventListener("click",()=>{
        window.location.href="./batting.html"

        sessionStorage.setItem("choice","bat");
    });
    document.getElementById("bowl").addEventListener("click",()=>{
        window.location.href="./bowling.html"

        sessionStorage.setItem("choice","bowl");
    });
}


if (UserChoice != null) {
    for (let i = 1; i <= 6; i++) {
        let button = document.getElementById(`${i}`);
        button.addEventListener("click",()=>{
            let CompNum = Math.floor(Math.random() * 6 + 1);
            let userNum = button.getAttribute('data-runs');
            if(window.location.href.indexOf("batting") != -1){
                console.log("batting");
                if (CompNum == userNum) {
                    ScoreCard.innerText = "You are out :( ... you scored " + UserScore;
                    if (UserChoice == "bat") {
                        sessionStorage.setItem("UserScore",UserScore);
                        window.location.href = "./bowling.html";
                    }else{
                        if (CompScore > UserScore) {
                            Result.innerText = "As expected I won...I scored " + CompScore + " while you scored " + UserScore;
                        }else if (CompScore < UserScore){
                            Result.innerText = "You are amazing! Congrats, you scored " + UserScore + " while I did " + CompScore;
                        }else if(CompScore == UserScore){
                            Result.innerText = "That was an amazing match! We both scored " + UserScore;
                        }
                        sessionStorage.removeItem("choice");
                    }
    
                } else {
                    ScoreCard.innerText = "I chose " + CompNum +" while you chose " + userNum;
                    UserScore += parseInt(userNum);
    

                }
                document.getElementById("UserScore").innerText = "User Score " + UserScore;
                document.getElementById("CompScore").innerText = "Computer Score " + CompScore;
            }else if(window.location.href.indexOf("bowling") != -1){
                if (CompNum == userNum) {
                    ScoreCard.innerText = "Nice ball! I am out ..I scored" + CompScore;

                    if (UserChoice == "bowl") {
                        sessionStorage.setItem("CompScore",CompScore);
                        window.location.href = "./batting.html";
                    }else{
                        if (CompScore > UserScore) {
                            Result.innerText = "As expected I won...I scored " + CompScore + " while you scored " + UserScore;
                        }else if (CompScore < UserScore){
                            Result.innerText = "You are amazing! Congrats, you scored " + UserScore + " while I did " + CompScore;
                        }else if(CompScore == UserScore){
                            Result.innerText = "That was an amazing match! We both scored " + UserScore;
                        }
                    }
                    sessionStorage.removeItem("choice");
                } else {
                    ScoreCard.innerText = "I chose " + CompNum +" while you chose " + userNum;
                    CompScore += parseInt(CompNum);
                }
                document.getElementById("UserScore").innerText = "User Score " + UserScore;
                document.getElementById("CompScore").innerText = "Computer Score " + CompScore;
            }
    
        }
        )
    }
}


