class Funcionario{
    private nome: string;
    private empresa: string;
    private funcao: string;
    private salario: number;
 
    constructor(nome: string, empresa: string, funcao: string, salario: number){
       this.nome = nome;
       this.empresa = empresa;
       this.funcao = funcao;
       this.salario = salario;
    }
 
    // Retorna nome
    public getNome(): string{
       return this.nome;
    }
 
    // Retorna empresa
    public getEmpresa(): string{
       return this.empresa;
    }
 
    // Retorna função
    public getFuncao(): string{
       return this.funcao;
    }
 
    // Retorna o salário
    public getSalario(): number{
       return this.salario;
    }
 }
 
 const nome = prompt('Digite seu nome: ');
 const empresa = prompt('Digite o nome da empresa que trabalha: ');
 const funcao = prompt('Digite sua função na empresa: ');
 const salario = Number(prompt('Digite seu salário: '));
 
 const funcionario: Funcionario = new Funcionario(nome, empresa, funcao, salario);
 
 console.log('Dados do funcionário:\n');
 document.write('Dados do funcionário:','<br>');
 
 console.log(`Nome: ${funcionario.getNome()}`);
 document.write(`<br>Nome: ${funcionario.getNome()}`);
 
 console.log(`Empresa que trabalha: ${funcionario.getEmpresa()}`);
 document.write(`<br>Empresa que trabalha: ${funcionario.getEmpresa()}`);
 
 console.log(`Função na empresa: ${funcionario.getFuncao()}`);
 document.write(`<br>Função na empresa: ${funcionario.getFuncao()}`);
 
 console.log(`Salário: ${funcionario.getSalario()}`);
 document.write(`<br>Salário: ${funcionario.getSalario()}`);