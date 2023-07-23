const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');
const buttonRemoveCompleted = document.getElementById('remover-finalizados');
const buttonSaveTasks = document.getElementById('salvar-tarefas');

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

loadSavedTasks();
