function my() {
    var a = document.getElementById("menuo");
    var b = document.getElementById("spa");
    // if (a.style.display == "block") {
    if (a.style.display == "flex") {
        a.style.display = "none";
        document.getElementById("spa").innerHTML = "&#9776";
        // a.style.backgroundColor = "green";
    }
    else {
        // a.style.display = "block";
        a.style.display = "flex";
        document.getElementById("spa").innerHTML = "&#10006";
        // a.style.backgroundColor = "red";
    }
}