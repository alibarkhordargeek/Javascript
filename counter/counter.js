var count = 120
var counter;

var start = function() {
    counter = setInterval(function() {
        count -= 1
        var time = Math.floor(count / 60) + ":" + count % 60
        document.getElementById("counter").innerHTML = time
        document.getElementsByClassName("start")[0].disabled = true
        document.getElementsByClassName("pause")[0].disabled = false
        console.log(time)
    }, 1000)
}

var pause = function() {
    document.getElementsByClassName("pause")[0].disabled = true
    document.getElementsByClassName("start")[0].disabled = false
    clearInterval(counter)
}

var reset = function() {
    clearInterval(counter)
    var set = "2:0"
    count = 120
    document.getElementsByClassName("pause")[0].disabled = true
    document.getElementsByClassName("start")[0].disabled = false
    document.getElementById("counter").innerHTML = set
}