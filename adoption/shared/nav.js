/* Oren Adoption — Navigation Bar */
(function () {
  "use strict";

  var LINKS = [
    { label: "Usage", href: "/" },
    { label: "Polls", href: "/polls" },
    { label: "Checklist", href: "/checklist" }
  ];

  function injectStyles() {
    var style = document.createElement("style");
    style.textContent =
      ".oren-nav{position:fixed;top:0;left:0;right:0;z-index:1000;height:48px;background:#0f0f1a;border-bottom:1px solid rgba(255,255,255,0.06);display:flex;align-items:center;justify-content:space-between;padding:0 1.5rem;font-family:'Inter',-apple-system,sans-serif}" +
      ".oren-nav-links{display:flex;gap:0.25rem}" +
      ".oren-nav-links a{color:#52525b;text-decoration:none;font-size:0.75rem;font-weight:500;padding:0.35rem 0.7rem;border-radius:5px;transition:all 0.15s}" +
      ".oren-nav-links a:hover{color:#a1a1aa;background:rgba(255,255,255,0.04)}" +
      ".oren-nav-links a.active{color:#fafafa;background:rgba(255,255,255,0.06)}" +
      ".oren-nav-user{display:flex;align-items:center;gap:0.6rem;font-size:0.7rem;color:#52525b}" +
      ".oren-nav-user .name{color:#a1a1aa}" +
      ".oren-nav-user .switch{color:#3d7abd;cursor:pointer;text-decoration:none;font-size:0.65rem}" +
      ".oren-nav-user .switch:hover{color:#4A90D9}";
    document.head.appendChild(style);
  }

  function render(user) {
    injectStyles();

    var nav = document.createElement("nav");
    nav.className = "oren-nav";

    var currentPath = window.location.pathname.replace(/\.html$/, "").replace(/\/$/, "") || "/";

    var linksHtml = '<div class="oren-nav-links">';
    for (var i = 0; i < LINKS.length; i++) {
      var link = LINKS[i];
      var isActive = (link.href === "/" && (currentPath === "/" || currentPath === "")) ||
                     (link.href !== "/" && currentPath.indexOf(link.href) === 0);
      linksHtml += '<a href="' + link.href + '"' + (isActive ? ' class="active"' : '') + '>' + link.label + '</a>';
    }
    linksHtml += '</div>';

    var userHtml = '';
    if (user && user.name) {
      userHtml = '<div class="oren-nav-user">' +
        '<span class="name">' + user.name + '</span>' +
        '<a class="switch" id="oren-nav-switch">Switch</a>' +
      '</div>';
    }

    nav.innerHTML = linksHtml + userHtml;
    document.body.insertBefore(nav, document.body.firstChild);

    var switchLink = document.getElementById("oren-nav-switch");
    if (switchLink) {
      switchLink.addEventListener("click", function (e) {
        e.preventDefault();
        window.OrenIdentity.clearUser();
        window.location.reload();
      });
    }
  }

  window.OrenNav = { render: render };
})();
