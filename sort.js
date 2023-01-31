// bubble sort = sorting numbers algorithm in js
// 'var araye' ra besazid va dar tabe gharar dahid
// adad ra az koochak be bozorg moratab mi konad
var bubble_sort = function(array) {
    console.log("your last array was: ", array)
    for (var i = 0 ; i < array.length ; i ++) {
        for (var j = 0 ; j < array.length ; j ++) {
            if (array[i] < array[j]) {
                var x = array[i]
                array[i] = array[j]
                array[j] = x
            }
        }
    }
    console.log(array)
}
// baraye didane taghire araye console.log begirid