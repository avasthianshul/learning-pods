/* Oren Adoption — Identity Module */
(function () {
  "use strict";

  var COOKIE_NAME = "oren_user";
  var COOKIE_MAX_AGE = 7776000; // 90 days

  var ROSTER = [
    { name: "Aahana", email: "aahana@orennow.com" },
    { name: "Abhi", email: "abhi@orennow.com" },
    { name: "Abhi (Abhirup)", email: "abhirup@orennow.com" },
    { name: "Aditi", email: "aditi@orennow.com" },
    { name: "Akshay", email: "akshay@orennow.com" },
    { name: "Akshay Hegde", email: "akshayhegde@orennow.com" },
    { name: "Anshul", email: "anshul@orennow.com" },
    { name: "Arooshi", email: "arooshi@orennow.com" },
    { name: "Arpit", email: "arpit@orennow.com" },
    { name: "Bharat", email: "bharat@orennow.com" },
    { name: "Dhanraj", email: "dhanraj@orennow.com" },
    { name: "Ijaz", email: "ijaz@orennow.com" },
    { name: "Kabir", email: "kabir@orennow.com" },
    { name: "Kashish", email: "kashish@orennow.com" },
    { name: "Kushagra", email: "kushagra@orennow.com" },
    { name: "Olivia", email: "olivia@orennow.com" },
    { name: "Pulkit", email: "pulkit@orennow.com" },
    { name: "Rasedul", email: "rasedul@orennow.com" },
    { name: "Rashmi Thakur", email: "rashmi@orennow.com" },
    { name: "Ravi Kumar", email: "ravi@orennow.com" },
    { name: "Sharun", email: "sharun@orennow.com" },
    { name: "Shraddha Manikeri", email: "shraddha@orennow.com" },
    { name: "Suhavi Sunderlal", email: "suhavi@orennow.com" },
    { name: "Suraj", email: "suraj@orennow.com" },
    { name: "Vikas", email: "vikas@orennow.com" }
  ];

  function getCookie(name) {
    var match = document.cookie.match(new RegExp("(?:^|; )" + name + "=([^;]*)"));
    return match ? decodeURIComponent(match[1]) : null;
  }

  function setCookie(name, value, maxAge) {
    document.cookie = name + "=" + encodeURIComponent(value) +
      ";path=/;max-age=" + maxAge + ";SameSite=Lax";
  }

  function deleteCookie(name) {
    document.cookie = name + "=;path=/;max-age=0";
  }

  function getUser() {
    var raw = getCookie(COOKIE_NAME);
    if (!raw) return null;
    try { return JSON.parse(raw); } catch (e) { return null; }
  }

  function setUser(name, email) {
    setCookie(COOKIE_NAME, JSON.stringify({ name: name, email: email }), COOKIE_MAX_AGE);
  }

  function clearUser() {
    deleteCookie(COOKIE_NAME);
  }

  function injectModalStyles() {
    var style = document.createElement("style");
    style.textContent =
      "#oren-id-overlay{position:fixed;inset:0;z-index:9999;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)}" +
      "#oren-id-modal{background:#13131f;border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:2.5rem;width:100%;max-width:380px;text-align:center}" +
      "#oren-id-modal h2{color:#fafafa;font-size:1rem;font-weight:600;margin-bottom:0.35rem}" +
      "#oren-id-modal p{color:#52525b;font-size:0.75rem;margin-bottom:1.5rem}" +
      "#oren-id-modal select{width:100%;background:#0f0f1a;color:#fafafa;border:1px solid rgba(255,255,255,0.1);border-radius:6px;padding:0.6rem 0.75rem;font-family:inherit;font-size:0.8rem;appearance:none;cursor:pointer;outline:none;transition:border-color 0.15s}" +
      "#oren-id-modal select:focus{border-color:#4A90D9}" +
      "#oren-id-modal button{margin-top:1.25rem;width:100%;background:#1E2C56;color:#fafafa;border:none;border-radius:6px;padding:0.6rem;font-family:inherit;font-size:0.8rem;font-weight:500;cursor:pointer;transition:background 0.15s}" +
      "#oren-id-modal button:hover{background:#253768}" +
      "#oren-id-modal button:disabled{opacity:0.3;cursor:not-allowed}" +
      "#oren-id-modal .logo{font-size:0.65rem;font-weight:500;text-transform:uppercase;letter-spacing:0.1em;color:#52525b;margin-bottom:1.5rem}";
    document.head.appendChild(style);
  }

  function showModal(resolve) {
    injectModalStyles();

    var overlay = document.createElement("div");
    overlay.id = "oren-id-overlay";

    var optionsHtml = '<option value="" disabled selected>Select your name\u2026</option>';
    for (var i = 0; i < ROSTER.length; i++) {
      var r = ROSTER[i];
      optionsHtml += '<option value="' + i + '">' + r.name + '</option>';
    }

    overlay.innerHTML =
      '<div id="oren-id-modal">' +
        '<div class="logo">Oren</div>' +
        '<h2>Welcome</h2>' +
        '<p>Select your name to continue</p>' +
        '<select id="oren-id-select">' + optionsHtml + '</select>' +
        '<button id="oren-id-btn" disabled>Continue</button>' +
      '</div>';

    document.body.appendChild(overlay);

    var select = document.getElementById("oren-id-select");
    var btn = document.getElementById("oren-id-btn");

    select.addEventListener("change", function () {
      btn.disabled = select.value === "";
    });

    btn.addEventListener("click", function () {
      var idx = parseInt(select.value, 10);
      var member = ROSTER[idx];
      setUser(member.name, member.email);
      overlay.remove();
      resolve(member);
    });
  }

  function requireIdentity() {
    return new Promise(function (resolve) {
      var user = getUser();
      if (user && user.name && user.email) {
        resolve(user);
      } else {
        if (document.readyState === "loading") {
          document.addEventListener("DOMContentLoaded", function () { showModal(resolve); });
        } else {
          showModal(resolve);
        }
      }
    });
  }

  // Expose globals
  window.OrenIdentity = {
    ROSTER: ROSTER,
    getUser: getUser,
    setUser: setUser,
    clearUser: clearUser,
    requireIdentity: requireIdentity
  };
})();
