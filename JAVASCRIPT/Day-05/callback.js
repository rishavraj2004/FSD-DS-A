const sum = (a, b) => {
    return a + b;
}

// const res = sum(5, 2);
// console.log("result", res);

function sumWithMsg(clbk, msg) {
    const result = clbk(20, 30);
    const fresult = "HI " + msg + "Your score is: " + result;
    console.log(fresult)
}

sumWithMsg(sum, "MR. Raj")