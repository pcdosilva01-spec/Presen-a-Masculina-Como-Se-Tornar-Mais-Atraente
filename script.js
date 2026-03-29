// Timer sincronizado (top bar + urgency bar)
(function () {
  const key = 'pm_timer_end';
  let end = parseInt(localStorage.getItem(key));
  if (!end || end < Date.now()) {
    end = Date.now() + 15 * 60 * 1000;
    localStorage.setItem(key, end);
  }

  const els = [document.getElementById('timer'), document.getElementById('timer2')];

  function update() {
    const diff = Math.max(0, end - Date.now());
    const m = String(Math.floor(diff / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    const text = `${m}:${s}`;
    els.forEach(el => { if (el) el.textContent = text; });
    if (diff === 0) localStorage.removeItem(key);
  }

  update();
  setInterval(update, 1000);
})();

// FAQ Accordion
document.querySelectorAll('.faq-q').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const isOpen = btn.classList.contains('open');
    document.querySelectorAll('.faq-q.open').forEach(b => {
      b.classList.remove('open');
      b.nextElementSibling.classList.remove('open');
    });
    if (!isOpen) {
      btn.classList.add('open');
      answer.classList.add('open');
    }
  });
});

// Notificações de compra
(function () {
  const nomes = [
    'Carlos S.', 'Matheus R.', 'Felipe A.', 'Bruno L.', 'Gabriel M.',
    'Rodrigo T.', 'Anderson P.', 'Thiago N.', 'Leonardo C.', 'Eduardo V.',
    'Rafael B.', 'Gustavo F.', 'Diego H.', 'Vinicius O.', 'Lucas K.',
    'Henrique M.', 'Pedro A.', 'João V.', 'Alexandre S.', 'Caio R.'
  ];

  const locais = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR',
    'Salvador, BA', 'Fortaleza, CE', 'Manaus, AM', 'Recife, PE', 'Porto Alegre, RS',
    'Goiânia, GO', 'Belém, PA', 'Florianópolis, SC', 'Vitória, ES', 'Natal, RN',
    'Campo Grande, MS', 'Maceió, AL', 'João Pessoa, PB', 'Teresina, PI',
    'Campinas, SP', 'Santos, SP', 'Ribeirão Preto, SP', 'Uberlândia, MG'
  ];

  const toast = document.getElementById('toast');
  const toastName = document.getElementById('toast-name');
  const toastLocation = document.getElementById('toast-location');

  function showToast() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const local = locais[Math.floor(Math.random() * locais.length)];
    const mins = Math.floor(Math.random() * 9) + 1;

    toastName.textContent = `${nome} acabou de comprar!`;
    toastLocation.textContent = `${local} · há ${mins} min`;

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  setTimeout(function loop() {
    showToast();
    setTimeout(loop, 30000);
  }, 5000);
})();
