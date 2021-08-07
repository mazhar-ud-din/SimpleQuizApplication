// function check() {
//     var score = 0;
//     var a = document.getElementById('q1-a')
//     var b = document.getElementById('q1-b')
//     var c = document.getElementById('q1-c')
//     var d = document.getElementById('q1-d')
//     if (d.checked == true) {
//         score++
//         alert("Q.1 Your Answer Is Correct")
//     } else {
//         alert("Q.1 Your Answer Is wrong")
//     }

//     var a = document.getElementById('q2-a')
//     var b = document.getElementById('q2-b')
//     var c = document.getElementById('q2-c')
//     var d = document.getElementById('q2-d')
//     if (c.checked == true) {
//         score++
//         alert("Q.2 Your Answer Is Correct")
//     } else {
//         alert("Q.2 Your Answer Is wrong")
//     }


//     var a = document.getElementById('q3-a')
//     var b = document.getElementById('q3-b')
//     var c = document.getElementById('q3-c')
//     var d = document.getElementById('q3-d')
//     if (d.checked == true) {
//         score++
//         alert("Q.3 Your Answer Is Correct")
//     } else {
//         alert("Q.3 Your Answer Is wrong")
//     }

//     var a = document.getElementById('q4-a')
//     var b = document.getElementById('q4-b')
//     var c = document.getElementById('q4-c')
//     var d = document.getElementById('q4-d')
//     if (a.checked == true) {
//         score++
//         alert("Q.4 Your Answer Is Correct")
//     } else {
//         alert("Q.4 Your Answer Is wrong")
//     }

//     var a = document.getElementById('q5-a')
//     var b = document.getElementById('q5-b')
//     var c = document.getElementById('q5-c')
//     var d = document.getElementById('q5-d')
//     if (b.checked == true) {
//         score++
//         alert("Q.5 Your Answer Is Correct")
//     } else {
//         alert("Q.5 Your Answer Is wrong")
//     }
//     alert("Your Total Score Is" + score + " " + "/5")
// }

function check() {
    var score = 0;
    var a = document.getElementById("q1-a")
    var b = document.getElementById("q1-b")
    var c = document.getElementById("q1-c")
    var d = document.getElementById("q1-d")

    if (a.checked === true) {
        score++
        alert("Q1 is Correct Answer")
    } else {
        alert("Q1 is Wrong Answer")
    }

    var a = document.getElementById("q2-a")
    var b = document.getElementById("q2-b")
    var c = document.getElementById("q2-c")
    var d = document.getElementById("q2-d")

    if (b.checked === true) {
        score++
        alert("Q2 is Correct Answer")
    } else {
        alert("Q2 is Wrong Answer")
    }
    var a = document.getElementById("q3-a")
    var b = document.getElementById("q3-b")
    var c = document.getElementById("q3-c")
    var d = document.getElementById("q3-d")

    if (d.checked === true) {
        score++
        alert("Q3 is Correct Answer")
    } else {
        alert("Q3 is Wrong Answer")
    }
    alert("You gain score is " + score + " " + "Out of 3")
}