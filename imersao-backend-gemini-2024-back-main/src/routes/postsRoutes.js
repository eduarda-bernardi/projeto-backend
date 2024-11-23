//arquivo que faz a rota dos dados
import 'dotenv/config';
import express from 'express';
import multer from 'multer'; //leitor de imagens
import { listaPosts, postarNovoPost, uploadImagem, atualizarNovoPost } from '../controllers/postsController.js';
import cors from 'cors';

const corsOptions = {
    origin: 'http://localhost:8000',
    optionSuccessStatus: 200
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({ dest: "./uploads" , storage}); //chama o multer

const routes = (app) => {
    app.use(express.json());
    app.use(cors(corsOptions));

    app.get('/posts', listaPosts); //abre post especifico
    app.post('/posts', postarNovoPost); //envia um novo post
    app.post('/upload', upload.single('imagem'), uploadImagem); //faz upload da imagem
    app.put('/upload/:id', atualizarNovoPost);
};

export default routes;
