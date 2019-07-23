let todoList = document.querySelector('.list');
let fieldInput = document.querySelector('.action');
let notification = document.querySelector('.notification');

function createItem(todo, index) {
  let html = `
  <li draggable="true">
  <input type="checkbox" name="list_item" id="checkbox-${index}">
  <label for="checkbox-${index}">${todo}</label>
  <i class="material-icons edit">edit</i>
  <i class="material-icons delete">delete</i>
</li>
  `;
  todoList.innerHTML += html;
}

let addForm = document.querySelector('.search');
let addButton = document.querySelector('.add_button');
let listItems = document.getElementsByTagName('li');
addForm.addEventListener('submit', function (event) {
  event.preventDefault();
  let todo = addForm.search.value.trim();
  if (todo.length) {
    addButton.setAttribute('disabled', '');
    addButton.style.backgroundColor = '#C8D0D8';
    document.getElementsByTagName('li');
    let index = document.getElementsByTagName('li').length;
    createItem(todo, index);
    addForm.reset();
  }

  if (listItems.length >= 10) {
    fieldInput.setAttribute('disabled', 'true');
    addButton.setAttribute('disabled', '');
    addButton.style.backgroundColor = '#C8D0D8';
    notification.style.opacity = '1';
  }
});

todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    event.target.parentElement.remove();
  }

  if (listItems.length < 10) {
    fieldInput.removeAttribute('disabled', '');
    notification.style.opacity = '0';
  }
});

todoList.addEventListener('click', function (event) {
  if (event.target.className === 'material-icons edit') {
    let lug = event.target.parentElement;
    lug.removeAttribute('draggable', false);
    let todo = event.target.parentElement.children[1].textContent;
    let html = `
      <input type="text" value="${todo}" class="edit">
      <i class="material-icons save">save</i>
    `;
    event.target.parentNode.innerHTML = html;
    let save = document.querySelector('.save');
    save.style.marginRight = '420px';
  }
})

todoList.addEventListener('click', function (event) {
  if (event.target.className === 'material-icons save') {
    let todo = document.querySelector('.edit').value;
    let id = event.target.parentNode.parentElement.children.length;
    let lug = event.target.parentElement;
    lug.setAttribute('draggable', true);

    let html = `
      <input type="checkbox" name="list_item" id="new-checkbox${id}" class="checked">
      <label for="checkbox-${id}">${todo}</label>
      <i class="material-icons edit">edit</i>
    <i class="material-icons delete">delete</i>
    `;
    event.target.parentElement.innerHTML = html;
  }
})

fieldInput.addEventListener('focus', function () {
  addButton.removeAttribute('disabled', '');
  addButton.style.backgroundColor = '#5eb1f5';
})

let checkbox = document.querySelectorAll('.checkbox');

function check() {
  if (checkbox.checked === true) {
    checkbox.setAttribute('checked', '');
  }
}
check();