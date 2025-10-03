const express = require("express");

const tarefas = [  
  { id: 1, nome: "Estudar middleware", concluida: false },  
  { id: 2, nome: "Praticar Express", concluida: true }  
];

const app = express();

app.use(express.json());

app.use((req, res, next) => {
  const dataHora = new Date().toISOString();
  console.log(`[${dataHora}] ${req.method} ${req.url}`);
  next(); 
});

const tarefasRouter = express.Router();

tarefasRouter.get("/", (req, res) => {
  res.json(tarefas);
});

tarefasRouter.post("/", (req, res) => {
  const novaTarefa = req.body;
  tarefas.push(novaTarefa);
  res.status(201).json(novaTarefa);
});

tarefasRouter.get("/:tarefaId", (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const tarefa = tarefas.find(t => t.id === tarefaId);

  if (!tarefa) {
    return next(new Error("Tarefa não localizada"));
  }

  res.json(tarefa);
});

tarefasRouter.put("/:tarefaId", (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const index = tarefas.findIndex(t => t.id === tarefaId);

  if (index !== -1) {
    tarefas[index] = req.body;
    res.json(tarefas[index]);
  } else {
    return next(new Error("Tarefa não localizada"));
  }
});

tarefasRouter.delete("/:tarefaId", (req, res, next) => {
  const tarefaId = parseInt(req.params.tarefaId);
  const index = tarefas.findIndex(t => t.id === tarefaId);

  if (index !== -1) {
    tarefas.splice(index, 1);
    res.sendStatus(204);
  } else {
    return next(new Error("Tarefa não localizada"));
  }
});

app.use("/tarefas", tarefasRouter);

app.use((err, req, res, next) => {
  res.status(400).json({ error: err.message });
});

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});

module.exports = app;