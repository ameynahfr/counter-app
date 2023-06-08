let count = 0
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")


function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

function reset() {
    countEl.textContent = 0
    saveEl.textContent = "Previous Entries: "
}

console.log("Let's count people on the subway!")
