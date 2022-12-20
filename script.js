const inputAdd = document.getElementById('texto-tarefa');
const buttonAdd = document.getElementById('criar-tarefa');
const olList = document.getElementById('lista-tarefas');

buttonAdd.addEventListener('click', () => {
  const valueInput = inputAdd.value;
  const liList = document.createElement('li');
  liList.innerHTML = valueInput;
  olList.appendChild(liList);
  inputAdd.value = '';
});
