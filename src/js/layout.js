const headerSite = `
    <header>
        <a href="home.html"><img src="" alt="Talons"></a>
        <a href="home.html">Home</a>
        <a href="about.html">About</a>
        <a href="roadmap.html">Roadmap</a>
        <a href="play.html">Play</a>
        <a href="login.html">Login</a>
    </header>
`

const footerSite = `
    <footer>
        <p>bub</p>
    </footer>
`

function montarLayout() {
    const headerEl = document.getElementById('menu-aqui');
    const footerEl = document.getElementById('footer-aqui');

    if(headerEl) headerEl.innerHTML = headerSite;
    if(footerEl) footerEl.innerHTML = footerSite;
}

montarLayout();