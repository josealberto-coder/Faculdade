class Autenticacao{

    usuario: string;

    senha: number;

    constructor(usuario:string, senha: number){

        this.usuario = usuario;

        this.senha = senha;

    }


    validar(){

        if (this.usuario == "admin" && this.senha == 1234){
            return true
        }else{

            return false;
        }
    }

}


const usuario1 = new Autenticacao("admin", 1234);

console.log(usuario1.validar());