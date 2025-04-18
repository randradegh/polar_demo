import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

interface GeneratedContent {
  content: string;
  filename: string;
}

export const generateContent = async (keyword: string, length: string): Promise<GeneratedContent> => {
  const wordCount = {
    short: 250,
    medium: 500,
    long: 1000
  }[length];

  const prompt = `Actúa como un experto en marketing y redacción de contenido.
  Genera un artículo de aproximadamente ${wordCount} palabras sobre el siguiente tema o producto: "${keyword}".
  El contenido debe seguir estas especificaciones:
  
  1. Debe comenzar con un título principal en formato H3 (###)
  2. El contenido debe estar organizado en secciones claras
  3. Cada sección debe tener un subtítulo en formato H4 (####)
  4. El contenido debe ser persuasivo, bien estructurado y optimizado para SEO
  5. Incluye al menos 3 secciones diferentes
  6. Usa viñetas o listas numeradas cuando sea apropiado
  
  Formato esperado:
  ### Título Principal
  
  #### Primera Sección
  Contenido...
  
  #### Segunda Sección
  Contenido...
  
  #### Tercera Sección
  Contenido...`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    const content = completion.choices[0].message.content || '';
    
    // Extraer el título del contenido (asumiendo que está en formato H3)
    const titleMatch = content.match(/### (.*?)[\n\r]/);
    const title = titleMatch ? titleMatch[1].trim() : keyword;
    
    // Generar nombre de archivo con timestamp y título
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const sanitizedTitle = title.toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
    const filename = `${timestamp}_${sanitizedTitle}`;

    return {
      content,
      filename
    };
  } catch (error) {
    console.error('Error al generar contenido:', error);
    throw error;
  }
}; 