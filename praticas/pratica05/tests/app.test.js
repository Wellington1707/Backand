const request = require('supertest');
const app = require('../app');

// Bloco que agrupa todos os testes da API de Tarefas
describe('API de Tarefas - Testes de Integração', () => {
  let tarefaId; // Variável para armazenar o ID da tarefa criada nos testes

  // Teste da rota GET para listar todas as tarefas
  it('GET /tarefas deve retornar status 200 e um array JSON', async () => {
    const response = await request(app).get('/tarefas');
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
    expect(Array.isArray(response.body)).toBe(true);
  });

  // Teste da rota POST para criar uma nova tarefa
  it('POST /tarefas deve criar uma tarefa e retornar status 201 com o objeto criado', async () => {
    const response = await request(app)
      .post('/tarefas')
      .send({ nome: "Estudar Node", concluida: false });

    expect(response.status).toBe(201);
    expect(response.type).toMatch(/json/);
    expect(response.body).toHaveProperty('id');
    expect(response.body.nome).toBe("Estudar Node");

    tarefaId = response.body.id; // Salva o ID para usar nos testes seguintes
  });

  // Teste da rota GET para buscar uma tarefa específica pelo ID
  it('GET /tarefas/:id deve retornar a tarefa correta com status 200', async () => {
    const response = await request(app).get(`/tarefas/${tarefaId}`);
    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
    expect(response.body.id).toBe(tarefaId);
  });

  // Teste para um ID que não existe (deve retornar 404)
  it('GET /tarefas/1 deve retornar status 404 (Tarefa não encontrada)', async () => {
    const response = await request(app).get('/tarefas/1');
    expect(response.status).toBe(404);
  });

  // Teste da rota PUT para atualizar uma tarefa
  it('PUT /tarefas/:id deve atualizar a tarefa e retornar status 200 com o objeto atualizado', async () => {
    const response = await request(app)
      .put(`/tarefas/${tarefaId}`)
      .send({ nome: "Estudar Node e Express", concluida: true });

    expect(response.status).toBe(200);
    expect(response.type).toMatch(/json/);
    expect(response.body.concluida).toBe(true);
  });

  // Teste de atualização para um ID que não existe
  it('PUT /tarefas/1 deve retornar status 404 (Tarefa não encontrada)', async () => {
    const response = await request(app)
      .put('/tarefas/1')
      .send({ nome: "Inexistente", concluida: true });
    expect(response.status).toBe(404);
  });

  // Teste da rota DELETE para remover uma tarefa
  it('DELETE /tarefas/:id deve remover a tarefa e retornar status 204', async () => {
    const response = await request(app).delete(`/tarefas/${tarefaId}`);
    expect(response.status).toBe(204);
  });

  // Teste de remoção para um ID que não existe
  it('DELETE /tarefas/1 deve retornar status 404 (Tarefa não encontrada)', async () => {
    const response = await request(app).delete('/tarefas/1');
    expect(response.status).toBe(404);
  });
});
