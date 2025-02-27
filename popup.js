document.addEventListener('DOMContentLoaded', function () {
    const advancedModeToggle = document.getElementById('advancedMode');
    const advancedFilters = document.getElementById('advancedFilters');

    // Cargar estado del Modo Avanzado
    chrome.storage.local.get(['advancedMode'], data => {
        if (data.advancedMode) {
            advancedModeToggle.checked = true;
            advancedFilters.classList.remove('hidden');
        }
    });

    // Activar/Desactivar los filtros avanzados al cambiar el toggle
    advancedModeToggle.addEventListener('change', function () {
        if (this.checked) {
            advancedFilters.classList.remove('hidden');
        } else {
            advancedFilters.classList.add('hidden');
        }
        chrome.storage.local.set({ advancedMode: this.checked });
    });

    // Guardar filtros cuando se aplica
    document.getElementById('filterForm').addEventListener('submit', function (e) {
        e.preventDefault();

        chrome.storage.local.set({
            includeEnglish: document.getElementById('includeEnglish').checked,
            advancedMode: advancedModeToggle.checked,
            company: document.getElementById('company').value,
            position: document.getElementById('position').value
        });

        alert('Filters applied!');
    });
});
