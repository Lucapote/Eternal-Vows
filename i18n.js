// Configuración de Idiomas
const translations = {
    en: {
        nav_home: "Home",
        nav_about: "About",
        nav_portfolio: "Portfolio",
        nav_faq: "FAQ",
        nav_contact: "Contact",
        hero_title: "Reliable & Professional<br /><span class=\"font-light italic text-4xl md:text-6xl block mt-2\">Wedding Photography & Videography</span>",
        hero_desc: "Capturing your love story in stunning photos & 4k films, anywhere your heart takes you.",
        hero_btn: "Learn More",
        about_title: "Timeless <span class=\"text-gray-800 font-serif text-4xl md:text-5xl not-italic ml-2\">Wedding Photography & Video</span>",
        about_desc: "Eternal Vows Wedding Studio is a <strong class=\"text-primary font-semibold\">Buckinghamshire based wedding videography and photography team</strong>, specialising in <strong class=\"text-primary font-semibold\">luxury wedding films</strong> and photography <strong class=\"text-primary font-semibold\">across UK and whole Europe</strong>. With a documentary approach, we capture your day naturally—preserving genuine emotions, elegant details, and timeless moments. <a class=\"text-primary underline hover:text-primary transition-colors\" href=\"#\">Contact us</a> today to learn more.",
        personalities_title: "Weddings That Show Your Personalities",
        card1_title: "Edita and Gavin wedding in Chateau de doux",
        card1_desc: "Gavin proposed to Edita while ice skating beneath the Christmas lights at Rockefeller Center in New York. Their wedding in France felt like it was cut straight from a movie. Watch the video.",
        card2_title: "Aubree and Anthony wedding in Pesmes France",
        card2_desc: "Aubree & Anthony traveled from the USA to Pesmes, France to exchange vows. Their wedding is raw, honest, funny, and deeply moving—an unforgettable celebration of love. Watch their story unfold.",
        gallery_link: "View Our Wedding Photography Galleries",
        faq_title: "Frequently Asked Questions",
        faq_intro: "Planning a wedding can come with plenty of decisions, big and small. To help you feel confident and informed, we've put together answers to some of the most common questions couples ask us.",
        faq_q1: "We're awkward in front of the camera — will that be a problem?",
        faq_a1: "Not at all. Most couples feel that way at first. That's why I spend time getting to know you before the day, so it doesn't feel like a stranger is pointing a camera at you. My goal is to make you feel comfortable, safe, and free to just be yourselves.",
        faq_q2: "We're not sure about hiring a videographer. How do we know if it's worth it?",
        faq_a2: "Video captures the movement and sound that photos cannot. Hearing your vows and seeing the laughter in motion brings the memories back to life in a unique way.",
        faq_q3: "What is your approach towards making a wedding film?",
        faq_a3: "We take a documentary approach, staying in the background to capture natural, candid moments as they unfold, creating a cinematic story of your day.",
        faq_q4: "Do you travel?",
        faq_a4: "Yes! We love to travel and capture weddings across the UK and Europe. Contact us for a custom quote based on your location.",
        contact_why_title: "Why Book Eternal Vows Wedding?",
        contact_li_1: "<strong class=\"text-gray-800\">Co-working</strong> photo & video team",
        contact_li_2: "<strong class=\"text-gray-800\">Drone</strong> included (weather permitted)",
        contact_li_3: "<strong class=\"text-gray-800\">Reliable & Friendly</strong> Experienced Staffs",
        contact_li_4: "<strong class=\"text-gray-800\">4K</strong> film delivery",
        contact_li_5: "<strong class=\"text-gray-800\">Digital photo gallery</strong>",
        contact_li_6: "<strong class=\"text-gray-800\">Instalments</strong> available",
        contact_story_title: "Let's tell your story together",
        contact_email_label: "Email :",
        contact_form_title: "Contact us",
        label_name: "Your Name *",
        label_partner: "Your Partner's Name",
        label_email: "Email *",
        label_phone: "Phone Number",
        label_service: "What service are you interested in?",
        label_location: "Where is your wedding?",
        label_hear: "How did you hear about us?",
        label_tell: "Tell us about you two?",
        option_both: "Photography, Videography or both",
        option_photo: "Photography Only",
        option_video: "Videography Only",
        disclaimer: "Our goal is to provide a unique, personalized experience tailored to each couple. We provide a variety of bespoke wedding collections. By clicking Submit you agree to our Privacy Policy & Terms and Conditions.",
        btn_sent: "Sent",
        footer_copyright: "© Eternal Vows Wedding 2026",
        footer_trading: "Eternal Vows wedding is a trading name of NALYN LTD (12103495)"
    },
    es: {
        nav_home: "Inicio",
        nav_about: "Nosotros",
        nav_portfolio: "Portafolio",
        nav_faq: "Preguntas",
        nav_contact: "Contacto",
        hero_title: "Confiable y Profesional<br /><span class=\"font-light italic text-4xl md:text-6xl block mt-2\">Fotografía y Video de Bodas</span>",
        hero_desc: "Capturando su historia de amor en fotos impresionantes y películas 4k, donde sea que su corazón los lleve.",
        hero_btn: "Saber Más",
        about_title: "Atemporal <span class=\"text-gray-800 font-serif text-4xl md:text-5xl not-italic ml-2\">Fotografía y Video de Bodas</span>",
        about_desc: "Eternal Vows Wedding Studio es un equipo de <strong class=\"text-primary font-semibold\">videografía y fotografía de bodas en Buckinghamshire</strong>, especializado en <strong class=\"text-primary font-semibold\">películas de bodas de lujo</strong> y fotografía <strong class=\"text-primary font-semibold\">en todo el Reino Unido y Europa</strong>. Con un enfoque documental, capturamos su día de forma natural, preservando emociones genuinas, detalles elegantes y momentos atemporales. <a class=\"text-primary underline hover:text-primary transition-colors\" href=\"#\">Contáctenos</a> hoy para saber más.",
        personalities_title: "Bodas que Muestran sus Personalidades",
        card1_title: "Boda de Edita y Gavin en Chateau de doux",
        card1_desc: "Gavin le propuso matrimonio a Edita mientras patinaban sobre hielo bajo las luces de Navidad en el Rockefeller Center de Nueva York. Su boda en Francia pareció sacada directamente de una película. Mira el video.",
        card2_title: "Boda de Aubree y Anthony en Pesmes, Francia",
        card2_desc: "Aubree y Anthony viajaron desde EE. UU. a Pesmes, Francia, para intercambiar votos. Su boda es cruda, honesta, divertida y profundamente conmovedora: una celebración inolvidable del amor. Mira cómo se desarrolla su historia.",
        gallery_link: "Ver Nuestras Galerías de Fotografía de Bodas",
        faq_title: "Preguntas Frecuentes",
        faq_intro: "Planificar una boda conlleva muchas decisiones, grandes y pequeñas. Para ayudarte a sentirte seguro e informado, hemos reunido respuestas a algunas de las preguntas más comunes que nos hacen las parejas.",
        faq_q1: "Nos sentimos incómodos frente a la cámara, ¿será un problema?",
        faq_a1: "Para nada. La mayoría de las parejas se sienten así al principio. Por eso paso tiempo conociéndolos antes del día, para que no se sienta como si un extraño les estuviera apuntando con una cámara. Mi objetivo es hacerlos sentir cómodos, seguros y libres de ser ustedes mismos.",
        faq_q2: "No estamos seguros de contratar a un videógrafo. ¿Cómo sabemos si vale la pena?",
        faq_a2: "El video captura el movimiento y el sonido que las fotos no pueden. Escuchar sus votos y ver la risa en movimiento devuelve la vida a los recuerdos de una manera única.",
        faq_q3: "¿Cuál es su enfoque para hacer una película de bodas?",
        faq_a3: "Adoptamos un enfoque documental, manteniéndonos en segundo plano para capturar momentos naturales y sinceros a medida que se desarrollan, creando una historia cinematográfica de su día.",
        faq_q4: "¿Viajan?",
        faq_a4: "¡Sí! Nos encanta viajar y capturar bodas en todo el Reino Unido y Europa. Contáctenos para una cotización personalizada basada en su ubicación.",
        contact_why_title: "¿Por qué reservar con Eternal Vows Wedding?",
        contact_li_1: "<strong class=\"text-gray-800\">Equipo conjunto</strong> de foto y video",
        contact_li_2: "<strong class=\"text-gray-800\">Dron</strong> incluido (si el clima lo permite)",
        contact_li_3: "<strong class=\"text-gray-800\">Personal</strong> experimentado, confiable y amable",
        contact_li_4: "<strong class=\"text-gray-800\">Entrega</strong> de película en 4K",
        contact_li_5: "<strong class=\"text-gray-800\">Galería</strong> de fotos digital",
        contact_li_6: "<strong class=\"text-gray-800\">Pagos a plazos</strong> disponibles",
        contact_story_title: "Contemos su historia juntos",
        contact_email_label: "Correo electrónico :",
        contact_form_title: "Contáctanos",
        label_name: "Tu Nombre *",
        label_partner: "Nombre de tu Pareja",
        label_email: "Correo Electrónico *",
        label_phone: "Número de Teléfono",
        label_service: "¿En qué servicio estás interesado?",
        label_location: "¿Dónde es tu boda?",
        label_hear: "¿Cómo te enteraste de nosotros?",
        label_tell: "Cuéntanos sobre ustedes dos",
        option_both: "Fotografía, Videografía o ambos",
        option_photo: "Solo Fotografía",
        option_video: "Solo Videografía",
        disclaimer: "Nuestro objetivo es brindar una experiencia única y personalizada adaptada a cada pareja. Ofrecemos una variedad de colecciones de bodas a medida. Al hacer clic en Enviar, aceptas nuestra Política de Privacidad y Términos y Condiciones.",
        btn_sent: "Enviar",
        footer_copyright: "© Eternal Vows Wedding 2026",
        footer_trading: "Eternal Vows wedding es un nombre comercial de NALYN LTD (12103495)"
    }
};

let currentLang = 'en';
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
});