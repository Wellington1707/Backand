const tarefaModel = require('../models/tarefaModel');

// Lista todas as tarefas
const listar = (req, res) => {
  const tarefas = tarefaModel.listar();
  res.json(tarefas);
};

// Busca uma tarefa pelo ID
const buscarPeloId = (req, res) => {
  const { tarefaId } = req.params;
  const tarefa = tarefaModel.buscarPeloId(tarefaId);
  if (!tarefa) {
    return res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
  res.json(tarefa);
};

// Cria uma nova tarefa
const criar = (req, res) => {
  const novaTarefa = tarefaModel.criar(req.body);
  res.status(201).json(novaTarefa);
};

// Atualiza uma tarefa existente
const atualizar = (req, res) => {
  const { tarefaId } = req.params;
  const tarefaAtualizada = tarefaModel.atualizar(tarefaId, req.body);
  if (!tarefaAtualizada) {
    return res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
  res.json(tarefaAtualizada);
};

// Remove uma tarefa
const remover = (req, res) => {
  const { tarefaId } = req.params;
  const tarefaRemovida = tarefaModel.remover(tarefaId);
  if (!tarefaRemovida) {
    return res.status(404).json({ msg: 'Tarefa não encontrada' });
  }
  res.status(204).send();
};

module.exports = {
  listar,
  buscarPeloId,
  criar,
  atualizar,
  remover,
};
