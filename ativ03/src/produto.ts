class ProdutoEletro{
    private nome: string;
    private preco: number;
 
    constructor(nome: string, preco: number){
       this.nome = nome;
       this.preco = preco;
    }
 
    // Retornando o nome
    public getNome(): string{
       return this.nome;
    }
 
    // Retornando o preço
    public getPreco(): number{
       return this.preco;
    }
 }
 
 const nome: string = prompt('Digite o nome do produto: ');
 const preco: number = Number(prompt('Digite o preço do produto: '));
 
 const produto: ProdutoEletro = new ProdutoEletro(nome, preco);
 
 console.log('Dados do produto:\n')
 document.write('Dados do produto:','<br>')

 console.log(`Produto: ${produto.getNome()}`);
 document.write(`Produto: ${produto.getNome()}`);
 
 console.log(`Preço: R$ ${produto.getPreco()}`);
 document.write(`<br>Preço: R$ ${produto.getPreco()}`);