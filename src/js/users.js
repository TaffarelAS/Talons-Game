function renderizarTabela() {
    const corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.innerHTML = '';

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.forEach((usuario, index) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `
            <td class="nome">${usuario.nome}</td>
            <td class="email">${usuario.email}</td>
            <td class="senha">${usuario.senha}</td>
            <td id="editar-svg">
                <svg onclick="abrirModal(${index})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#000000"><path d="M5,21q-0.83,0-1.41-0.59T3,19V5Q3,4.17 3.59,3.59T5,3h8.93l-2,2H5V19H19V12.05l2-2V19q0,0.82-0.59,1.41T19,21H5Zm7-9ZM9,15V10.75l9.18-9.18q0.3-0.3 0.68-0.45q0.38-0.15 0.75-0.15q0.4,0 0.76,0.15q0.36,0.15 0.66,0.45L22.43,3q0.28,0.3 0.43,0.66T23,4.4T22.86,5.14T22.43,5.8L13.25,15H9ZM21.03,4.4L19.63,3l1.4,1.4ZM11,13h1.4l5.8-5.8L17.5,6.5L16.78,5.8L11,11.58V13Zm6.5-6.5L16.78,5.8L17.5,6.5l0.7,0.7L17.5,6.5Z"/></svg>
            </td>
            <td id="deletar-svg">
                <svg onclick="deletarUsuario(${index})" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#000000"><path d="M7,21q-0.82,0-1.41-0.59T5,19V6H4V4H9V3h6V4h5V6H19V19q0,0.82-0.59,1.41T17,21H7ZM17,6H7V19H17V6ZM9,17h2V8H9v9Zm4,0h2V8H13v9ZM7,6V19V6Z"/></svg>
            </td>
        `;

        corpoTabela.appendChild(tr);
    });

}

function deletarUsuario(index) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (!confirm(`Realmente quer excluir o usuario "${usuarios[index].nome}"?`)) return;

    usuarios.splice(index, 1);
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    renderizarTabela();
}

let indiceEditando = null; // precisa pra salvar o valor do usuario que vai virar o valor do indice dentro da função de abrir o modal

function abrirModal(index) {
    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    const u = usuarios[index];

    indiceEditando = index;

    document.getElementById('nome-edit').value    = u.nome;
    document.getElementById('email-edit').value   = u.email;
    document.getElementById('senha-edit').value   = u.senha;
    document.getElementById('confirme-edit').value = '';

    document.getElementById('editar-user').style.display = 'flex';
}

function fecharModal(){
    document.getElementById('editar-user').style.display = 'none';
    document.getElementById('adicionar-user').style.display = 'none';
}

function salvarEdicao() {
    if (indiceEditando === null) return;

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const novoNome     = document.getElementById('nome-edit').value.trim();
    const novoEmail    = document.getElementById('email-edit').value.trim();
    const novaSenha    = document.getElementById('senha-edit').value;
    const senhaConfirm = document.getElementById('confirme-edit').value;
    const Confirme    = document.getElementById('confirme-edit');

    if (novaSenha !== senhaConfirm) {
        Confirme.setCustomValidity('As senhas diferem!!!');
        Confirme.reportValidity();
        document.getElementById('senha-edit').value = '';
        document.getElementById('confirme-edit').value = '';
        Confirme.setCustomValidity('');
        return;
    }

    usuarios[indiceEditando] = {
        nome: novoNome,
        email: novoEmail,
        senha: novaSenha
    };

    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    document.getElementById('editar-user').style.display = 'none';
    indiceEditando = null;

    renderizarTabela();
}

function novoUsuario() {
    document.getElementById('adicionar-user').style.display = 'flex';
}

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

        document.getElementById('adicionar-user').style.display = 'none';

        renderizarTabela();
    }

}

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

document.addEventListener('DOMContentLoaded', renderizarTabela);