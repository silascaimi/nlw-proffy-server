import express from 'express';
import routes from './routes';

const app = express();

app.use(express.json());
app.use(routes);

// GET: Buscar ou listar uma informação
// POST: Criar alguma nova informação
// PUT: Atualizar uma informação existente
// DELETE: Deletar uma informação existente

// Corpo: Request Body: Dados para ciração ou atualização de um registro
// Route Params : Identificar qual recurso quero atualizar ou deletar
// Query Params: Paginação, filtro, ordenação

app.listen(3333);
