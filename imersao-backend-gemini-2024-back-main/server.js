import express from 'express'; //importa a função express
import routes from './src/routes/postsRoutes.js';

const app = express(); //nomeia a função express
app.use(express.static('uploads'));
routes(app);

app.listen(3000, () =>{ //chama o servidor -- 3000 = porta do servidor
    console.log('Servidor escutando...'); //teste para saber se a função funciona
});



