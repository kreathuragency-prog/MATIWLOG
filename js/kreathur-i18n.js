/**
 * KREATHUR — Widget i18n universal (ES / EN / PT / DE)
 * Replicado del widget de lilafken.com. Mismas 4 banderas (Chile, EEUU, Brasil, Alemania).
 *
 * Banderas SVG reales vía flagcdn.com (funcionan en Windows, que no renderiza emoji-flags).
 * Click en bandera -> cookie googtrans + reload -> Google Translate traduce la pagina.
 * Autocontenido, sin dependencias. Pegar <script src="js/kreathur-i18n.js" defer></script>
 * antes de </body>. Opcional: <div id="kreathur-i18n-mount"></div> en el header.
 */
(function () {
  'use strict';
  if (window.__kreathur_i18n) return;
  window.__kreathur_i18n = true;

  // ISO 3166-1 alpha-2 para flagcdn.com. MISMAS banderas que lilafken.com.
  var LANGS = [
    { code: 'es', iso: 'cl', label: 'Español' },
    { code: 'en', iso: 'us', label: 'English' },
    { code: 'pt', iso: 'br', label: 'Português' },
    { code: 'de', iso: 'de', label: 'Deutsch' }
  ];
  var INCLUDED = LANGS.map(function (l) { return l.code; }).join(',');

  function getSavedLang() {
    try { return localStorage.getItem('kr_lang') || 'es'; } catch (e) { return 'es'; }
  }
  function setSavedLang(c) {
    try { localStorage.setItem('kr_lang', c); } catch (e) {}
  }
  function clearGoogTrans() {
    var h = location.hostname;
    var r = h.split('.').slice(-2).join('.');
    var x = 'expires=Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'googtrans=;path=/;' + x;
    document.cookie = 'googtrans=;path=/;domain=' + h + ';' + x;
    document.cookie = 'googtrans=;path=/;domain=.' + h + ';' + x;
    if (r && r !== h) document.cookie = 'googtrans=;path=/;domain=.' + r + ';' + x;
  }
  function setGoogTrans(c) {
    var h = location.hostname;
    var r = h.split('.').slice(-2).join('.');
    var v = '/es/' + c;
    document.cookie = 'googtrans=' + v + ';path=/';
    document.cookie = 'googtrans=' + v + ';path=/;domain=' + h;
    document.cookie = 'googtrans=' + v + ';path=/;domain=.' + h;
    if (r && r !== h) document.cookie = 'googtrans=' + v + ';path=/;domain=.' + r;
  }
  function applyLang(c) {
    setSavedLang(c || 'es');
    clearGoogTrans();
    if (c && c !== 'es') setGoogTrans(c);
    location.reload();
  }

  function buildAndMount() {
    if (document.getElementById('kr-i18n-fab')) return;

    var mountTarget = document.getElementById('kreathur-i18n-mount') || document.querySelector('[data-i18n-mount]');
    var isInline = !!mountTarget;

    var css = [
      '#kr-i18n-fab{' + (isInline ? 'position:relative;margin-right:6px' : 'position:fixed;bottom:16px;left:16px;z-index:9999;box-shadow:0 4px 14px rgba(0,0,0,.4)') + ';display:inline-flex;gap:2px;align-items:center;background:rgba(15,18,28,.82);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.22);padding:3px 5px;border-radius:100px;font-family:system-ui,-apple-system,Inter,sans-serif;vertical-align:middle}',
      '#kr-i18n-fab .flag{width:38px;height:40px;border:none;background:transparent;cursor:pointer;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;transition:transform .15s,background .15s,box-shadow .15s;padding:0;line-height:0;outline:none;overflow:hidden}',
      '#kr-i18n-fab .flag img{width:22px;height:16px;display:block;border-radius:3px;object-fit:cover;box-shadow:0 1px 3px rgba(0,0,0,.35)}',
      '#kr-i18n-fab .flag:hover{transform:scale(1.15);background:rgba(255,255,255,.14)}',
      '#kr-i18n-fab .flag.active{background:rgba(255,255,255,.22);outline:1.5px solid rgba(255,255,255,.85);box-shadow:0 0 8px rgba(255,255,255,.35)}',
      /* movil: SOLO ajustar tamano; NO tocar posicion (la base ya ancla abajo-izq).
         Fijar top+right junto con bottom+left dejaba los 4 lados => el FAB se
         estiraba a pantalla completa y tapaba todo el sitio en celular. */
      '@media(max-width:520px){#kr-i18n-fab{padding:2px 4px;max-width:max-content;max-height:max-content}#kr-i18n-fab .flag{width:36px;height:38px}#kr-i18n-fab .flag img{width:20px;height:14px}}',
      '.goog-te-banner-frame.skiptranslate,#goog-gt-tt,.goog-te-balloon-frame{display:none!important}',
      'body{top:0!important;position:static!important}',
      'font[style*="background-color"]{background:transparent!important;box-shadow:none!important}',
      '.goog-tooltip,.goog-tooltip:hover{display:none!important}',
      '.goog-text-highlight{background:none!important;box-shadow:none!important}',
      '#google_translate_element{position:absolute;left:-9999px;visibility:hidden;height:0;overflow:hidden}'
    ].join('\n');

    var styleEl = document.createElement('style');
    styleEl.id = 'kr-i18n-style';
    styleEl.textContent = css;
    document.head.appendChild(styleEl);

    var current = getSavedLang();
    var fab = document.createElement('div');
    fab.id = 'kr-i18n-fab';
    fab.setAttribute('role', 'navigation');
    fab.setAttribute('aria-label', 'Selector de idioma');
    fab.innerHTML = LANGS.map(function (l) {
      var a = l.code === current ? ' active' : '';
      var img = '<img src="https://flagcdn.com/' + l.iso + '.svg" alt="' + l.label + '" width="22" height="16" loading="lazy" decoding="async">';
      return '<button class="flag' + a + '" type="button" data-lang="' + l.code + '" title="' + l.label + '" aria-label="Cambiar a ' + l.label + '">' + img + '</button>';
    }).join('');

    if (isInline) { mountTarget.appendChild(fab); } else { document.body.appendChild(fab); }

    var necesitaMotor = current !== 'es' || document.cookie.indexOf('googtrans=/') !== -1;
    if (necesitaMotor) {
      if (!document.getElementById('google_translate_element')) {
        var gt = document.createElement('div');
        gt.id = 'google_translate_element';
        document.body.appendChild(gt);
      }
      window.googleTranslateElementInit = function () {
        if (typeof google === 'undefined' || !google.translate) return;
        /* global google */
        new google.translate.TranslateElement({
          pageLanguage: 'es', includedLanguages: INCLUDED,
          autoDisplay: false, layout: google.translate.TranslateElement.InlineLayout.SIMPLE
        }, 'google_translate_element');
      };
      if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
        var s = document.createElement('script');
        s.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
        s.async = true;
        document.body.appendChild(s);
      }
    }

    fab.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-lang]');
      if (!btn) return;
      var code = btn.dataset.lang;
      fab.querySelectorAll('.flag').forEach(function (b) { b.classList.remove('active'); });
      btn.classList.add('active');
      applyLang(code);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', buildAndMount);
  } else { buildAndMount(); }
  setTimeout(buildAndMount, 1000);
  setTimeout(buildAndMount, 3000);
})();
