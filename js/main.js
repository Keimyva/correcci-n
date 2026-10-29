(function() {
    var D = {
        "Inicio": "Home",
        "Servicios": "Services",
        "Funciones": "Features",
        "Contacto": "Contact",
        "CRM a la medida": "Custom CRM",
        "Costa Rica · Desde hace más de 15 años": "Costa Rica · Over 15 years of experience",
        "Tu aliado informático para": "Your IT ally to",
        "tomar control de tus activos digitales": "take control of your digital assets",
        "Desarrollo web, sistemas a medida, CRM y marketing digital para mejorar las ventas y operaciones de tu empresa.": "Web development, custom systems, CRM and digital marketing to improve your company’s sales and operations.",
        "Ver servicios": "View services",
        "Ver soluciones": "View solutions",
        "años de experiencia": "years of experience",
        "servicios clave": "key services",
        "planes de CRM": "CRM plans",
        "Servicios informáticos": "IT services",
        "Soluciones digitales de alto nivel": "High-level digital solutions",
        "Aliado estratégico de empresas de múltiples industrias, con sistemas personalizados y gestión avanzada de datos.": "Strategic partner of companies across many industries, with custom systems and advanced data management.",
        "Consultoría y soporte técnico": "Consulting and technical support",
        "Asesoría y acompañamiento experto, además de creación de contenido.": "Expert advice and guidance, plus content creation.",
        "Desarrollo web y aplicaciones": "Web and app development",
        "Sitios y aplicaciones modernas, rápidas y hechas para tu negocio.": "Modern, fast sites and apps built for your business.",
        "Bases de datos": "Databases",
        "Desarrollo y gestión de bases de datos y software a medida.": "Database development and management, plus custom software.",
        "Integraciones y APIs": "Integrations and APIs",
        "Conectamos tus sistemas para que trabajen juntos y automaticen procesos.": "We connect your systems so they work together and automate processes.",
        "Mercadeo digital": "Digital marketing",
        "Estrategia, posicionamiento SEO y SEM para atraer más clientes.": "Strategy, SEO and SEM positioning to attract more customers.",
        "CRMs y ERPs a medida": "Custom CRMs and ERPs",
        "Plataformas a la medida de tu operación, flexibles y escalables.": "Platforms tailored to your operation, flexible and scalable.",
        "CRM en la nube": "Cloud CRM",
        "ClickApp: todo tu negocio en un solo lugar": "ClickApp: your whole business in one place",
        "Gestioná clientes, proveedores, proyectos, ventas, compras, pagos y facturas, con comunicación eficiente hacia tu audiencia.": "Manage customers, suppliers, projects, sales, purchases, payments and invoices, with efficient communication to your audience.",
        "Básica": "Basic",
        "/mes": "/mo",
        "5,000 clientes": "5,000 customers",
        "25 proyectos / campañas": "25 projects / campaigns",
        "5,000 productos": "5,000 products",
        "10,000 suscriptores": "10,000 subscribers",
        "10,000 clientes": "10,000 customers",
        "50 proyectos / campañas": "50 projects / campaigns",
        "10,000 productos": "10,000 products",
        "25,000 suscriptores": "25,000 subscribers",
        "Reportes personalizados": "Custom reports",
        "Ver planes": "View plans",
        "Clientes y proveedores": "Customers and suppliers",
        "Automatizá acciones para impulsar ventas y compras.": "Automate actions to boost sales and purchases.",
        "Proyectos y negocios": "Projects and deals",
        "Controlá la ejecución interna y el seguimiento de oportunidades.": "Control internal execution and track opportunities.",
        "Ventas y compras": "Sales and purchases",
        "Integrá pagos, facturas y transacciones en un solo lugar.": "Bring payments, invoices and transactions together in one place.",
        "Una solución flexible, segura y escalable": "A flexible, secure and scalable solution",
        "Centraliza clientes, productos, proveedores y transacciones, con segmentación, automatización de tareas y seguimiento de ventas y compras para decidir mejor.": "Centralize customers, products, suppliers and transactions, with segmentation, task automation and sales and purchase tracking to make better decisions.",
        "Más información": "Learn more",
        "¿Hablamos de tu proyecto?": "Let’s talk about your project?",
        "Estamos en San José, Costa Rica.": "We are in San José, Costa Rica.",
        "Escribinos por WhatsApp": "Message us on WhatsApp",
        "Enviar correo": "Send email",
        "Resumen basado en dynamicadvance.com · © Dynamic Advance S.A.": "Summary based on dynamicadvance.com · © Dynamic Advance S.A."
    };

    var nodes = [],
        w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT),
        r = document.documentElement,
        m = document.getElementById('menu'),
        hb = document.getElementById('hb'),
        lg = document.getElementById('lg'),
        th = document.getElementById('th');

    while (w.nextNode()) {
        var n = w.currentNode,
            t = n.nodeValue.trim();
        if (D[t]) {
            nodes.push([n, n.nodeValue, n.nodeValue.replace(t, function() {
                return D[t];
            })]);
        }
    }

    function save(k, v) {
        try {
            localStorage.setItem(k, v);
        } catch (e) {}
    }

    function load(k, d) {
        try {
            return localStorage.getItem(k) || d;
        } catch (e) {
            return d;
        }
    }

    function setLang(l) {
        nodes.forEach(function(x) {
            x[0].nodeValue = l === 'en' ? x[2] : x[1];
        });
        r.lang = l;
        lg.innerHTML = ['es', 'en'].map(function(k) {
            return '<span' + (k === l ? ' class="on"' : '') + '>' + k.toUpperCase() + '</span>';
        }).join('<i>/</i>');
        save('da-lang', l);
    }

    function setTheme(t) {
        r.setAttribute('data-theme', t);
        th.textContent = t === 'dark' ? '☀️' : '🌙';
        save('da-theme', t);
    }

    lg.onclick = function() {
        setLang(r.lang === 'en' ? 'es' : 'en');
    };

    th.onclick = function() {
        setTheme(r.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    };

    hb.onclick = function(e) {
        e.stopPropagation();
        var o = m.classList.toggle('open');
        hb.setAttribute('aria-expanded', o);
    };

    m.onclick = function() {
        m.classList.remove('open');
    };

    document.addEventListener('click', function() {
        m.classList.remove('open');
    });

    setTheme(load('da-theme', 'dark'));
    setLang(load('da-lang', 'es'));
})();