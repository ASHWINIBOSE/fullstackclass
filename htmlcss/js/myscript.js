function addnumbers(x, y) {
    var z = x + y;
    return z;
}

function subnumbers(x, y) {
    var z = x - y;
    return z;
}

function mulnumbers(x, y) {
    var z = x * y;
    return z;
}


function divnumbers(x, y) {
    var z = x / y;
    return z;
}

function getcalc() {
    var n1 = parseFloat(document.getElementById("name1").value);

    var n2 = parseFloat(document.getElementById("name2").value);

    var n3 = document.getElementById("oper").value;
    if (n3 == "add") {
        var n4 = addnumbers(n1, n2);
        document.getElementById("result").innerHTML = "<b>" + n4 + "</b>";

    } else {
        if (n3 == "sub") {
            var n4 = subnumbers(n1, n2);
            document.getElementById("result").innerHTML = "<b>" + n4;
        }
    } else {
        if (n3 == "mul") {
            var n4 = mulnumbers(n1, n2);
            document.getElementById("result").innerHTML = "<b>" + n4;
        }

    } else {
        if (n3 == "div") {
            var n4 = divnumbers(n1, n2);
            document.getElementById("result").innerHTML = "<b>" + n4;
        }
    }