class TradutorEmojis{

    dicionario: {[palavras:string]: string} = {

        "amo": "❤️",
        "futebol": "⚽",
        "cachorro": "🐕",
        "gato": "🐈"

    }

    traduzir(frase: string){

        let palavras = frase.split(" ");


        

        let nova_frase = palavras.map((p: any)=>{

            for (let palavra in this.dicionario){

                if (p == palavra){

                    p = this.dicionario[p];
                }
            }

            return p;

        })

        console.log(nova_frase.join(" "));

    }

}


const frase = new TradutorEmojis();


frase.traduzir("Eu amo o meu gato");    