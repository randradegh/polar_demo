# ArticleForge

ArticleForge es una aplicación web moderna desarrollada con React y TypeScript que utiliza inteligencia artificial para generar contenido de alta calidad. La aplicación permite a los usuarios crear artículos optimizados para SEO a partir de palabras clave y exportarlos en diferentes formatos.

## Características

- 🤖 Generación de contenido con IA usando GPT-3.5
- 📝 Diferentes longitudes de artículos (corto, medio, largo)
- 💾 Exportación en múltiples formatos:
  - PDF
  - Markdown
  - Word (DOCX)
- 🎨 Interfaz moderna y responsiva con Tailwind CSS
- 🌐 Soporte completo para español

## Requisitos Previos

- Node.js (v16 o superior)
- npm o yarn
- Una API key de OpenAI

## Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd articforge
```

2. Instala las dependencias:
```bash
npm install
```

3. Crea un archivo `.env` en la raíz del proyecto:
```env
VITE_OPENAI_API_KEY=tu_api_key_de_openai
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Uso

1. Ingresa una palabra clave o descripción del tema sobre el que deseas generar contenido
2. Selecciona la longitud deseada para tu artículo
3. Haz clic en "Crear Nuevo Artículo"
4. Una vez generado el contenido, puedes exportarlo en el formato que prefieras:
   - PDF: Ideal para documentos formales
   - Markdown: Perfecto para blogs y plataformas que soporten markdown
   - DOCX: Compatible con Microsoft Word y otros procesadores de texto

## Tecnologías Utilizadas

- React 18
- TypeScript
- Tailwind CSS
- Vite
- OpenAI API
- @react-pdf/renderer
- react-markdown
- docx

## Estructura del Proyecto

```
articforge/
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

## Contribuir

1. Haz un Fork del proyecto
2. Crea una rama para tu característica (`git checkout -b feature/AmazingFeature`)
3. Haz commit de tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## Contacto

Nombre - [@tu_twitter](https://twitter.com/tu_twitter)
Link del Proyecto: [https://github.com/tu_usuario/articforge](https://github.com/tu_usuario/articforge) 