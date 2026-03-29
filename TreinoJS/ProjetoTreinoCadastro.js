// Projeto: Cadastro de Usuários

let usuarios = [];

function menu() {
    console.log("\n1 - Cadastrar usuário");
    console.log("2 - Listar usuários");
    console.log("3 - Remover usuário");
    console.log("4 - Sair");

    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Escolha uma opção: ", function(opcaoUsuario) {
        let opcao = Number(opcaoUsuario);

        readline.close(); // fecha antes de ir pro switch

        switch (opcao) { //swwitch só funciona dentro de uma question, porque é onde temos acesso à um imput do usuário
            case 1:
                cadastrarUsuario();
                break;

            case 2:
                listarUsuarios();
                break;

            case 3:
                removerUsuario();
                break;

            case 4:
                console.log("Saindo...");
                break;

            default:
                console.log("Opção inválida!");
                menu();
        }
    });
}

function cadastrarUsuario() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Digite o nome: ", function(nome) {
        readline.question("Digite a idade: ", function(idade) {

            // isNaN(idade) verifica se a idade não é um número
            //  Number(idade) < 0 verifica se a idade é negativa
            //  !/^[A-Za-zÀ-ÿ\s]+$/.test(nome) verifica se o nome contém caracteres inválidos

            if (isNaN(idade) || Number(idade) < 0 || !/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) { 
                console.log("Dados inválidos!");
                readline.close();
                menu();
                return;
            }


            usuarios.push({ //lista de objetos, onde cada objeto representa um usuário com as propriedades nome e idade
                nome: nome,
                idade: Number(idade)
            });

            console.log("Usuário cadastrado com sucesso!");

            readline.close();
            menu(); // volta pro menu
        });
    });
}

function removerUsuario() {
    const readline = require("readline").createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    readline.question("Digite o nome do usuário a remover: ", function(nome) {
    
        if (!/^[A-Za-zÀ-ÿ\s]+$/.test(nome)) {
            console.log("Nome inválido!");
            readline.close();
            menu();
            return;
}
            const index = usuarios.findIndex(u => u.nome.toLowerCase() === nome.toLowerCase()); 
        // findIndex é um método de array que retorna o índice do primeiro elemento que satisfaz a condição dada
        //  ou -1 se nenhum elemento satisfizer a condição
        // u => u.nome.toLowerCase() === nome.toLowerCase() é uma função de callback que compara o nome do usuário com o nome digitado
        //  ignorando maiúsculas e minúsculas
            if (index === -1) {
                console.log("Usuário não encontrado!");
            } else {
                usuarios.splice(index, 1);
                console.log("Usuário removido com sucesso!");
            }

            readline.close();
            menu();
});
}
 

function listarUsuarios() {
    console.log("\nUsuários cadastrados:");

    if (usuarios.length === 0) {
        console.log("Nenhum usuário cadastrado.");
    } else {
        usuarios.forEach((u, i) => {
            console.log(`${i + 1} - ${u.nome} (${u.idade} anos)`);
        });
    }

    menu(); // volta pro menu
}

// inicia o sistema
menu();