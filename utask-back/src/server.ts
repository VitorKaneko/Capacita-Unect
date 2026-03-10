import Fastify from 'fastify'
import cors from '@fastify/cors'
import { prisma } from './lib/prisma'

const app = Fastify()

app.register(cors, {
  origin: '*', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
});

app.post('/users', async (request, reply) => {
  const { email, name } = request.body as any
  try {
    const user = await prisma.user.create({ data: { email, name } })
    return reply.status(201).send(user)
  } catch (error) {
    return reply.status(400).send({ error: 'Usuário já existe ou dados inválidos' })
  }
})


app.post('/tasks', async (request, reply) => {
  const { title, description, userId } = request.body as { 
    title: string; 
    description?: string; 
    userId: string 
  };

  try {
    const task = await prisma.task.create({
      data: {
        title,
        description,
        userId, 
      },
    });
    return reply.status(201).send(task);
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ error: "Erro ao criar tarefa. O userId é válido?" });
  }
});

app.get('/tasks', async (request, reply) => {
  try {
    const tasks = await prisma.task.findMany(); 
    return reply.status(200).send(tasks); 
  } catch (error) {
    console.error(error);
    return reply.status(500).send({ error: "Erro ao buscar tarefas." });
  }
});

app.delete('/tasks/:id', async (request, reply) => {
  const { id } = request.params as { id: string };

  try {
    await prisma.task.delete({
      where: { id }, 
    });
    return reply.status(204).send(); 
  } catch (error) {
    console.error("ERRO AO EXCLUIR:", error);
    return reply.status(500).send({ error: "Erro ao excluir a tarefa." });
  }
});

const start = async () => {
  try {
    await app.listen({ port: 3333, host: '0.0.0.0' })
    console.log('🚀 HTTP Server Running on http://localhost:3333')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()