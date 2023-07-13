import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    es: {
        translation: {
            "nav1": "¿Quien soy?",
            "nav2": "Mis proyectos",
            "nav3": "Experiencia",
            "nav4": "Contactame",

            "Hola soy David": "Hola, Soy David",

            "ing de soft": "Ingeniero de Software",

            "mi info": "Mucho gusto, soy ingeniero de software titulado que se especializa en el ambito del desarrollo web y movil, tambien eh tenido la oportunidad de trabajar en proyectos web y movil, asi como apoyo en la toma de requerimientos y creación de sistemas",

            "mi cv": "Revisa mi CV",

            "mis proyectos": "Mis proyectos",

            "deja compartir": "Dejame compartir algunos de los proyectos que he elaborado",

            "project1": "App de Gifts",
            "project2": "Software de registro de actividades y fotos",
            "project3": "Software de busqueda de trabajo",
            "project4": "Sistema de registro en calendario",
            "project5": "Landing Page",
            "project6": "Página de busqueda de heroes",

            "experience": "Mi Experiencia",

            "experience_info": "Durante este tiempo he podido ayudar a diversas empresas desarrollando diversas soluciones y requerimientos, permiteme mostrarte en que consistieron",

            "seidor": "En mi tiempo en la empresa elabore soluciones y requerimientos mediante el uso de tecnologias de SAP.\nAdemas, tuve la oportunidad de brindar apoyo tanto a compañeros menos experimentados asi como clientes que requerian conocer el funcionamiento de tecnologias especificas",

            "ulead": "Ayude a la empresa en la toma de requerimientos de clientes de diversas partes del mundo. \n Aporte en el desarrollo de soluciones web en trabajos grupales, delegando y apoyando actividades de mis compañeros.",

            "nelica": "Apoye a la empresa en realizar la maquetación de diseños web que se elaboraban en photoshop.\nAdemas, me desempeñe como lider técnico en algunos de los trabajos asi como tambien, un pequeño rol como reclutador para postulantes que aspiraban unirse a la empresa",

            "tecnologias": "Estas son algunas de las tecnologias con las que eh trabajado",

            "contactame": "Contactame",
            "info_contacto": "Gracias por visitar mi portafolio. Si estás interesado en que te brinde apoyo en algun proyecto, no dudes en contactarme. Estoy siempre abierto a nuevas oportunidades y me encantaría saber cómo puedo ayudarte.\nPuedes comunicarte conmigo a través de mi correo personal o alguna de mis redes sociales. Estaré encantado de responder lo antes posible.\n¡Espero tener noticias tuyas pronto!\nSaludos cordiales, David"
        }
    },
    en: {
        translation: {
            "nav1": "Who am I?",
            "nav2": "My Proyects",
            "nav3": "Experience",
            "nav4": "Contact me",
            

            "Hola soy David": "Hi, I'm David",

            "ing de soft": "Software Engineer",

            "mi info": "Nice to meet you, I am a qualified software engineer who specializes in the field of web and mobile development, I have also had the opportunity to work on web and mobile projects, as well as support in taking requirements and creating systems",

            "mi cv": "Check my CV",

            "mis proyectos": "My projects",

            "deja compartir": "Let me share some of the projects that I have elaborated",

            "project1": "Gift App",
            "project2": "Activity and photo logging software",
            "project3": "Job search software",
            "project4": "Calendar registration system",
            "project5": "Landing Page",
            "project6": "Hero quest page",

            "experience": "My Experience",

            "experience_info": "During this time I have been able to help various companies developing various solutions and requirements, let me show you what they consisted of",

            "seidor": "During my time in the company, I developed solutions and requirements through the use of SAP technologies.\nIn addition, I had the opportunity to provide support to less experienced colleagues as well as clients who required to know the operation of specific technologies.",

            "ulead": "Help the company in taking customer requirements from various parts of the world.\nContribution in the development of web solutions in group work, delegating and supporting activities of my colleagues.",

            "nelica": "Support the company in making the layout of web designs that were made in photoshop.\nIn addition, I served as a technical lead on some of the jobs as well as a small role as a recruiter for applicants who aspired to join the company.",

            "tecnologias": "These are some of the technologies with which I have worked",

            "contactame": "Contact me",
            "info_contacto": "Thanks for visiting my portfolio. If you are interested in me giving you support in any project, do not hesitate to contact me. I am always open to new opportunities and I would love to know how I can help you.\nYou can contact me through my personal email or any of my social networks. I will be happy to answer as soon as possible.\nI hope to hear from you soon!\nKind regards David"
        }
    }
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: "es",
        interpolation: {
            escapeValue: false // react already safes from xss
        }
    });

export default i18n;