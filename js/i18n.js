// Configuración de Idiomas
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_title: "What the heart promised<br /><span class=\"font-light italic text-4xl md:text-6xl block mt-2\">let time not erase</span>",
        hero_desc: "High-end Photography and Cinematography for those who understand that the value of a story is not in capturing it, but in knowing how to preserve it. Exclusivity, innovation, and absolute presence.",
        hero_btn: "Discover the experience",
        about_title: "We don't just capture what happens,<br> we protect what it means",
        about_desc: "At <strong class=\"text-primary font-semibold\">Eternal Vows</strong>, we understand that a wedding is not just a social event, <strong class=\"text-primary font-semibold\">it is a promise.</strong> Our mission is to <strong class=\"text-primary font-semibold\">document the invisible</strong>: the silence before the 'I do', the reverence of commitment, and the truth in every glance. <br>We are here to ensure that <strong class=\"text-primary font-semibold\">today's promises become the treasure of your future generations.</strong>",
        services_specialty: "Our Specialty",
        services_title_1: "Editorial Selection",
        services_subtitle_1: "Cinematography & Author Photography",
        services_desc_1: "We focus on authenticity and editorial aesthetics. A service designed for those seeking technical excellence and a human narrative, capturing the mystique of the union without interruptions.",
        services_li_1: "Editorial style photography",
        services_li_2: "Cinematic 4K highlights film",
        services_li_3: "Fine art retouching",
        services_title_2: "The Legacy Experience",
        services_desc_2: "It is the only experience on the market that allows you to re-listen to your vows and the atmosphere of your wedding from the pages of your book. Luxury you can touch and hear through our Legacy Book and Key Memory technology.",
        legacy_li_1: "Memories that find a voice.",
        legacy_li_2: "Editorial luxury you can hear.",
        legacy_li_3: "Your story in paper and sound.",
        personalities_title: "Fragments of Eternity",
        card1_title: "Freezing the best memory of Melissa & Mathew",
        card1_desc: "There are loves that seem written for the big screen. Between the Caribbean breeze and the elegance of a timeless atmosphere, Melissa and Mathew celebrated a union worthy of a modern fairy tale. A day where luxury met romance under the Riviera Maya sky. <strong>Hit play and immerse yourself in this love movie.</strong>",
        card2_title: "The union of Kendall & Timoty in the Riviera Maya",
        card2_desc: "Authentic, fun, and deeply moving. Kendall and Timoty's wedding in the Riviera Maya was an explosion of honesty and pure joy. From the most intimate vows to a celebration overflowing with energy, watch how this story unfolds where real love is the only protagonist. <strong>Don't miss this emotional journey.</strong>",
        faq_title: "Frequently Asked Questions",
        faq_intro: "Planning a wedding can come with plenty of decisions, big and small. To help you feel confident and informed, we've put together answers to some of the most common questions couples ask us.",
        faq_q1: "How do you define your Photography and Cinematography style?",
        faq_a1: "We move away from traditional poses and forced scripts. Our style is a blend of editorial aesthetics and documentary narrative. We seek to capture the authenticity of the moment: the elegance of details and the truth of emotions, achieving images that are timeless and videos that feel like a personal piece of cinema.",
        faq_q2: "What is your workflow during the event?",
        faq_a2: "Our presence is absolute but discreet. We understand that you should be the protagonists of your own story, not us. We work fluidly, allowing moments to happen organically to capture genuine reactions without interrupting the atmosphere of your wedding.",
        faq_q3: "Why do you limit your annual schedule?",
        faq_a3: "We do not deliver mass-produced work. Each wedding requires a meticulous selection and editing process to ensure the final result meets the Eternal Vows quality standard. By limiting our availability, we guarantee that your story receives all our attention and care.",
        faq_q4: "How far in advance should we contact you?",
        faq_a4: "As a high-end service with limited dates, we recommend booking as soon as you have your date and location confirmed. Currently, our 2026 schedule is already receiving requests. We want to ensure that every couple who trusts us has their space protected.",
        faq_q5: "How can we start the process with Eternal Vows?",
        faq_a5: "It all starts with a conversation. You can fill out our form in the contact section or send us a direct message. We would love to hear your story and confirm availability.",
        faq_footer: "Do you have more questions? We are here to advise you. Being part of the Eternal Vows community means having an ally who understands the value of your promise.",
        contact_why_title: "Why choose Eternal Vows for my wedding?",
        contact_li_1: "<strong class=\"text-gray-800\">Joint</strong> photo & video team",
        contact_li_3: "Staff <strong class=\"text-gray-800\">experienced, professional and friendly</strong>",
        contact_li_4: "Videos delivered in <strong class=\"text-gray-800\">4K</strong>",
        contact_li_5: "<strong class=\"text-gray-800\">Digital photo gallery</strong>",
        contact_li_6: "<strong class=\"text-gray-800\">Installments</strong> available",
        contact_story_title: "Let's tell this story together",
        contact_form_title: "Contact Us",
        label_name: "Your Name *",
        label_partner: "Partner's Name",
        label_email: "Email *",
        placeholder_name: "Enter your name",
        placeholder_partner: "Enter your partner's name",
        placeholder_email: "Enter your email address",
        label_phone: "Phone Number",
        placeholder_phone: "Enter your phone number",
        label_date: "When is your wedding?",
        placeholder_date: "Select the date",
        label_tell: "What is the one thing you would never want to forget about your wedding?",
        placeholder_tell: "Tell us your story...",
        btn_sent: "Send",
        whatsapp_prompt: "Do you prefer an immediate response?",
        whatsapp_btn: "Contact via WhatsApp",
        footer_copyright: "© Eternal Vows Wedding 2026",
        footer_trading: "Eternal Vows wedding is a trading name of NALYN LTD (12103495)"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_portfolio: "Portafolio",
        nav_faq: "Preguntas",
        nav_contact: "Contacto",
        hero_title: "Lo que el corazón prometió<br /><span class=\"font-light italic text-4xl md:text-6xl block mt-2\">que el tiempo no lo borre</span>",
        hero_desc: "Fotografía y Cinematografía de alta gama para quienes entienden que el valor de una historia no está en capturarla, sino en saber preservarla. Exclusividad, innovación y presencia absoluta",
        hero_btn: "Descubre la experiencia",
        about_title: "No solo capturamos lo que sucede,<br> protegemos lo que significa",
        about_desc: "En <strong class=\"text-primary font-semibold\">Eternal Vows</strong>, entendemos que una boda no es solo un evento social,<strong class=\"text-primary font-semibold\">es una promesa.</strong>Nuestra misión es <strong class=\"text-primary font-semibold\">documentar lo invisible</strong>: el silencio antes del 'sí', la reverencia del compromiso y la verdad en cada mirada. <br>Estamos aquí para asegurar que <strong class=\"text-primary font-semibold\">las promesas de hoy sean el tesoro de tus próximas generaciones.</strong>",
        services_specialty: "Nuestra Especialidad",
        services_title_1: "Selección Editorial",
        services_subtitle_1: "Cinematografía & Fotografía de Autor",
        services_desc_1: "Nos enfocamos en la autenticidad y la estética editorial. Un servicio diseñado para quienes buscan excelencia técnica y una narrativa humana, capturando la mística de la unión sin interrupciones.",
        services_li_1: "Fotografía de estilo editorial",
        services_li_2: "Película highlight cinematográfica 4K",
        services_li_3: "Retoque artístico",
        services_title_2: "La Experiencia Legacy",
        services_desc_2: "Es la única experiencia en el mercado que te permite volver a escuchar los votos y la atmósfera de tu boda desde las páginas de tu libro. El lujo que se puede tocar y escuchar a través de nuestro Legacy Book y tecnología Key Memory.",
        legacy_li_1: "Memorias que cobran voz.",
        legacy_li_2: "Lujo editorial que puedes escuchar.",
        legacy_li_3: "Tu historia en papel y sonido.",
        personalities_title: "Fragmentos de Eternidad",
        card1_title: "Congelando el mejor recuerdo de Melissa & Mathew",
        card1_desc: "Hay amores que parecen escritos para la gran pantalla. Entre la brisa del Caribe y la elegancia de una atmósfera atemporal, Melissa y Mathew celebraron una unión digna de un cuento de hadas moderno. Un día donde el lujo se encontró con el romance bajo el cielo de la Riviera Maya.  <strong>Dale play y sumérgete en esta película de amor.</strong>",
        card2_title: "La unión de Kendall & Timoty en la Rivera Maya",
        card2_desc: "Auténtica, divertida y profundamente conmovedora. La boda de Kendall y Timoty en la Riviera Maya fue una explosión de honestidad y alegría pura. Desde los votos más íntimos hasta una celebración que desbordó energía, mira cómo se desarrolla esta historia donde el amor real es el único protagonista. <strong>No te pierdas este viaje emocional.</strong>",
        faq_title: "Preguntas y respuestas frecuentes",
        faq_intro: "Planear una boda puede implicar muchas decisiones, grandes y pequeñas. Para ayudarte a sentirte seguro e informado, hemos recopilado respuestas a algunas de las preguntas más frecuentes que nos hacen las parejas.",
        faq_q1: "¿Cómo definen su estilo de Fotografía y Cinematografía?",
        faq_a1: "Nos alejamos de las poses tradicionales y los guiones forzados. Nuestro estilo es una mezcla de estética editorial y narrativa documental. Buscamos capturar la autenticidad del momento: la elegancia de los detalles y la verdad de las emociones, logrando imágenes que no pasan de moda y videos que se sienten como una pieza de cine personal.",
        faq_q2: "¿Cuál es su forma de trabajar durante el evento?",
        faq_a2: "Nuestra presencia es absoluta pero discreta. Entendemos que ustedes deben ser los protagonistas de su propia historia, no nosotros. Trabajamos de forma fluida, permitiendo que los momentos sucedan de manera orgánica para capturar reacciones genuinas sin interrumpir la atmósfera de su boda.",
        faq_q3: "¿Por qué limitan su agenda anual?",
        faq_a3: "No entregamos trabajos en serie. Cada boda requiere un proceso de selección y edición minucioso para asegurar que el resultado final tenga el estándar de calidad de Eternal Vows. Al limitar nuestra disponibilidad, garantizamos que su historia reciba toda nuestra atención y cuidado.",
        faq_q4: "¿Con cuánta anticipación debemos contactarlos?",
        faq_a4: "Al ser un servicio de alta gama con fechas limitadas, recomendamos reservar en cuanto tengan confirmada su fecha y locación. Actualmente, nuestra agenda para el 2026 ya está recibiendo solicitudes. Queremos asegurar que cada pareja que confía en nosotros tenga su espacio protegido.",
        faq_q5: "¿Cómo podemos iniciar el proceso con Eternal Vows?",
        faq_a5: "Todo comienza con una conversación. Pueden llenar nuestro formulario en la sección de contacto o enviarnos un mensaje directo. Nos encantará conocer su historia y confirmar disponibilidad.",
        faq_footer: "¿Tienes más preguntas? Estamos aquí para asesorarte. Ser parte de la comunidad Eternal Vows significa tener un aliado que entiende el valor de tu promesa.",
        contact_why_title: "¿Por qué elegir Eternal Vows para mi boda?",
        contact_li_1: "<strong class=\"text-gray-800\">Equipo conjunto</strong> de foto y video",
        contact_li_3: "Personal <strong class=\"text-gray-800\">experimentado, profesional y amable</strong>",
        contact_li_4: "Videos entregados en <strong class=\"text-gray-800\">4K</strong>",
        contact_li_5: "<strong class=\"text-gray-800\">Galeria de fotos digital</strong>",
        contact_li_6: "<strong class=\"text-gray-800\">Pagos a plazos</strong> disponibles",
        contact_story_title: "Contemos esta historia juntos",
        contact_form_title: "Contáctenos",
        label_name: "Tu Nombre *",
        label_partner: "Nombre de tu Pareja",
        label_email: "Correo Electrónico *",
        placeholder_name: "Ingresa tu nombre",
        placeholder_partner: "Ingresa el nombre de tu pareja",
        placeholder_email: "Ingresa tu correo electrónico",
        label_phone: "Número de Teléfono",
        placeholder_phone: "Ingresa tu número de teléfono",
        label_date: "¿Cuándo es tu boda?",
        placeholder_date: "Selecciona la fecha",
        label_tell: "¿Qué es aquello que nunca querrían olvidar de su boda?",
        placeholder_tell: "Cuéntanos su historia...",
        btn_sent: "Enviar",
        whatsapp_prompt: "¿Prefieren una respuesta inmediata?",
        whatsapp_btn: "Contactar por WhatsApp",
        footer_copyright: "© Eternal Vows Wedding 2026",
        footer_trading: "Eternal Vows wedding es un nombre comercial de NALYN LTD (12103495)"
    }
};

document.addEventListener('DOMContentLoaded', () => {
    let currentLang = 'es';
    const langToggles = document.querySelectorAll('.lang-toggle');

    langToggles.forEach(btn => {
        btn.addEventListener('click', () => {
            // Cambiar idioma
            currentLang = currentLang === 'en' ? 'es' : 'en';
            

            // Actualizar texto de TODOS los botones de idioma
            langToggles.forEach(b => b.textContent = currentLang === 'en' ? 'ES' : 'EN');

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
    });
});
