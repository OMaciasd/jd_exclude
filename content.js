console.log("🔎 LinkedIn Job Filter is running...");

// Cargar filtros y verificar si el usuario activó el filtrado
chrome.storage.local.get(["regexLang", "regexSalary", "highlightKeyword", "filterEnabled"], (data) => {
 if (!data.filterEnabled) {
  console.log("❌ Filtro desactivado.");
  return; // No ejecutar el script si el usuario lo desactivó
 }

 const regexEnglish = new RegExp(
  data.regexLang || "\\b(remote|developer|engineer|manager|full time|contract|internship)\\b", "i"
 );
 const highlightKeyword = data.highlightKeyword || "inglés";
 const regexSalary = new RegExp(
  data.regexSalary || "\\b(\\$|€)?\\d{1,3}(,\\d{3})*(\\.\\d{1,2})?(K|k|M|m|mil|millón|anual|mes)\\b", "i"
 );

 function filterJobs() {
  let jobPosts = document.querySelectorAll(".jobs-search-results__list-item, .jobs-search-results-list__list-item");

  jobPosts.forEach((post) => {
   let text = post.innerText || post.textContent;

   let isEnglish = regexEnglish.test(text);
   let containsKeyword = new RegExp(`\\b${highlightKeyword}\\b`, "i").test(text);
   let hasSalary = regexSalary.test(text);

   // Ocultar si la oferta está en inglés
   if (isEnglish) {
    post.style.display = "none";
    return;
   }

   // Ocultar si menciona salario
   if (hasSalary) {
    post.style.display = "none";
    return;
   }

   // Resaltar si está en español y menciona "inglés"
   if (containsKeyword) {
    post.style.backgroundColor = "yellow";
    post.style.fontWeight = "bold";
   }
  });
 }

 let observer = new MutationObserver(() => {
  filterJobs();
 });

 observer.observe(document.body, { childList: true, subtree: true });

 setTimeout(filterJobs, 2000);
});


