function check(user, pass) {
    const username = "Rishav";
    const password = "1234";
    if (user === username && pass === password) {
        console.log("Correct")
    } else {
        console.log("Not Correct");
    }
}

function loginSucc(clbk, msg) {
    const res = clbk("Rishav", "1234");
    const fresult = "HI " + msg
    console.log(fresult)
}

loginSucc(check, "RIshav")


