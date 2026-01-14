let currentLang = 'es';
const langToggle = document.getElementById('lang-toggle');

langToggle.addEventListener('click', () => {
    // Cambiar idioma
    currentLang = currentLang === 'en' ? 'es' : 'en';
    // Actualizar texto del botón
    langToggle.textContent = currentLang === 'en' ? 'ES' : 'EN';

    // Actualizar textos de la página
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[currentLang][key]) {
            el.innerHTML = translations[currentLang][key];
        }
    });
    // Actualizar placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[currentLang][key]) {
            el.setAttribute('placeholder', translations[currentLang][key]);
        }
    });
});