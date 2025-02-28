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

      let matchesCompany = company ? text.includes(company) : true;
      let matchesPosition = position ? text.includes(position) : true;
      let isEnglish = regexEnglish.test(text);
      let containsKeyword = new RegExp(`\\b${highlightKeyword}\\b`, 'i').test(text);
      let isExcludedCompany = excludeCompanies.some(c => text.includes(c));
      let isExcludedContract = excludeContractTypes.some(c => text.includes(c));

      if (!matchesCompany || !matchesPosition || isExcludedCompany || isExcludedContract || (isEnglish && !includeEnglish)) {
        console.log("🚫 Ocultando:", text);
        post.style.display = 'none';
      } else {
        post.style.display = '';
      }

      if (containsKeyword) {
        post.style.backgroundColor = 'yellow';
        post.style.fontWeight = 'bold';
      }

      if (includeEnglish && isEnglish) {
        post.style.border = '2px solid green';
      }
    });
  }

  function debounce(func, delay) {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(this, arguments), delay);
    };
  }

  let observer = new MutationObserver(debounce(filterJobs, 750));
  observer.observe(document.body, { childList: true, subtree: true });

  setTimeout(filterJobs, 2000);
});

// 📩 Un solo listener para recibir mensajes
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("📩 Mensaje recibido:", request);
  if (request.message === "open_new_tab") {
    console.log("🌍 Abriendo nueva pestaña...");
    window.open("https://www.linkedin.com/jobs/", "_blank");
  }
  sendResponse({ status: "✅ Acción procesada" });
});

// 📩 Enviar mensaje al background script
chrome.runtime.sendMessage({ message: "open_new_tab" }, response => {
  console.log("📩 Respuesta del background script:", response);
});

// 📩 Enviar mensaje a los tabs activos de LinkedIn
chrome.tabs.query({ active: true, currentWindow: true, url: "*://*.linkedin.com/*" }, (tabs) => {
  tabs.forEach(tab => {
    chrome.tabs.sendMessage(tab.id, { message: "open_new_tab" }, response => {
      console.log("📩 Respuesta del tab activo:", response);
    });
  });
});
