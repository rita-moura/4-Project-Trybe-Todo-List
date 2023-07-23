const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');
let selectedItem = null;

buttonAdd.addEventListener('click', () => {
  const liList = document.createElement('li');
  liList.classList = 'item-list';
  liList.innerHTML = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
});

buttonClear.addEventListener('click', () => {
  olList.innerText = '';
});
console.log(buttonClear);

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
