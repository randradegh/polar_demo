# Polar Content

Polar Content es una aplicación web moderna desarrollada con React y TypeScript que utiliza la potencia de la inteligencia artificial para generar contenido de alta calidad. Diseñada como parte del curso de Sistemas de Información Gerencial de la Maestría en Alta Dirección de la Facultad de Química - UNAM, esta aplicación demuestra la integración práctica de tecnologías modernas para la generación automatizada de contenido.

## 🚀 Características Principales

- 🤖 **Generación Inteligente de Contenido**
  - Utiliza GPT-3.5 de OpenAI
  - Contenido estructurado con títulos y subtítulos
  - Optimización automática para SEO
  
- 📝 **Flexibilidad en la Generación**
  - Artículos cortos (~250 palabras)
  - Artículos medianos (~500 palabras)
  - Artículos largos (~1000 palabras)

- 💾 **Exportación Versátil**
  - PDF para documentos profesionales
  - Markdown para blogs y CMS
  - Word (DOCX) para edición posterior

- 🎨 **Interfaz Moderna**
  - Diseño responsivo con Tailwind CSS
  - Experiencia de usuario intuitiva
  - Indicadores visuales de progreso

## 🛠️ Tecnologías Utilizadas

- **Frontend:**
  - React 18 con TypeScript
  - Tailwind CSS para estilos
  - Vite como bundler

- **Integración IA:**
  - OpenAI API (GPT-3.5)

- **Exportación:**
  - @react-pdf/renderer
  - react-markdown
  - docx

## 📋 Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- API key de OpenAI

## 🚀 Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd polar-content
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
```bash
# Crea un archivo .env en la raíz del proyecto
VITE_OPENAI_API_KEY=tu_api_key_de_openai
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## 🎯 Uso

1. Ingresa al navegador en `http://localhost:5173`
2. Escribe una palabra clave o tema para tu artículo
3. Selecciona la longitud deseada
4. Haz clic en "Crear Nuevo Artículo"
5. Espera mientras la IA genera tu contenido
6. Exporta el resultado en tu formato preferido

## 📁 Estructura del Proyecto

```
polar-content/
├── src/
│   ├── components/
│   │   ├── ContentGenerator.tsx
│   │   └── ExportButtons.tsx
│   ├── services/
│   │   └── openai.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── .env
└── package.json
```

## 🤝 Contribuir

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/NuevaCaracteristica`)
3. Commit de tus cambios (`git commit -m 'Añade nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## ✨ Créditos

Desarrollado por Roberto Andrade F. como proyecto académico para la Maestría en Alta Dirección (MADEMS) de la Facultad de Química - UNAM, con el apoyo de Cursor AI. Inspirado en [ArticleForge](https://www.articleforge.com/).

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Nombre - [@tu_twitter](https://twitter.com/tu_twitter)
Link del Proyecto: [https://github.com/tu_usuario/articforge](https://github.com/tu_usuario/articforge) 