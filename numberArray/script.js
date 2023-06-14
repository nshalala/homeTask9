let nums_arr = [1, 2, 3];
let n;

while (!n) {
    n = +prompt("How many times do you repeat the process?", 9);
}

add();



function add() {
    if (isValid(n)) {
        for (let i = 0; i < n; i++) {
            let num = nums_arr.slice(nums_arr.length - 3).reduce((acc, item) => acc + item, 0);
            nums_arr.push(num);
        }
        console.log(nums_arr);
    }
}
function isValid(n) {
    if (n > 0) {
        return true;
    }

    alert("Enter a valid number");
    return false;
}
