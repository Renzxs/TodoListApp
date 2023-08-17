const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

document.getElementById("add").addEventListener("click", function() {
    if(inputBox.value === "") {
        alert("Please enter something");
    } else {
        listContainer.innerHTML += `
            <li>${inputBox.value}<span>\u00d7</span></li>
        `; 
    }
    inputBox.value = "";
    saveToLocalStorage();
});

listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveToLocalStorage();
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveToLocalStorage();
    }
});

function saveToLocalStorage() {
    localStorage.setItem("todo", listContainer.innerHTML);
}

function showLocalStorage() {
    listContainer.innerHTML = localStorage.getItem("todo");
}

showLocalStorage();