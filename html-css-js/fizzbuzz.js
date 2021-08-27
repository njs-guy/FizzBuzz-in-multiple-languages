function printFB(z) {
    let htmlCode = "<p>" + z + "</p>";
    document.getElementById("output").insertAdjacentHTML("beforeend", htmlCode);
}

function fizzbuzz() {
    let fblist = [];
    for (let i = 1; i < 101; i++) {
        if(i % 3 === 0 && i % 5 === 0) {
            fblist.push("FizzBuzz");
        } else if (i % 3 === 0) {
            fblist.push("Fizz")
        } else if (i % 5 === 0) {
            fblist.push("Buzz")
        } else {
            fblist.push(String(i));
        }
    }

    //pushes each entry into a list, and then joins them into one string
    printFB(fblist.join(" , "))
}

fizzbuzz();