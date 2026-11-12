function renderizarTabela() {
    const corpoTabela = document.getElementById('corpo-tabela');
    corpoTabela.innerHtml = '';

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    usuarios.array.forEach(usuario, index => {

        const tr = document.createElement('tr');

        tr.innerHtml = `
            <td class="nome">${usuarios.nome}</td>
            <td class="email">${usuarios.email}</td>
            <td class="senha">${usuarios.senha}</td>
            <td class="editar">
                <svg onclick="editarUsuario()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M5,21q-0.83,0-1.41-0.59T3,19V5Q3,4.17 3.59,3.59T5,3h8.93l-2,2H5V19H19V12.05l2-2V19q0,0.82-0.59,1.41T19,21H5Zm7-9ZM9,15V10.75l9.18-9.18q0.3-0.3 0.68-0.45q0.38-0.15 0.75-0.15q0.4,0 0.76,0.15q0.36,0.15 0.66,0.45L22.43,3q0.28,0.3 0.43,0.66T23,4.4T22.86,5.14T22.43,5.8L13.25,15H9ZM21.03,4.4L19.63,3l1.4,1.4ZM11,13h1.4l5.8-5.8L17.5,6.5L16.78,5.8L11,11.58V13Zm6.5-6.5L16.78,5.8L17.5,6.5l0.7,0.7L17.5,6.5Z"/></svg>
            </td>
            <td class="deletar">
                <svg onclick="deletarUsuario()" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="24px" width="24px" fill="#e3e3e3"><path d="M5,21q-0.83,0-1.41-0.59T3,19V5Q3,4.17 3.59,3.59T5,3h8.93l-2,2H5V19H19V12.05l2-2V19q0,0.82-0.59,1.41T19,21H5Zm7-9ZM9,15V10.75l9.18-9.18q0.3-0.3 0.68-0.45q0.38-0.15 0.75-0.15q0.4,0 0.76,0.15q0.36,0.15 0.66,0.45L22.43,3q0.28,0.3 0.43,0.66T23,4.4T22.86,5.14T22.43,5.8L13.25,15H9ZM21.03,4.4L19.63,3l1.4,1.4ZM11,13h1.4l5.8-5.8L17.5,6.5L16.78,5.8L11,11.58V13Zm6.5-6.5L16.78,5.8L17.5,6.5l0.7,0.7L17.5,6.5Z"/></svg>
            </td>
        `;    

    });

    corpoTabela.appendChild(tr);
    
}