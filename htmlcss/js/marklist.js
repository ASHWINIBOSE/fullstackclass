function status(a1, a2, a3, a4, a5, a6) {
    if (a1 == "F" || a2 == "F" || a3 == "F" || a4 == "F" || a5 == "F" || a6 == "F") {
        return "fail"
    } else return "pass"
}

function grade(x, y) {
    var b = (x / y) * 100;
    if (b >= 90) {
        return "A";

    }
    if (90 > b && b >= 75) {
        return "B";
    }
    if (b < 75 && b >= 60) {
        return "C";
    }
    if (b < 60 && b >= 50) {
        return "D";
    }
    if (b < 50 && b >= 30) {
        return "E";
    } else return "F"
}

function getm() {
    document.getElementById("result1").innerHTML = "name: ";
    document.getElementById("result3").innerHTML = "sem: ";
    document.getElementById("result5").innerHTML = "exam code: ";
    document.getElementById("result31").innerHTML = "status: ";
    document.getElementById("result33").innerHTML = "subject: ";
    document.getElementById("result34").innerHTML = "marks obtained: ";
    document.getElementById("result35").innerHTML = "total marks: ";
    document.getElementById("result36").innerHTML = "grade: ";

    var n1 = document.getElementById("text1").value;
    document.getElementById("result2").innerHTML = n1;
    var n2 = document.getElementById("text2").value;
    document.getElementById("result4").innerHTML = n2;
    var n3 = document.getElementById("text3").value;
    document.getElementById("result6").innerHTML = n3;
    var n4 = document.getElementById("text4").value;
    document.getElementById("result7").innerHTML = n4;
    var n5 = parseFloat(document.getElementById("text5").value);
    document.getElementById("result8").innerHTML = n5;
    var n6 = parseFloat(document.getElementById("text6").value);
    document.getElementById("result9").innerHTML = n6;
    var a1 = grade(n5, n6);
    document.getElementById("result10").innerHTML = a1;
    var n7 = document.getElementById("text7").value;
    document.getElementById("result11").innerHTML = n7;
    var n8 = parseFloat(document.getElementById("text8").value);
    document.getElementById("result12").innerHTML = n8;
    var n9 = parseFloat(document.getElementById("text9").value);
    document.getElementById("result13").innerHTML = n9;
    var a2 = grade(n8, n9);
    document.getElementById("result14").innerHTML = a2;
    var n10 = document.getElementById("text10").value;
    document.getElementById("result15").innerHTML = n10;
    var n11 = parseFloat(document.getElementById("text11").value);
    document.getElementById("result16").innerHTML = n11;
    var n12 = parseFloat(document.getElementById("text12").value);
    document.getElementById("result17").innerHTML = n12;
    var a3 = grade(n11, n12);
    document.getElementById("result18").innerHTML = a3;
    var n13 = document.getElementById("text13").value;
    document.getElementById("result19").innerHTML = n13;
    var n14 = parseFloat(document.getElementById("text14").value);
    document.getElementById("result20").innerHTML = n14;
    var n15 = parseFloat(document.getElementById("text15").value);
    document.getElementById("result21").innerHTML = n15;
    var a4 = grade(n14, n15);
    document.getElementById("result22").innerHTML = a4;
    var n16 = document.getElementById("text16").value;
    document.getElementById("result23").innerHTML = n16;
    var n17 = parseFloat(document.getElementById("text17").value);
    document.getElementById("result24").innerHTML = n17;
    var n18 = parseFloat(document.getElementById("text18").value);
    document.getElementById("result25").innerHTML = n18;
    var a5 = grade(n17, n18);
    document.getElementById("result26").innerHTML = a5;
    var n19 = document.getElementById("text19").value;
    document.getElementById("result27").innerHTML = n19;
    var n20 = parseFloat(document.getElementById("text20").value);
    document.getElementById("result28").innerHTML = n20;
    var n21 = parseFloat(document.getElementById("text21").value);
    document.getElementById("result29").innerHTML = n21;
    var a6 = grade(n20, n21);
    document.getElementById("result30").innerHTML = a6;
    var b = status(a1, a2, a3, a4, a5, a6);
    document.getElementById("result32").innerHTML = b;
}