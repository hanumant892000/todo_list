const createListFun = (e) => {
  e.preventDefault();
  let todolistVal = document.querySelector("#todolist").value;
  let idVal = Math.floor(Math.random() * 1000000 + 1000000);

  let divTag = document.createElement("div");
  // divTag.classList.add('list-items')
  divTag.className = "list-items";
  divTag.innerHTML = `<div class="check-items">
            <input onclick="completeList(this)" type="checkbox" id=${idVal} />
            <label for=${idVal}>${todolistVal}</label>
          </div>
          <i class="fa-solid fa-xmark" onclick="deleteList(this)"></i>`;

  let listContainer = document.querySelector(".list-container");
  listContainer.appendChild(divTag);
};

let todoForm = document.querySelector(".todo-form");

todoForm.addEventListener("submit", createListFun);

function deleteList(elements) {
  elements.parentElement.remove();
}

function completeList(elements) {
  console.log(elements)
  if (elements.checked) {
    elements.nextElementSibling.style.color = "gray";
    elements.nextElementSibling.style.textDecoration = "line-through";
  }
  else{
    elements.nextElementSibling.style.color = "black";
    elements.nextElementSibling.style.textDecoration = "none"; 
  }
}
