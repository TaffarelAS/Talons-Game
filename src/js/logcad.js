function criarConta() {

    const nomeUser = document.getElementById('nome-cadastro').value;
    const emailUser = document.getElementById('email-cadastro').value;
    const senhaUser = document.getElementById('senha-cadastro').value;
    const senhaConfirm = document.getElementById('confirme-cadastro').value;
    const confirme = document.getElementById('confirme-cadastro');

    if (senhaUser !== senhaConfirm) {
        confirme.setCustomValidity('As senhas diferem!!!') // Usa a caixa de mensagem do proprio form pra passar que as senhas não são iguais
        confirme.reportValidity();
        document.getElementById('senha-cadastro').value = '';
        document.getElementById('confirme-cadastro').value = '';
        confirme.setCustomValidity('') // Reseta a caixa senão o erro fica pra sempre (n tenho a minima ideia do porque isso acontece)
        return
    } else {

        const novoUsuario = {
            nome: nomeUser,
            email: emailUser,
            senha: senhaUser
        }

        const usuariosExist = localStorage.getItem('usuarios');
        const usuarios = usuariosExist ? JSON.parse(usuariosExist) : [];
        usuarios.push(novoUsuario);

        localStorage.setItem('usuarios', JSON.stringify(usuarios));

        alert('Usuario Cadastrado com Sucesso!!!') 

        document.getElementById('nome-cadastro').value = '';
        document.getElementById('email-cadastro').value = '';
        document.getElementById('senha-cadastro').value = '';
        document.getElementById('confirme-cadastro').value = '';
        confirme.setCustomValidity('')
    }
    
}

function login() {
    const emailLogin = document.getElementById("email-login").value.trim();
    const senhaLogin = document.getElementById("senha-login").value.trim();
    const loginCorreto = document.getElementById('senha-login');


    let usuarios;
    usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(
        (u) => u.email.toLowerCase() === emailLogin.toLowerCase() &&
        u.senha === senhaLogin
    )

    if (usuarioEncontrado) {
        const admin = usuarioEncontrado.email.toLowerCase() === 'admin@admin.com' && usuarioEncontrado.senha === 'admin1';

        if (admin) {
            alert('Bem Vindo Admin!!!');
            sessionStorage.setItem('tipoUsuario', 'admin')
        } else {
            alert('Usuario logado com sucesso!!!');
            sessionStorage.setItem('tipoUsuario', 'comum')
        }

        window.location.href = '/src/home.html'
    } else {
        loginCorreto.setCustomValidity('Usuario não encontrado!!!')
        loginCorreto.reportValidity();
        document.getElementById('email-login').value = '';
        document.getElementById('senha-login').value = '';
        loginCorreto.setCustomValidity('')
    }
}

// Sempre cria admin pra se caso eu apagar no localstorage

function criarAdmin() {
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

  const adminExist = usuarios.some(
    (u) => u.email.toLowerCase() === "admin@admin.com"
  );

  if (!adminExist) {
    usuarios.push({
      email: "admin@admin.com",
      senha: "admin1",
      nome: "Administrador"
    });
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  }
}

criarAdmin();