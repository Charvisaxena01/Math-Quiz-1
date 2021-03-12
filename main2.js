user1 = "player1";
user2 = "player2";
player1_score = 0;
player2_score = 0;

function send() {
    num1 = document.getElementById("number1").value;
    num2 = document.getElementById("number2").value;
    actual_ans = parseInt(num1) * parseInt(num2);
    document.getElementById("output").innerHTML = "<h3>" +
        num1 + " " + "X" + " " + num2 + "</h3>" + "<br>" + "Answer:" + " " + "<input id='ans'>" + "<br>" + "<br>" +
        "<button onclick='check()' class='btn btn-success'>" + "Check" + "</button>";
}

function display() {
    no1 = localStorage.getItem("user1");
    no2 = localStorage.getItem("user2");
    document.getElementById("player_name1").innerHTML = no1;
    document.getElementById("player_name2").innerHTML = no2;
    document.getElementById("score1").innerHTML = "0";
    document.getElementById("score2").innerHTML = "0";

    document.getElementById("question").innerHTML = "Question Turn -" + no1;
    document.getElementById("answer").innerHTML = "Answer Turn -" + no2;
}
question_turn = "player1";
answer_turn = "player2";

function check() {
    answer = document.getElementById("ans").value;
    if (answer == actual_ans) {
        if (answer_turn == "player1") {
            player1_score = player1_score + 1;
            document.getElementById("score1").innerHTML = player1_score;
        } else {
            player2_score = player2_score + 1;
            document.getElementById("score2").innerHTML = player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("question").innerHTML == "Question Turn -" + no2;

    } else {
        question_turn = "player1";
        document.getElementById("question").innerHTML = "Question Turn -" + no1;
    }
    if (answer_turn == "player1") {
        answer_turn = "player2";
        document.getElementById("answer").innerHTML = "Answer Turn -" + no2;

    } else {
        answer_turn = "player1";
        document.getElementById("answer").innerHTML = "Answer Turn -" + no1;
    }
    document.getElementById("output").innerHTML = "";

}