function criarConta() {

    const nomeUser = document.getElementById('nome-cadastro').value;
    const emailUser = document.getElementById('email-cadastro').value;
    const senhaUser = document.getElementById('senha-cadastro').value;
    const senhaConfirm = document.getElementById('confirme-cadastro').value;
    const confirme = document.getElementById('confirme-cadastro');

    if (senhaUser !== senhaConfirm) {
        confirme.setCustomValidity('As senhas diferem!!!')
        confirme.reportValidity();
        document.getElementById('senha-cadastro').value = '';
        document.getElementById('confirme-cadastro').value = '';
        confirme.setCustomValidity('')
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