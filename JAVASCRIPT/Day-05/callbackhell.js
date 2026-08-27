function brush(callback) {
    console.log("1. Brushing");
    callback();
}

function eat(callback) {
    console.log("1. eat");
    callback();
}

function go(callback) {
    console.log("1. go");
    callback();
}


brush(function () {
    eat(function () {
        go(function () {
            console.log("READY TO GO")
        })
    })
})