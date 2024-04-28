const inputbox = document.getElementById("input-box");
const listcantener = document.getElementById("list-container");

function addTask(){
    if(inputbox.value === ''){
        alert("You must write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listcantener.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
        span.addEventListener("click", function(){
            listcantener.removeChild(li);
        })
    }
    inputbox.value = "";
    saveData();
}

listcantener.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("list", listcantener.innerHTML);
}

function showList(){
    listcantener.innerHTML = localStorage.getItem("list");
}
showList();