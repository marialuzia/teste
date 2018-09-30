
let nome;
let idade;
let salario;
let emprestimo;


nome = prompt("Qual é o seu nome?");
idade = prompt("Olá " + nome + ", qual é sua idade?");
salario = prompt("Quanto você ganha?");
 emprestimo = prompt("Qual o valor do emprestimo que você deseja?");

if(isNaN(salario)){
    alert("Salario inválido, recarregue o navegador e tente novamente!");
}
else if ((idade>=21 && idade<=55) && (emprestimo<=5*salario)){
        alert("Emprestimo aprovado");
   }
    else{
        alert("Emprestimo recusado");
    }




