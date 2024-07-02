// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definición de recursos de traducción
const resources = {
  en: {
    translation: {
      "home": "Home",
      "skills": "Skills",
      "projects": "Projects",
      "create": "Create",
      "myPublications": "My Publications",
      "delete": "Delete",
      "logout": "Logout",
      "darkMode": "Dark Mode",
      
        "welcome": "Welcome to our Blog!",
        "tagline": "We are Unemi",
        "roles": ["Have fun", "Explore", "Learn"],
        "explore": "Explore fascinating articles, discover helpful tips, and stay updated with the latest trends on our blog...",
        "connect": "Connect",
        
          "used": "Used",
          "blogDesc": "This Blog will be powered by React and will use various dependencies and tools.",
          "html": "HTML",
          "javascript": "JavaScript",
          "css": "CSS",
          "react": "React",
      
          
            "blogPages": "Blog Pages",
            "discoverNews": "Discover new news and stay updated!!",
            "first": "First",
            "second": "Second",
            "third": "Third",
            "noItems": "Nothing to show yet :(",
            "technologies": "Technologies",
            "music": "Music",
            "sports": "Sports",
            "science": "Science",
            "movies": "Movies",
            "others": "Others",
            
              "start": "Get Started",
              "firstName": "First Name",
              "lastName": "Last Name",
              "email": "Email",
              "phone": "Phone",
              "message": "Message",
              "send": "Send",
              "sending": "Sending...",
              "messageSent": "Message sent successfully",
              "somethingWrong": "Something went wrong, please try again later",
            
              "title": "This is a sample title for the newsletter. Please let me know if we should keep it or remove it.",
              "sending": "Sending...",
              "emailPlaceholder": "Email Address",
              "send": "Send",
              "successMessage": "Message sent successfully!",
              "errorMessage": "There was a problem, please try again later.",
              "Write to us": "Write to us"
          
        
        
      
        // Añade aquí todas las claves de texto adicionales
    }
  },
  es: {
    translation: {
   
        "home": "Inicio",
      "skills": "Habilidades",
      "projects": "Proyectos",
      "create": "Crear",
      "myPublications": "Mis Publicaciones",
      "delete": "Eliminar",
      "logout": "Cerrar Sesión",
      "darkMode": "Modo Oscuro",

        "welcome": "Bienvenido a nuestro Blog!",
        "tagline": "Somos Unemi",
        "roles": ["Diviertete", "Descubre", "Aprende"],
        "explore": "Explora artículos fascinantes, descubre consejos útiles y mantente al día con las últimas tendencias en nuestro blog...",
        "connect": "Conectar",
        
        "used": "Utilizado",
        "blogDesc": "Este Blog estará impulsado por React y utilizará diversas dependencias y herramientas.",
        "html": "HTML",
        "javascript": "JavaScript",
        "css": "CSS",
        "react": "React",
        
          "blogPages": "Páginas/Blog",
          "discoverNews": "Descubre nuevas noticias y mantente actualizado!!",
          "first": "Primero",
          "second": "Segundo",
          "third": "Tercero",
          "noItems": "Nada para mostrar aún :(",
          "technologies": "Tecnologías",
          "music": "Música",
          "sports": "Deportes",
          "science": "Ciencia",
          "movies": "Cine",
          "others": "Otros",
          
            "start": "Empecemos",
            "firstName": "Nombres",
            "lastName": "Apellidos",
            "email": "Correo",
            "phone": "Teléfono",
            "message": "Mensaje",
            "send": "Enviar",
            "sending": "Enviando...",
            "messageSent": "Mensaje enviado correctamente",
            "somethingWrong": "Algo salió mal, por favor intenta de nuevo más tarde",
          
       
                "title": "Esto es un ejemplo de título para el boletín. Por favor, díganme si deberíamos mantenerlo o eliminarlo.",
                "sending": "Enviando...",
                "emailPlaceholder": "Dirección de correo electrónico",
                "send": "Enviar",
                "successMessage": "¡Mensaje enviado correctamente!",
                "errorMessage": "Hubo un problema, por favor intenta nuevamente más tarde.",
                "Write to us": "Escríbenos"
             
            
          
        
        
      
      // Añade aquí todas las claves de texto adicionales
    }
  }
};

// Inicialización de i18next
i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'es', // Idioma por defecto
    interpolation: {
      escapeValue: false // No escapar los valores de traducción
    }
  });

export default i18n;
