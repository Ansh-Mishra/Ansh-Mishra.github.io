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
    })
    .catch(err => console.error('Navbar load error:', err));
}

