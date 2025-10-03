// Simula um banco de dados em memória
const tarefas = [];

// Retorna todas as tarefas
const listar = () => {
  return tarefas;
};

// Cria uma nova tarefa com ID aleatório e a adiciona ao array
const criar = (tarefa) => {
  const novaTarefa = {
    id: Math.random().toString(36).substr(2, 9), // Gera ID aleatório
    ...tarefa
  };
  tarefas.push(novaTarefa);
  return novaTarefa;
};

// Busca uma tarefa pelo seu ID
const buscarPeloId = (tarefaId) => {
  return tarefas.find(t => t.id === tarefaId);
};

// Encontra e atualiza uma tarefa
const atualizar = (tarefaId, novosDados) => {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) {
    return null; // Retorna null se não encontrar
  }
  // Mantém o ID original e atualiza o resto
  tarefas[index] = { ...tarefas[index], ...novosDados };
  return tarefas[index];
};

// Encontra e remove uma tarefa
const remover = (tarefaId) => {
  const index = tarefas.findIndex(t => t.id === tarefaId);
  if (index === -1) {
    return null; // Retorna null se não encontrar
  }
  const [tarefaRemovida] = tarefas.splice(index, 1);
  return tarefaRemovida;
};

module.exports = {
  listar,
  criar,
  buscarPeloId,
  atualizar,
  remover
};
