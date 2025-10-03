const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

// Rota para listar todas as tarefas
router.get('/', tarefaController.listar);

// Rota para criar uma nova tarefa
router.post('/', tarefaController.criar);

// Rota para buscar uma tarefa por ID
router.get('/:tarefaId', tarefaController.buscarPeloId);

// Rota para atualizar uma tarefa por ID
router.put('/:tarefaId', tarefaController.atualizar);

// Rota para remover uma tarefa por ID
router.delete('/:tarefaId', tarefaController.remover);

module.exports = router;
