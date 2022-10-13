const list = ["pane", "ouva", "late", "riso", "pasta", "coca-cola"];
const myList = document.getElementById("my-list");

let i = 0;
while (i < list.length) {
    let element = `<li>${list[i]}</li>`
    myList.innerHTML += element;
    i++;  
}