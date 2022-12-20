const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');
const buttonClear = document.getElementById('apaga-tudo');

buttonAdd.addEventListener('click', () => {
  const liList = document.createElement('li');
  liList.classList = 'item-list';
  liList.innerHTML = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
});

buttonClear.addEventListener('click', () => {
  olList.innerHTML = '';
});

olList.addEventListener('click', ({ target }) => {
  if (target.tagName === 'LI') {
    target.classList.toggle('done');
  }
});

olList.addEventListener('dblclick', ({ target }) => {
  if (target.tagName === 'LI') {
    target.classList.toggle('completed');
  }
});
