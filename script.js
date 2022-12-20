const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', () => {
  const liList = document.createElement('li');
  liList.classList = 'item-list';
  liList.innerHTML = inputAdd.value;
  olList.appendChild(liList);
  inputAdd.value = '';
});

olList.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    event.target.classList.toggle('done');
  }
}, false);
