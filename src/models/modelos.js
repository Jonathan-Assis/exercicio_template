class Projeto{
    constructor(tipo, tecnologia, url, ano){
        this.tipo = tipo;
        this.tecnologia = tecnologia;
        this.url = url;
        this.ano = ano;

    }
}

class Usuario{
    constructor(nome, estudo, trabalho, objetivo){
        this.nome = nome;
        this.estudo = estudo;
        this.trabalho = trabalho;
        this.objetivo = objetivo;
    }
}

module.exports = {
    Projeto: Projeto,
    Usuario: Usuario
}  





