console.log('🔎 LinkedIn Job Filter is running...')

// Cargar filtros guardados por el usuario
chrome.storage.local.get(
  [
    'regexLang',
    'regexSalary',
    'highlightKeyword',
    'excludeCompanies',
    'excludeContractTypes'
  ],
  data => {
    let regexEnglish = new RegExp(
      data.regexLang ||
        '\\b(remote|developer|engineer|manager|full time|contract|internship)\\b',
      'i'
    )
    let highlightKeyword = data.highlightKeyword || 'inglés'

    let regexSalary = new RegExp(
      data.regexSalary ||
        '\\b(\\$|€)?\\d{1,3}(,\\d{3})*(\\.\\d{1,2})?(K|k|M|m|mil|millón|anual|mes)\\b',
      'i'
    )

    let excludeCompanies = data.excludeCompanies || []
    let excludeContractTypes = data.excludeContractTypes || []

    function filterJobs () {
      let jobPosts = document.querySelectorAll(
        '.jobs-search-results__list-item'
      )

      jobPosts.forEach(post => {
        let text = post.innerText || post.textContent

        let isEnglish = regexEnglish.test(text)
        let containsKeyword = new RegExp(`\\b${highlightKeyword}\\b`, 'i').test(
          text
        )
        let hasSalary = regexSalary.test(text)

        // Verificar si la empresa está en la lista de exclusión
        let isExcludedCompany = excludeCompanies.some(company =>
          text.includes(company.trim())
        )

        // Verificar si el tipo de contrato está en la lista de exclusión
        let isExcludedContract = excludeContractTypes.some(contract =>
          text.includes(contract.trim())
        )

        // Ocultar si menciona salario
        if (hasSalary || isExcludedCompany || isExcludedContract) {
          post.style.display = 'none'
        }
        // Ocultar si está en inglés
        else if (isEnglish) {
          post.style.display = 'none'
        }
        // Resaltar si está en español y menciona "inglés"
        else if (containsKeyword) {
          post.style.backgroundColor = 'yellow'
          post.style.fontWeight = 'bold'
        }
      })
    }

    let observer = new MutationObserver(() => {
      filterJobs()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    // Filtrar inicialmente después de la carga
    setTimeout(filterJobs, 2000)
  }
)
