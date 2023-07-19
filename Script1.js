const inputBox = document.getElementById('inputBox');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');

let editYToDo = null;

const addToDo = () => {
    const inputText = inputBox.value.trim();
    if (inputText.length <= 0) {
        alert("You must write something in your to do");
        return false;
    }

    if (addBtn.value === "Edit") {
        editToDo.target.previousElementSibling.innerHTML = innerText;
        addBtn.value = "Add";
        inputBox.value = " ";
    }
    else {
        //creating p tag
        const li = document.createElement("li");
        const p = document.createElement("p");
        p.innerHTML = inputText;
        li.appendChild(p);

        //creating Edit Btn
        const editBtn = document.createElement("button");
        editBtn.innerText = "Edit";
        editBtn.classList.add("btn");
        li.appendChild(editBtn);

        //creating Delete Btn
        const deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Remove";
        deleteBtn.classList.add("btn");
        li.appendChild(deleteBtn);

        todoList.appendChild(li);
        inputBox.value = " ";
    }
}

const updateToDo = (e) => {
    // console.log(e.target.innerHTML);
    if (e.target.innerHTML === "Remove") {
        todoList.removeChild(e.target.parentElement);
    }

    if (e.target.innerHTML === "Edit") {
        inputBox.value = e.target.previousElemenntSibling.innerHTML;
        inputBox.focus();
        addBtn.value = "Edit";
    }
}
addBtn.addEventListener('click', addToDo);
todoList.addEventListener('click', updateToDo);