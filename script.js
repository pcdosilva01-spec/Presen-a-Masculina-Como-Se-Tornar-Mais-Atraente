// Timer
(function () {
  const key = 'pm_timer_end';
  let end = parseInt(localStorage.getItem(key));
  if (!end || end < Date.now()) {
    end = Date.now() + 15 * 60 * 1000;
    localStorage.setItem(key, end);
  }
  const el = document.getElementById('timer');
  setInterval(() => {
    const diff = Math.max(0, end - Date.now());
    const m = String(Math.floor(diff / 60000)).padStart(2, '0');
    const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');
    if (el) el.textContent = m + ':' + s;
  }, 1000);
})();

// FAQ
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

// Notificações falsas de venda
(function () {
  const nomes = [
    'Carlos S.', 'Matheus R.', 'Felipe A.', 'Bruno L.', 'Gabriel M.',
    'Rodrigo T.', 'Anderson P.', 'Thiago N.', 'Leonardo C.', 'Eduardo V.',
    'Rafael B.', 'Gustavo F.', 'Diego H.', 'Vinicius O.', 'Lucas K.',
    'Henrique M.', 'Pedro A.', 'João V.', 'Alexandre S.', 'Caio R.',
    'Marcelo T.', 'Renato B.', 'Fábio C.', 'Leandro S.', 'Igor M.'
  ];

  const locais = [
    'São Paulo, SP', 'Rio de Janeiro, RJ', 'Belo Horizonte, MG', 'Curitiba, PR',
    'Salvador, BA', 'Fortaleza, CE', 'Manaus, AM', 'Recife, PE', 'Porto Alegre, RS',
    'Goiânia, GO', 'Florianópolis, SC', 'Vitória, ES', 'Natal, RN', 'Campinas, SP',
    'Maceió, AL', 'João Pessoa, PB', 'Ribeirão Preto, SP', 'Uberlândia, MG',
    'Santos, SP', 'São Luís, MA', 'Teresina, PI', 'Campo Grande, MS'
  ];

  const toast = document.getElementById('toast');
  const toastName = document.getElementById('toast-name');
  const toastLocation = document.getElementById('toast-location');

  function showToast() {
    const nome = nomes[Math.floor(Math.random() * nomes.length)];
    const local = locais[Math.floor(Math.random() * locais.length)];
    const mins = Math.floor(Math.random() * 8) + 1;

    toastName.textContent = nome + ' acabou de comprar!';
    toastLocation.textContent = local + ' · há ' + mins + ' min';

    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  // Primeira notificação após 4s, depois a cada 20-35s
  setTimeout(function loop() {
    showToast();
    const next = 20000 + Math.random() * 15000;
    setTimeout(loop, next);
  }, 4000);
})();
