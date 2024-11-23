import { ObjectId } from 'mongodb';
import conectarAoBanco from '../config/dbConfig.js'; //importa a base de dados
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

export async function getTodosOsPosts(){
    const db = conexao.db('imersao'); //chama o banco
    const colecao = db.collection('posts'); //chama a coleção de dentro do banco
    return colecao.find().toArray(); //retorna os posts
};

export async function criarPost(novoPost) {
    const db = conexao.db('imersao'); //chama o banco
    const colecao = db.collection('posts'); //chama a coleção de dentro do banco
    return colecao.insertOne(novoPost); //insere o novo post na coleção
};

export async function atualizarPost(id, novoPost) {
    const db = conexao.db("imersao");
    const colecao = db.collection("posts");
    const objID = ObjectId.createFromHexString(id);
    return colecao.updateOne({_id: new ObjectId(objID)}, {$set:novoPost});
};
