console.log('🔎 LinkedIn Job Filter is running...');

chrome.storage.local.get([
  'regexLang',
  'regexSalary',
  'highlightKeyword',
  'excludeCompanies',
  'excludeContractTypes',
  'includeEnglish',
  'company',
  'position'
], data => {

  let regexEnglish = new RegExp(
    data.regexLang || '\\b(remote|developer|engineer|manager|full time|contract|internship|entry level|senior|junior|lead)\\b',
    'i'
  );

  let highlightKeyword = data.highlightKeyword || 'inglés';
  let excludeCompanies = (data.excludeCompanies || []).map(c => c.toLowerCase().trim());
  let excludeContractTypes = (data.excludeContractTypes || []).map(c => c.toLowerCase().trim());
  let includeEnglish = data.includeEnglish || false;
  let company = data.company ? data.company.toLowerCase().trim() : "";
  let position = data.position ? data.position.toLowerCase().trim() : "";

  function filterJobs() {
    let jobPosts = document.querySelectorAll('.jobs-search-results__list-item, .job-card-container');

    jobPosts.forEach(post => {
      let text = post.innerText.toLowerCase() || post.textContent.toLowerCase();

      // Filtros básicos
      let matchesCompany = company ? text.includes(company) : true;
      let matchesPosition = position ? text.includes(position) : true;

      // Otros filtros
      let isEnglish = regexEnglish.test(text);
      let containsKeyword = new RegExp(`\\b${highlightKeyword}\\b`, 'i').test(text);
      let isExcludedCompany = excludeCompanies.some(c => text.includes(c));
      let isExcludedContract = excludeContractTypes.some(c => text.includes(c));

      // Aplicar condiciones de exclusión
      if (!matchesCompany || !matchesPosition) {
        post.style.display = 'none';
      } else if (isExcludedCompany || isExcludedContract) {
        post.style.display = 'none';
      } else if (isEnglish && !includeEnglish) {
        post.style.display = 'none';
      } else {
        post.style.display = ''; // Asegura que las ofertas válidas sean visibles
      }

      // Resaltado si contiene la palabra clave
      if (containsKeyword) {
        post.style.backgroundColor = 'yellow';
        post.style.fontWeight = 'bold';
      }

      // Resaltar en verde si se permite inglés
      if (includeEnglish && isEnglish) {
        post.style.border = '2px solid green';
      }
    });
  }

  // Función de debounce para evitar ejecuciones excesivas
  function debounce(func, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
  }

  // Observar cambios en la página y aplicar filtro
  let observer = new MutationObserver(debounce(filterJobs, 500));
  observer.observe(document.body, { childList: true, subtree: true });

  // Aplicar filtro después de cargar la página
  setTimeout(filterJobs, 2000);
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensaje recibido en content script:", request);
  if (request.message === "open_new_tab") {
    console.log("Abrir nueva pestaña...");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensaje recibido en content script:", request);
  if (request.message === "open_new_tab") {
    console.log("Abrir nueva pestaña...");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensaje recibido en content script:", request);
  if (request.message === "open_new_tab") {
    console.log("Abrir nueva pestaña...");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensaje recibido en content script:", request);
  if (request.message === "open_new_tab") {
    console.log("Abrir nueva pestaña...");
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Mensaje recibido en content script:", request);
  if (request.message === "open_new_tab") {
    console.log("Abrir nueva pestaña...");
  }
});
