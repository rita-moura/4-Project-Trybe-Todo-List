const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');
const buttonMoveUp = document.getElementById('mover-cima'); // Novo botão
const buttonMoveDown = document.getElementById('mover-baixo'); // Novo botão
const buttonRemoveSelecteds = document.getElementById('remover-selecionado');

let selectedItem = null;

function addTaskToList(taskText) {
  const liList = document.createElement('li');
  liList.classList = 'item-list';
  liList.innerHTML = taskText;
  olList.appendChild(liList);
}

function saveTasks() {
  const tasks = olList.innerHTML;
  localStorage.setItem('tasks', tasks);
}

function loadSavedTasks() {
  const savedTasks = localStorage.getItem('tasks');
  if (savedTasks) {
    olList.innerHTML = savedTasks;
  }
}

function removeSelectedItem() {
  if (selectedItem) {
    olList.removeChild(selectedItem);
    selectedItem = null;
    saveTasks();
  }
}

function moveItemUp() {
  if (!selectedItem || selectedItem === olList.firstElementChild) {
    return; // Caso especial: não há item selecionado ou o item selecionado é o primeiro da lista
  }

  const prevItem = selectedItem.previousElementSibling;
  olList.insertBefore(selectedItem, prevItem); // Insere o item selecionado antes do item anterior
}

function moveItemDown() {
  if (!selectedItem || selectedItem === olList.lastElementChild) {
    return; // Caso especial: não há item selecionado ou o item selecionado é o último da lista
  }

  const nextItem = selectedItem.nextElementSibling;
  olList.insertBefore(nextItem, selectedItem); // Insere o próximo item antes do item selecionado
}

buttonAdd.addEventListener('click', () => {
  if (inputAdd.value.trim() !== '') {
    addTaskToList(inputAdd.value);
    inputAdd.value = '';
    saveTasks();
  }
});

buttonClear.addEventListener('click', () => {
  olList.innerText = '';
  selectedItem = null;
  saveTasks();
});

olList.addEventListener('click', ({ target }) => {
  if (target.tagName === 'LI') {
    if (selectedItem !== null) {
      selectedItem.classList.remove('done');
    }
    selectedItem = target;
    selectedItem.classList.toggle('done');
  }
});

olList.addEventListener('dblclick', ({ target }) => {
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});

buttonRemoveCompleted.addEventListener('click', () => {
  const completedItems = olList.querySelectorAll('.completed');
  completedItems.forEach((item) => {
    olList.removeChild(item);
  });
  saveTasks();
});

buttonSaveTasks.addEventListener('click', () => {
  saveTasks();
});

buttonMoveUp.addEventListener('click', () => {
  moveItemUp();
  saveTasks();
});

buttonMoveDown.addEventListener('click', () => {
  moveItemDown();
  saveTasks();
});

buttonRemoveSelecteds.addEventListener('click', () => {
  removeSelectedItem(); // Chama a função para remover todos os itens selecionados
});

loadSavedTasks();
