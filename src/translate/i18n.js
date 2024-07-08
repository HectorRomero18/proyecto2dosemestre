// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Definición de recursos de traducción
const resources = {
  en: {
    translation: {
      "home": "Home",
      "skills": "Skills",
      "projects": "Explore",
      "create": "Create",
      "myPublications": "My Publications",
      "edit": "Edit",
      "logout": "Log out",
      "darkMode": "Dark Mode",
      
        "welcome": "Welcome to our Blog!",
        "tagline": "In PIXEL NOTES",
        "roles": ["Have fun", "Explore", "Learn"],
        "explore": "Explore fascinating articles, discover helpful tips, and stay updated with the latest trends on our blog...",
        
  
          
            "blogPages": "Blog/Pages",
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
            
              "start": "Why We Do the Blog?",
              "text": "We want this blog to be your happy place on the Internet. A space where you can find inspiration, learn something new, and feel like part of a great community. Let's discover, learn, and grow together!",
        
        // Añade aquí todas las claves de texto adicionales
    }
  },
  es: {
    translation: {
   
        "home": "Inicio",
      "projects": "Explorar",
      "create": "Crear",
      "myPublications": "Mis Publicaciones",
      "edit": "Editar",
      "logout": "Cerrar Sesión",
      "darkMode": "Modo Oscuro",

        "welcome": "Bienvenido a nuestro Blog!",
        "tagline": "En PIXEL NOTES",
        "roles": ["Diviertete", "Descubre", "Aprende"],
        "explore": "Explora artículos fascinantes, descubre consejos útiles y mantente al día con las últimas tendencias en nuestro blog...",
      
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
          
            "start": "¿Por que hacemos el Blog?",
            "text": "Queremos que este blog sea tu lugar feliz en Internet. Un espacio donde puedas encontrar inspiración, aprender algo nuevo y sentirte parte de una comunidad genial. ¡Vamos a descubrir, aprender y crecer juntos!",
         
               
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
