document.addEventListener("DOMContentLoaded", () => {
 const regexLangInput = document.getElementById("regexLang");
 const regexSalaryInput = document.getElementById("regexSalary");
 const highlightKeywordInput = document.getElementById("highlightKeyword");
 const enableFilterCheckbox = document.getElementById("enableFilter");
 const saveButton = document.getElementById("save");

 // Cargar configuraciones guardadas
 chrome.storage.local.get(["regexLang", "regexSalary", "highlightKeyword", "filterEnabled"], (data) => {
  if (data.regexLang) regexLangInput.value = data.regexLang;
  if (data.regexSalary) regexSalaryInput.value = data.regexSalary;
  if (data.highlightKeyword) highlightKeywordInput.value = data.highlightKeyword;
  enableFilterCheckbox.checked = data.filterEnabled ?? true; // Activado por defecto
 });

 saveButton.addEventListener("click", () => {
  chrome.storage.local.set({
   regexLang: regexLangInput.value,
   regexSalary: regexSalaryInput.value,
   highlightKeyword: highlightKeywordInput.value,
   filterEnabled: enableFilterCheckbox.checked
  }, () => {
   alert("Filtros guardados correctamente.");
  });
 });
});

