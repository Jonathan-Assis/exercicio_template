/*
Exemplo simples de projeto com uma estrutura
de diretórios organizada.
Autor: Fabrício G. M. de Carvalho, Ph.D
*/

/* importando o express */
const express = require('express')
const app = express();
const port = 5000;

/* importando o modelo */
const modelo = require('./models/modelos');
var Projeto = modelo.Projeto; //Vinculação de tipo
var Usuario = modelo.Usuario;

/* Configurando a template engine. */
app.set('view engine', 'ejs');
app.set('views', './views');

/* Configurando o diretório que serve arquivos estáticos.*/
app.use(express.static('public'));

app.get('/', infoUser);
app.get('/projetos', listProjectHandler);

app.listen(port, listenHandler);

function listProjectHandler(req, res){
    /* Os dados a seguir, em uma aplicação real, deveriam vir de um BD */
    let projeto_1 = new Projeto("Landing Page","HTML, CSS, JavaScript", "https://github.com/Jonathan-Assis/mundo-invertido-landing-page", 2022); 
    let projeto_2 = new Projeto("App Pets","React Native","https://github.com/Jonathan-Assis/Prog_de_Scripts/tree/app-pets", 2022);
    let projeto_3 = new Projeto("Análise de Dados Públicos","Jupyter Notebook", "https://github.com/Jonathan-Assis/Analise-dos-tipos-de-deficiencia-pelas-zonas-eleitorais-de-SJC-SP", 2020);    
    let projetos = [];
    projetos.push(projeto_1);
    projetos.push(projeto_2);
    projetos.push(projeto_3);
    res.render('listar_projetos.ejs',{lista_projetos: projetos});    
} 

function infoUser(req, res){
    let user = new Usuario("Olá, meu nome é Jonathan Gabriel","Sou estudante de Análise e Desenvolvimento de Sistemas do 5º Semestre","Startup no Parque Tecnológico de São José dos Campos - SP", "Busco aprender cada vez mais sobre o Front-end em UI e UX");
    res.render('infoUser.ejs', {info:user});   
}

function listenHandler(){
    console.log(`Escutando na porta ${port}!`);
}