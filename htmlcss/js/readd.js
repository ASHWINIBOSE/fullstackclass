var movie = Array();
var i = 0;

function getname() {
    var moviename = document.getElementById("film").value;
    movie[i] = moviename;
    i++;
    var res = "";
    for (var j = 0; j < movie.length; j++) {

        res + = movie[j] + "< br >"
    }
    document.getElementById("result").innerHTML = res;
}