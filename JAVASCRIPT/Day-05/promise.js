function f1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Hii");
            resolve();
        }, 4000);
    });
}

function f2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("ABES COLLEGE");
            resolve();
        }, 2000);
    });
}

async function main() {
    try {
        await f1();
        await f2();
    } catch (error) {
        console.log("Error");
    }
}

main();