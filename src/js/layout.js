const headerSite = `
    <header>
        <a href="home.html"><img src="/public/Talons.png" alt="Talons"></a>
        <a href="about.html">About</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="play.html" id="Play">Play</a>
        <a href="login.html">Login</a>
    </header>
`

const footerSite = `
    <footer>

        <div class="redes">
            <a href="https://www.youtube.com/watch?v=zpdrkWX69vg"><img src="/public/instagram.png" alt="Instagram"></a>
            <a href="https://www.youtube.com/watch?v=30O4NgfgSP0"><img src="/public/youtube.png" alt="Youtube"></a>
            <a href="https://www.youtube.com/watch?v=sdV-PacdYdY"><img src="/public/twitter.png" alt="Twitter"></a>
            <a href="https://taffarelas.itch.io/"><img src="https://static.itch.io/images/itchio-textless-black.svg" alt="Itch.io"></a>
            <a href="https://steamcommunity.com/id/taffarel404/"><img src="/public/steam.png" alt="Steam"></a>
        </div>
    
        <div id="adm"> 
            <p>Ferramentas de Administrador</p>
            <a href="users.html">Administrar Usuarios </a>
            <a href="items.html">Administrar Items </a> 
        </div>
        
    </footer>
`

function montarLayout() {
    const headerEl = document.getElementById('menu-aqui');
    const footerEl = document.getElementById('footer-aqui');

    if (headerEl) headerEl.innerHTML = headerSite;
    if (footerEl) footerEl.innerHTML = footerSite;
    checarAdmin();
}

function checarAdmin() {
    const tipo = sessionStorage.getItem('tipoUsuario');
    const adm = document.getElementById('adm');

    if (adm && tipo === 'admin') {
        adm.style.display = 'block';
    }
};

montarLayout();