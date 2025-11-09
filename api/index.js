import express from 'express';
import cors from 'cors';
import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Pool } = pkg;
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Pool de conexão com banco de dados
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false
});

// Inicializar banco de dados
async function initializeDatabase() {
  try {
    const client = await pool.connect();
    
    // Criar tabela de candidaturas
    await client.query(`
      CREATE TABLE IF NOT EXISTS candidaturas (
        id SERIAL PRIMARY KEY,
        nome_completo VARCHAR(255) NOT NULL,
        email_profissional VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(20) NOT NULL,
        nome_empresa VARCHAR(255) NOT NULL,
        cidade_estado VARCHAR(255) NOT NULL,
        area_atuacao VARCHAR(255) NOT NULL,
        num_funcionarios INTEGER NOT NULL,
        solucao VARCHAR(255) NOT NULL,
        problema TEXT NOT NULL,
        materiais TEXT,
        num_pessoas INTEGER NOT NULL,
        feedback VARCHAR(255) NOT NULL,
        comentarios TEXT,
        criado_em TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        status VARCHAR(50) DEFAULT 'pendente'
      );
    `);
    
    client.release();
  } catch (error) {
    console.error('Erro ao inicializar banco de dados:', error);
  }
}

// Rota para enviar candidatura
app.post('/api/candidaturas', async (req, res) => {
  try {
    const {
      nome_completo,
      email_profissional,
      whatsapp,
      nome_empresa,
      cidade_estado,
      area_atuacao,
      num_funcionarios,
      solucao,
      problema,
      materiais,
      num_pessoas,
      feedback,
      comentarios
    } = req.body;

    // Validar campos obrigatórios
    if (!nome_completo || !email_profissional || !whatsapp || !nome_empresa) {
      return res.status(400).json({ erro: 'Campos obrigatórios faltando' });
    }

    const result = await pool.query(
      `INSERT INTO candidaturas (
        nome_completo, email_profissional, whatsapp, nome_empresa,
        cidade_estado, area_atuacao, num_funcionarios, solucao,
        problema, materiais, num_pessoas, feedback, comentarios
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)
      RETURNING id, criado_em`,
      [
        nome_completo, email_profissional, whatsapp, nome_empresa,
        cidade_estado, area_atuacao, num_funcionarios, solucao,
        problema, materiais, num_pessoas, feedback, comentarios
      ]
    );

    res.status(201).json({
      mensagem: 'Candidatura recebida com sucesso!',
      id: result.rows[0].id,
      criado_em: result.rows[0].criado_em
    });
  } catch (error) {
    console.error('Erro ao salvar candidatura:', error);
    res.status(500).json({ erro: 'Erro ao processar candidatura' });
  }
});

// Rota para obter candidaturas (protegida por senha)
app.get('/api/candidaturas', async (req, res) => {
  try {
    const { senha } = req.query;

    // Verificar senha
    if (!senha || senha !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ erro: 'Acesso negado' });
    }

    const result = await pool.query(
      'SELECT * FROM candidaturas ORDER BY criado_em DESC'
    );

    res.json({
      total: result.rows.length,
      candidaturas: result.rows
    });
  } catch (error) {
    console.error('Erro ao buscar candidaturas:', error);
    res.status(500).json({ erro: 'Erro ao buscar candidaturas' });
  }
});

// Rota para atualizar status de candidatura
app.patch('/api/candidaturas/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { status, senha } = req.body;

    // Verificar senha
    if (!senha || senha !== process.env.ADMIN_PASSWORD) {
      return res.status(401).json({ erro: 'Acesso negado' });
    }

    const result = await pool.query(
      'UPDATE candidaturas SET status = $1 WHERE id = $2 RETURNING *',
      [status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ erro: 'Candidatura não encontrada' });
    }

    res.json({
      mensagem: 'Status atualizado com sucesso!',
      candidatura: result.rows[0]
    });
  } catch (error) {
    console.error('Erro ao atualizar candidatura:', error);
    res.status(500).json({ erro: 'Erro ao atualizar candidatura' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Inicializar
initializeDatabase();

export default app;
