var jalali_date = function(year, month, day) {
    var date = new Date(year, month, day).toLocaleDateString("fa-IR")
    console.log(date)
}