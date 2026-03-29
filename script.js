// Timer
(function () {
  const key = 'pm_end';
  let end = parseInt(localStorage.getItem(key));
  if (!end || end < Date.now()) {
    end = Date.now() + 15 * 60 * 1000;
    localStorage.setItem(key, end);
  }
  const el = document.getElementById('timer');
  setInterval(() => {
    const d = Math.max(0, end - Date.now());
    const m = String(Math.floor(d / 60000)).padStart(2, '0');
    const s = String(Math.floor((d % 60000) / 1000)).padStart(2, '0');
    if (el) el.textContent = m + ':' + s;
  }, 1000);
})();

// FAQ
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const a = btn.nextElementSibling;
    const open = btn.classList.contains('open');
    document.querySelectorAll('.faq-q.open').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!open) { btn.classList.add('open'); a.classList.add('open'); }
  });
});

// Notificações falsas
(function () {
  const nomes = ['Carlos S.','Matheus R.','Felipe A.','Bruno L.','Gabriel M.','Rodrigo T.','Anderson P.','Thiago N.','Leonardo C.','Eduardo V.','Rafael B.','Gustavo F.','Diego H.','Vinicius O.','Lucas K.','Henrique M.','Pedro A.','João V.','Caio R.','Marcelo T.'];
  const locais = ['São Paulo, SP','Rio de Janeiro, RJ','Belo Horizonte, MG','Curitiba, PR','Salvador, BA','Fortaleza, CE','Recife, PE','Porto Alegre, RS','Goiânia, GO','Florianópolis, SC','Campinas, SP','Manaus, AM','Natal, RN','Maceió, AL','Uberlândia, MG'];

  const toast = document.getElementById('toast');
  const name = document.getElementById('toast-name');
  const loc = document.getElementById('toast-loc');

  function show() {
    name.textContent = nomes[Math.floor(Math.random() * nomes.length)] + ' acabou de comprar!';
    loc.textContent = locais[Math.floor(Math.random() * locais.length)] + ' · há ' + (Math.floor(Math.random() * 8) + 1) + ' min';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  setTimeout(function loop() {
    show();
    setTimeout(loop, 18000 + Math.random() * 12000);
  }, 5000);
})();
