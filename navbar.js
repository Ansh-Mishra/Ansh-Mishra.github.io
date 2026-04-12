// navbar.js
function loadNavbar(pathToNavbar = '/navbar.html') {
  fetch(pathToNavbar)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar-placeholder').innerHTML = data;

      // Make sidebar functions global for onclick in navbar
      window.showSidebar = function() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.display = 'flex';
      }

      window.hideSidebar = function() {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) sidebar.style.display = 'none';
      }

      highlightNavbar();

    })
    
    .catch(err => console.error('Navbar load error:', err));
}

// Highlight navbar
function highlightNavbar() {
  const navbar = document.getElementById('navbar-placeholder');
  if (!navbar) return;

  const links = navbar.querySelectorAll("a");
  const currentPath = window.location.pathname;

  links.forEach(link => {
    const linkPath = link.getAttribute("href");

    if (
      linkPath === currentPath ||
      (linkPath === "/index.html" && currentPath === "/")
    ) {
      link.classList.add("active");
    }
  });
}



// Inject favicon
(function() {
  if (!document.querySelector("link[rel*='icon']")) {
    const link = document.createElement('link');
    link.rel = 'icon';
    link.type = 'image/png';
    link.href = '/Resources/Images/pixelarts/notlazy256x256.png';
    document.head.appendChild(link);
  }
})();

// Insert footer
document.addEventListener("DOMContentLoaded", function() {
    const footerElement = document.getElementById('footer');

    if (footerElement &&
    !footerElement.classList.contains("no-auto-footer")) {
        footerElement.innerHTML = `
            <ul>
                <li><a href="/index.html">Home</a></li>
                <li><a href="/Pages/Games.html">Games</a></li>
                <li><a href="/Pages/PixelArt.html">Pixel Art</a></li>
                <li><a href="/Pages/Softwares.html">Softwares</a></li>
                <li><a href="/Pages/WebProjects.html">Web Projects</a></li>
                <li><a href="/Pages/AboutMe.html">About Me</a></li>
            </ul>
        `;
    }
    // Highlight current page
    const links = footerElement.querySelectorAll("a");
    const currentPath = window.location.pathname;

    links.forEach(link => {
        const linkPath = link.getAttribute("href");
        if (
        linkPath === currentPath ||
        (linkPath === "/index.html" && currentPath === "/")
        ) {
          link.classList.add("active");
        }
    });
});