
function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hii")
        }, 4000)
    })
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ABES COLLEGE")
        }, 2000)
    })
}

f1().then(f2).catch((error) => {
    console.log("Error")
})