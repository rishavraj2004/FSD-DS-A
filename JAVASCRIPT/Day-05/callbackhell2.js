function test1(cb) {
    setTimeout(() => {
        console.log("TASK1");
        cb();
    }, 4000)
}

function test2(cb) {
    setTimeout(() => {
        console.log("TASK2");
        cb();
    }, 2000)
}

function test3(cb) {
    setTimeout(() => {
        console.log("TASK3");
        cb();
    }, 2500)
}
function test4(cb) {
    setTimeout(() => {
        console.log("TASK4");
        cb();
    }, 3500)
}
function test5(cb) {
    setTimeout(() => {
        console.log("TASK5");
        cb();
    }, 4500)
}


test1(() => {
    test2(() => {
        test3(() => {
            test4(() => {
                test5();
            })
        });
    });
})