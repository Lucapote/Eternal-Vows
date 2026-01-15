(function () {
    // INICIALIZACIÓN: Reemplaza "TU_PUBLIC_KEY" con la clave pública de tu cuenta de EmailJS
    // Puedes encontrarla en: Account > API Keys > Public Key
    emailjs.init("EnRw9LEYOMk0Hm15H");
})();

const contactForm = document.getElementById('contact-form');

if (!contactForm) {
} else {
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const btn = event.target.querySelector('button[type="submit"]');
        const originalBtnText = btn.innerText;

        // Cambiar texto del botón para feedback visual
        btn.disabled = true; // Deshabilitar para evitar múltiples clics
        btn.innerText = 'Enviando...';
        btn.classList.add('opacity-75', 'cursor-not-allowed'); // Feedback visual opcional

        // CONFIGURACIÓN: Reemplaza con tus IDs de EmailJS
        const serviceID = 'service_5cobk5n';   // Ejemplo: 'service_gmail'
        const templateID = 'template_t14fo19'; // Ejemplo: 'template_contact'

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.innerText = '¡Enviado!';
                alert('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
                event.target.reset(); // Limpiar formulario
                setTimeout(() => {
                    btn.innerText = originalBtnText;
                    btn.disabled = false;
                    btn.classList.remove('opacity-75', 'cursor-not-allowed');
                }, 3000);
            }, (err) => {
                btn.innerText = originalBtnText;
                btn.disabled = false;
                btn.classList.remove('opacity-75', 'cursor-not-allowed');
            });
    });
}