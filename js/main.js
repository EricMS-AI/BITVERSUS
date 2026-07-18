// PropFirmClarity — main.js
document.addEventListener('DOMContentLoaded', function () {

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Mobile dropdown toggle (categories)
  document.querySelectorAll('.dropdown > a').forEach(function (link) {
    link.addEventListener('click', function (e) {
      if (window.innerWidth <= 640) {
        e.preventDefault();
        link.parentElement.classList.toggle('open');
      }
    });
  });

  // Cookie consent banner
  var banner = document.getElementById('cookie-banner');
  var acceptBtn = document.getElementById('cookie-accept');
  var rejectBtn = document.getElementById('cookie-reject');
  var CONSENT_KEY = 'pfc_cookie_consent';

  function getConsent() {
    try { return localStorage.getItem(CONSENT_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(CONSENT_KEY, value); } catch (e) {}
  }

  if (banner) {
    var consent = getConsent();
    if (!consent) {
      banner.style.display = 'block';
    }
    if (acceptBtn) {
      acceptBtn.addEventListener('click', function () {
        setConsent('accepted');
        banner.style.display = 'none';
        // Placeholder: this is where AdSense / analytics tags should be
        // loaded dynamically once consent is accepted.
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener('click', function () {
        setConsent('rejected');
        banner.style.display = 'none';
        // Non-essential cookies (ads/analytics) stay disabled.
      });
    }
  }
});
