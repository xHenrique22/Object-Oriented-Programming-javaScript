class Aviao{
    private modelo: string;
    private fabricante: string;
    private qtdPassageiros: number;
 
    constructor(modelo: string, fabricante: string, qtdPassageiros: number){
       this.modelo = modelo;
       this.fabricante = fabricante;
       this.qtdPassageiros = qtdPassageiros;
    }
 
    // MODELO
    public getModelo(): string{
       return this.modelo;
    }
 
    // FABRICANTE
    public getFabricante(): string{
       return this.fabricante;
    }
 
    // PASSAGEIROS
    public getPassageiros(): number{
       return this.qtdPassageiros;
    }
 }
 
 const modelo: string = prompt('Digite o modelo do avião: ');
 const fabricante: string = prompt('Digite o fabricante do avião: ');
 const qtdPassageiros: number = Number(prompt('Digite a quantidade de passageiros: '));
 
 const aviao: Aviao = new Aviao(modelo, fabricante, qtdPassageiros);
 
 console.log(`Modelo do avião: ${aviao.getModelo()}`);
 document.write(`Modelo do avião: ${aviao.getModelo()}`);
 
 console.log(`Fabricante do avião: ${aviao.getFabricante()}`);
 document.write(`<br>Fabricante do avião: ${aviao.getFabricante()}`);
 
 console.log(`Quantidade de passageiros: ${aviao.getPassageiros()}`);
 document.write(`<br>Quantidade de passageiros é: ${aviao.getPassageiros()}`);