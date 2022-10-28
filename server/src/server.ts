import express from 'express';
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

import { PrismaClient } from '@prisma/client'



const prisma = new PrismaClient({
    log: ['query']
})



app.post('/usuario', async(request, response) => {
    const body: any = request.body;

    const usuario = await prisma.usuario.create({
        data:{
            matricula: 'Marcos',
            nome: 'body.nome',
            curso: 'body.curso',
            cpf: 'body.cpf',
            telefone: 'body.telefone',
            email: 'body.email',
            senha: 84785,
        }
    });

    console.log(usuario);

    return response.status(201).json(usuario);
})

app.get('/curso', async(request, response) =>{
    const curso = await prisma.curso.findMany()

    return response.json(curso);
})

app.listen(3000)
