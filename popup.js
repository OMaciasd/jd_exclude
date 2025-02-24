document.getElementById("save").addEventListener("click", () => {
 const regexLang = document.getElementById("regexLang").value;
 const regexSalary = document.getElementById("regexSalary").value;
 const highlightKeyword = document.getElementById("highlightKeyword").value;
 const excludeCompanies = document.getElementById("excludeCompanies").value.split(",");
 const excludeContractTypes = document.getElementById("excludeContractTypes").value.split(",");

 chrome.storage.local.set({
   regexLang,
   regexSalary,
   highlightKeyword,
   excludeCompanies,
   excludeContractTypes
 });
});
