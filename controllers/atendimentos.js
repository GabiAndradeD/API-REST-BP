//Recebe um ap e executa uma function
const { json } = require('body-parser');
const localizar = require ('./bigquery');

module.exports = async app => {

    app.get('/atendimentos', (req, res) => res.send('helow'));

    app.post('/atendimentos', (req, res) => {

        console.log(req.body);

        res.send('Você está na rota de atendimento e está realizando um POST');
    })

    // const id = "po"
    // app.get('/'+ id +'/teste', (req, res) => res.send('teste'));
}