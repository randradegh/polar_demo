import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateContent = async (keyword: string, length: string) => {
  const wordCount = {
    short: 250,
    medium: 500,
    long: 1000
  }[length];

  const prompt = `Actúa como un experto en marketing y redacción de contenido.
  Genera un artículo de aproximadamente ${wordCount} palabras sobre el siguiente tema o producto: "${keyword}".
  El contenido debe ser persuasivo, bien estructurado y optimizado para SEO.
  Incluye un título atractivo y subtítulos relevantes.`;

  try {
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: prompt }],
      model: "gpt-3.5-turbo",
    });

    return completion.choices[0].message.content;
  } catch (error) {
    console.error('Error al generar contenido:', error);
    throw error;
  }
}; 