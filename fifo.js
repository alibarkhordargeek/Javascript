// push function motoghaier ra be avale araye ezafe mi konad va araye ra taghir mi dahad
// baraye moshahedeye taghir "console.log" begirid
var push = function(array, variable) {
    var array2 = [variable]
    for (var i = 0 ; i < array.length ; i ++) {
        array2[i + 1] = array[i]
    }
    var array = array2.map(function(a, b) {
        return array[b] = a
    })
} 
// pull function ba taghir eleman akhar araye ra taghir dade va eleman hazf shode ra chap mi konad
var pull = function(array) {
    console.log(array[array.length - 1])
    array.length = (array.length - 1)
}