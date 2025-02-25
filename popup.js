document.addEventListener('DOMContentLoaded', function () {
    const advancedModeToggle = document.getElementById('advancedMode');
    const advancedOptions = document.getElementById('advancedOptions');

    // Cargar estado del toggle desde storage
    chrome.storage.local.get('advancedMode', data => {
        if (data.advancedMode) {
            advancedModeToggle.checked = true;
            advancedOptions.classList.remove('hidden');
        }
    });

    // Mostrar/ocultar opciones avanzadas
    advancedModeToggle.addEventListener('change', function () {
        if (this.checked) {
            advancedOptions.classList.remove('hidden');
        } else {
            advancedOptions.classList.add('hidden');
        }
        chrome.storage.local.set({ advancedMode: this.checked });
    });

    // Guardar filtros en almacenamiento local al aplicar
    document.getElementById('filterForm').addEventListener('submit', function (e) {
        e.preventDefault();

        chrome.storage.local.set({
            includeEnglish: document.getElementById('includeEnglish').checked,
            regexSalary: document.getElementById('regexSalary').value,
            excludeCompanies: document.getElementById('excludeCompanies').value.split(',').map(s => s.trim()),
            excludeContractTypes: document.getElementById('excludeContractTypes').value.split(',').map(s => s.trim()),
            advancedMode: advancedModeToggle.checked
        });

        alert('Filters applied!');
    });
});
